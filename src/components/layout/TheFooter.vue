<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <span class="logo-icon">🌐</span>
            <span class="logo-text">LinguaLearn</span>
          </router-link>
          <p class="brand-desc">{{ $t('footer.brandDesc') }}</p>
        </div>
        
        <div class="footer-links">
          <h3>{{ $t('footer.quickLinks') }}</h3>
          <router-link to="/">{{ $t('nav.home') }}</router-link>
          <router-link to="/courses">{{ $t('nav.courses') }}</router-link>
          <router-link to="/shop">{{ $t('nav.shop') }}</router-link>
          <router-link to="/contact">{{ $t('nav.contact') }}</router-link>
        </div>

        <div class="footer-contact">
          <h3>{{ $t('footer.contact') }}</h3>
          <p>123 Learning Street</p>
          <p>New York, NY 10001</p>
          <p>info@lingualearn.com</p>
          <p>(555) 123-4567</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>{{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0f172a; 
  color: #94a3b8; 
  padding: 60px 0 20px;
  font-family: 'Inter', sans-serif;
  margin-top: 40px; 
}
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  border-bottom: 1px solid #1e293b;
  padding-bottom: 40px;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .footer-top {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
  text-decoration: none;
}
.logo-icon {
  color: #3b82f6;
}
.brand-desc {
  line-height: 1.6;
  max-width: 320px;
}
.footer-links, .footer-contact {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer-links h3, .footer-contact h3 {
  color: white;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: white;
}
.footer-bottom {
  text-align: center;
  font-size: 0.9rem;
}
</style>