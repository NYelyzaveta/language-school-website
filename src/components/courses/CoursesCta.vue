<template>
  <section class="cta-section">
    <div class="container text-center">
      <h2>Not Sure Which Course to Choose?</h2>
      <p>Our language advisors are here to help you find the perfect course for your goals and schedule.</p>
      <router-link to="/contact" class="btn-consultation">Get Free Consultation</router-link>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  background-color: #eef2ff;; 
  padding: 80px 20px;
  border-top: 1px solid #eaeaea;
  margin-bottom: 0; 
}
.container { max-width: 1000px; margin: 0 auto; }
.text-center { text-align: center; }
.cta-section h2 { font-size: 2.5rem; color: #0f172a; margin-bottom: 16px; }
.cta-section p { color: #475569; font-size: 1.1rem; margin-bottom: 30px; }

.btn-consultation {
  display: inline-block;
  background-color: #0a0a1a;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}
.btn-consultation:hover { background-color: #1e293b; }
</style>