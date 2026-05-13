<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="logo" @click="closeMenu">
        <span class="logo-text">LinguaLearn</span>
      </router-link>

      <div class="nav-group" :class="{ 'is-open': isMenuOpen }">
        <nav class="nav-links">
          <router-link to="/" @click="closeMenu">{{ $t('nav.home') }}</router-link>
          <router-link to="/courses" @click="closeMenu">{{ $t('nav.courses') }}</router-link>
          <router-link to="/shop" @click="closeMenu">{{ $t('nav.shop') }}</router-link>
          <router-link to="/contact" @click="closeMenu">{{ $t('nav.contact') }}</router-link>
        </nav>
      </div>

      <div class="header-actions">
        <select v-model="locale" class="lang-switcher">
          <option value="uk">УКР</option>
          <option value="en">ENG</option>
          <option value="de">DEU</option>
          <option value="ko">한국어</option>
        </select>
        
        <div class="auth-block desktop-only">
          <template v-if="authStore.user">
            <span class="user-name" :title="authStore.user.email">
              👋 {{ authStore.user.displayName?.split(' ')[0] || authStore.user.email.split('@')[0] }}
            </span>
            
            <router-link 
              v-if="authStore.isAdmin" 
              to="/admin" 
              class="btn-outline admin-btn"
              @click="closeMenu"
            >
              Admin
            </router-link>

            <button @click="authStore.logout" class="btn-outline">{{ $t('auth.logout') }}</button>
          </template>
          
          <router-link v-else to="/login" class="btn-outline" @click="closeMenu">
            {{ $t('auth.login') }}
          </router-link>
        </div>

        <router-link to="/contact" class="btn-dark desktop-only" @click="closeMenu">
          Get Started
        </router-link>
          
        <button class="mobile-menu-btn" @click="toggleMenu">
          <span v-if="!isMenuOpen" class="burger-icon">☰</span>
          <span v-else class="close-icon">✕</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const authStore = useAuthStore()
const { locale } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background-color: white;
  border-bottom: 1px solid #eaeaea;
  padding: 16px 0;
  font-family: 'Inter', sans-serif;
  position: relative;
  z-index: 100;
}
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #0a0a1a;
  text-decoration: none;
}
.nav-group {
  display: flex;
  align-items: center;
}
.nav-links {
  display: flex;
  gap: 32px;
}
.nav-links a {
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover, 
.nav-links a.router-link-active {
  color: #1d4ed8; 
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px; 
}

.lang-switcher {
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background-color: #f8fafc;
  color: #0f172a;
  font-weight: 500;
  cursor: pointer;
  outline: none;
}
.lang-switcher:focus {
  border-color: #1d4ed8;
}

.auth-block {
  display: flex;
  align-items: center;
  gap: 12px;
  border-right: 1px solid #e2e8f0; 
  padding-right: 16px;
  margin-right: 4px;
}

.user-name {
  font-weight: 600;
  color: #0f172a;
  font-size: 0.95rem;
  
  max-width: 150px; 
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
  display: inline-block;
  vertical-align: middle;
}

.btn-outline {
  background-color: transparent;
  color: #0f172a;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-outline:hover {
  background-color: #f1f5f9;
  border-color: #94a3b8;
}

.btn-dark {
  background-color: #0a0a1a;
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}
.btn-dark:hover {
  background-color: #1e293b;
}

.admin-btn {
  color: #dc2626; 
  border-color: #dc2626;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.admin-btn:hover {
  background-color: #fef2f2;
  border-color: #b91c1c;
  color: #b91c1c;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #0f172a;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

@media (max-width: 768px) {
  .desktop-only { display: none; }
  .mobile-menu-btn { display: block; }
  .nav-group {
    display: none; 
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px;
    border-bottom: 1px solid #eaeaea;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  .nav-group.is-open { display: flex; justify-content: center; }
  .nav-links {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    width: 100%;
  }
  .nav-links a {
    font-size: 1.2rem;
    padding: 10px 0;
    display: block;
  }
}
</style>