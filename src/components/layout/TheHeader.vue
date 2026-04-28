<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">🌐</span>
        <span class="logo-text">LinguaLearn</span>
      </router-link>
      
    <nav class="nav-links">
        <router-link to="/">{{ $t('nav.home') }}</router-link>
        <router-link to="/courses">{{ $t('nav.courses') }}</router-link>
        <router-link to="/shop">{{ $t('nav.shop') }}</router-link>
        <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
    </nav>

    <div class="header-actions">
        <select v-model="locale" class="lang-switcher">
          <option value="uk">УКР</option>
          <option value="en">ENG</option>
          <option value="de">DEU</option>
        </select>

        <router-link to="/contact" class="btn-dark">{{ $t('nav.getStarted') }}</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<style scoped>
.header {
  background-color: white;
  border-bottom: 1px solid #eaeaea;
  padding: 20px 0;
  font-family: 'Inter', sans-serif;
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
.logo-icon {
  color: #1d4ed8;
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
</style>