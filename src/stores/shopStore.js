import { defineStore } from 'pinia'
import { ref } from 'vue'
import  db  from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore/lite'

export const useShopStore = defineStore('shop', () => {
  const products = ref([])
  const isLoading = ref(false)

  async function fetchProducts() {
    if (products.value.length > 0) return

    isLoading.value = true
    try {
      const querySnapshot = await getDocs(collection(db, 'products'))
      const productsArray = []
      querySnapshot.forEach((doc) => {
        productsArray.push({ id: doc.id, ...doc.data() })
      })
      products.value = productsArray
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    products,
    isLoading,
    fetchProducts,
  }
})
