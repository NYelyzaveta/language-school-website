<template>
  <section class="cta-section">
    <div class="container text-center">
      <h2>{{ $t('cta.title') }}</h2>
      <p>{{ $t('cta.desc') }}</p>
      
      <div class="cta-buttons">
        <router-link to="/contact" class="btn-light">{{ $t('cta.btnPrimary') }}</router-link>
        <router-link to="/courses" class="btn-outline-light">{{ $t('cta.btnSecondary') }}</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background-color: #2563eb;
  padding: 80px 20px;
  color: white;
  margin-bottom: -40px;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
h2 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 700;
}
p {
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 32px;
}
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
.btn-light {
  background-color: white;
  color: #2563eb;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}
.btn-light:hover {
  background-color: #f8fafc;
}

.btn-outline-light {
  background-color: transparent; 
  color: white; 
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid white; 
  transition: all 0.2s;
}
.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.1); 
}
</style>