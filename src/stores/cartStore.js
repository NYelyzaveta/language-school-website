import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isCartOpen = ref(false)

  const cartCount = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  function toggleCart() {
    isCartOpen.value = !isCartOpen.value
  }

  function addToCart(product) {
    const existingItem = items.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }

    isCartOpen.value = true
  }

  function updateQuantity(productId, amount) {
    const item = items.value.find((item) => item.id === productId)
    if (item) {
      item.quantity += amount
      if (item.quantity <= 0) {
        removeFromCart(productId)
      }
    }
  }

  function removeFromCart(productId) {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    isCartOpen,
    cartCount,
    cartTotal,
    toggleCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  }
})
