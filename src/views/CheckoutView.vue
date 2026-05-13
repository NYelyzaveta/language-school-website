<template>
  <div class="checkout-page">
    <div class="checkout-container">
      
      <div class="order-summary">
        <h2>Your Order</h2>
        <ul v-if="cartStore.items.length > 0" class="item-list">
          <li v-for="item in cartStore.items" :key="item.id">
            <span>{{ item.title }} (x{{ item.quantity }})</span>
            <strong>${{ item.price * item.quantity }}</strong>
          </li>
        </ul>
        <p v-else>Cart is empty 🛒</p>
        <div class="total">
          <span>Total to pay:</span>
          <strong>${{ cartStore.cartTotal }}</strong>
        </div>
      </div>

      <div class="form-section">
        <h2>Delivery Information</h2>
        <p class="subtitle">Please fill in the delivery information for your merchandise</p>

        <form @submit.prevent="submitOrder" class="form">
          <div class="form-group">
            <label>Full Name</label>
            <input v-model="orderForm.fullName" type="text" placeholder="John Doe" required />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input v-model="orderForm.email" type="email" placeholder="john@example.com" required />
          </div>

          <div class="form-group">
            <label>Phone</label>
            <input v-model="orderForm.phone" type="tel" placeholder="+1..." required />
          </div>

          <div class="form-group">
            <label>Delivery Address</label>
            <textarea v-model="orderForm.address" rows="3" placeholder="City, Street address, postal code..." required></textarea>
          </div>

          <button type="submit" class="btn-submit" :disabled="isSubmitting || cartStore.items.length === 0">
            {{ isSubmitting ? 'Processing...' : 'Confirm Order' }}
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import db from '@/firebase/config'
import { collection, addDoc } from 'firebase/firestore/lite'

import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()

const cartStore = useCartStore()
const router = useRouter()
const isSubmitting = ref(false)

const orderForm = reactive({
  fullName: '',
  email: '',
  phone: '',
  address: ''
})

onMounted(() => {
  if (authStore.user) {
    orderForm.fullName = authStore.user.displayName || ''
    orderForm.email = authStore.user.email || ''
  }
})

const submitOrder = async () => {
  if (cartStore.items.length === 0) {
    alert('Your cart is empty!')
    return 
  }

  isSubmitting.value = true

  try {
    const finalOrder = {
      customer: { ...orderForm },
      items: cartStore.items,
      totalAmount: cartStore.cartTotal,
      createdAt: new Date().toISOString()
    }

    await addDoc(collection(db, 'orders'), finalOrder)

    alert('Order accepted! We will contact you soon.')
    cartStore.clearCart() 
    router.push('/') 
  } catch (e) {
    console.error(e)
    alert('Error creating order')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.checkout-page {
  padding: 40px 20px;
  background-color: #ffffff;
}

.checkout-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px; 
}

h2 {
  color: #0f172a;
  margin-bottom: 15px;
}

.subtitle {
  color: #64748b;
  margin-bottom: 25px;
}

.order-summary {
  background: #f8fafc;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.item-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.item-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: #334155;
  font-size: 1.05rem;
}

.total {
  margin-top: 20px;
  border-top: 2px solid #e2e8f0;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  color: #0f172a;
}

.form-section {
  background: white;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #0f172a;
}

input, textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f8fafc;
  font-family: inherit;
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #1d4ed8;
  background-color: white;
}

.btn-submit {
  width: 100%;
  padding: 16px;
  background-color: #0a0a1a;
  color: white;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;
}

.btn-submit:hover:not(:disabled) {
  background-color: #1e293b;
}

.btn-submit:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}
</style>