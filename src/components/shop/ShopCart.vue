<template>
  <div class="cart-overlay" v-if="cartStore.isCartOpen" @click="cartStore.toggleCart"></div>
  
  <transition name="slide">
    <div class="cart-drawer" v-if="cartStore.isCartOpen">
      
      <div class="cart-header">
        <h2>{{ $t('cart.title') }}</h2>
        <button class="close-btn" @click="cartStore.toggleCart">✕</button>
      </div>

      <div class="cart-body">
        <div v-if="cartStore.items.length === 0" class="empty-cart">
          {{ $t('cart.empty') }}
        </div>
    
        <div v-else class="cart-items">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
            <img :src="item.image" :alt="item.title" class="item-img" />
            
            <div class="item-info">
              <h4>{{ item.title }}</h4>
              <div class="price">${{ item.price }}</div>
              
              <div class="item-actions">
                <div class="quantity-controls">
                  <button @click="cartStore.updateQuantity(item.id, -1)">−</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="cartStore.updateQuantity(item.id, 1)">+</button>
                </div>
                <button class="remove-btn" @click="cartStore.removeFromCart(item.id)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-footer" v-if="cartStore.items.length > 0">
        <div class="total-row">
          <span>{{ $t('cart.total') }}</span>
          <span class="total-price">${{ cartStore.cartTotal.toFixed(2) }}</span>
        </div>
        <button class="checkout-btn" @click="goToCheckout">{{ $t('cart.checkout') }}</button>
      </div>
      
    </div>
  </transition>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const goToCheckout = () => {
  cartStore.toggleCart() 
  router.push('/checkout') 
}
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0; 
  width: 100%;
  max-width: 450px;
  background: white;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
}

.cart-header {
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-header h2 {
  font-size: 1.5rem;
  color: #0f172a;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
}

.cart-body {
  flex: 1 1 auto; 
  overflow-y: auto;
  padding: 20px;
  -webkit-overflow-scrolling: touch;
}

.empty-cart {
  text-align: center;
  color: #64748b;
  padding: 40px 0;
}
.cart-item {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f1f5f9;
}

.item-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #eaeaea;
}

.item-info { flex-grow: 1; display: flex; flex-direction: column; gap: 8px; }
.item-info h4 { margin: 0; font-size: 1.1rem; color: #0f172a; }
.price { color: #64748b; }

.item-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 4px 8px;
}

.quantity-controls button {
  background: none; border: none; cursor: pointer; font-size: 1.2rem; padding: 0 8px;
}

.remove-btn { background: none; border: none; color: #ef4444; cursor: pointer; }

.cart-footer {
  margin-top: auto; 
  padding: 20px;
  border-top: 1px solid #e2e8f0;
  background: white;
  box-sizing: border-box;
  padding-bottom: 30px; 
}

.total-row {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  color: #0f172a;
  margin-bottom: 15px;
}

.checkout-btn {
  width: 100%;
  padding: 16px;
  background-color: #0a0a1a;
  color: white;
  border: none;
  border-radius: 12px; 
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  box-sizing: border-box;
}
.checkout-btn:hover {
  background-color: #1e293b;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>