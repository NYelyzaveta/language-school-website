import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  const isAdmin = computed(() => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL
    return user.value && user.value.email === adminEmail
  })

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      user.value = result.user
    } catch (error) {
      console.error('Google Auth error:', error)
    }
  }

  const registerWithEmail = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      user.value = result.user
    } catch (error) {
      alert(error.message)
    }
  }

  const loginWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      user.value = result.user
    } catch (error) {
      alert('Invalid email or password')
    }
  }

  const logout = async () => {
    await signOut(auth)
    user.value = null
  }

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser
  })

  return { user, isAdmin, loginWithGoogle, registerWithEmail, loginWithEmail, logout }
})
