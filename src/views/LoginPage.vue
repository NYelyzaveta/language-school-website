<template>
  <div class="contact-form-card login-wrapper">
    <h2>{{ isRegister ? 'Registration' : 'Sign In' }}</h2>
    <p class="subtitle">Enter your details to access courses</p>

    <form @submit.prevent="handleAuth" class="form">
      <div class="form-group">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="example@mail.com" required />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="password" type="password" placeholder="••••••••" required />
      </div>

      <button type="submit" class="btn-submit">
        {{ isRegister ? 'Create Account' : 'Sign In' }}
      </button>
    </form>

    <div class="divider">
      <span>or</span>
    </div>

    <button @click="loginWithGoogle" class="btn-google">
      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" />
      Sign In with Google
    </button>

    <p class="toggle-auth">
      {{ isRegister ? 'Already have an account?' : 'Don\'t have an account?' }}
      <a href="#" @click.prevent="isRegister = !isRegister">
        {{ isRegister ? 'Sign In' : 'Sign Up' }}
      </a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const isRegister = ref(false) 

const handleAuth = async () => {
  if (isRegister.value) {
    await authStore.registerWithEmail(email.value, password.value)
  } else {
    await authStore.loginWithEmail(email.value, password.value)
  }
  
  if (authStore.user) router.push('/') 
}

const loginWithGoogle = async () => {
  await authStore.loginWithGoogle()
  if (authStore.user) router.push('/')
}
</script>
<style scoped>
.login-wrapper { 
  max-width: 400px; 
  margin: 80px auto; 
  padding: 40px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  text-align: center; 
}

h2 { margin-bottom: 10px; color: #0f172a; }
.subtitle { color: #64748b; margin-bottom: 25px; font-size: 0.95rem; }

.form-group {
  text-align: left;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #334155;
  font-size: 0.9rem;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box; 
  transition: border-color 0.2s;
}

input:focus {
  outline: none;
  border-color: #1d4ed8;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background-color: #0a0a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 10px;
}

.btn-submit:hover { background-color: #1e293b; }

.divider { 
  margin: 25px 0; 
  position: relative; 
  border-bottom: 1px solid #e2e8f0; 
}

.divider span { 
  position: absolute; 
  top: -10px; 
  left: 50%; 
  transform: translateX(-50%); 
  background: white; 
  padding: 0 15px; 
  color: #94a3b8; 
  font-size: 0.85rem; 
}

.btn-google { 
  width: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 12px; 
  padding: 12px; 
  border: 1px solid #cbd5e1; 
  border-radius: 8px; 
  background: white; 
  font-weight: 600; 
  cursor: pointer; 
  transition: all 0.2s; 
  color: #0f172a;
  font-size: 1rem;
}

.btn-google:hover { 
  background: #f8fafc;
  border-color: #94a3b8;
}

.btn-google img {
  width: 24px;
  height: 24px;
}

.toggle-auth { 
  margin-top: 25px; 
  font-size: 0.9rem; 
  color: #64748b; 
}

.toggle-auth a { 
  color: #1d4ed8; 
  text-decoration: none; 
  font-weight: 600; 
  margin-left: 5px;
}

.toggle-auth a:hover { text-decoration: underline; }
</style>