<template>
  <div class="contact-info">
    <h2>Get in Touch</h2>
    <p class="subtitle">Whether you're ready to enroll or just have a few questions, our team is here to help.</p>

    <div class="info-cards">
      <div class="info-card">
        <div class="icon">📍</div>
        <div>
          <h3>Visit Us</h3>
          <p>123 Learning Street<br>New York, NY 10001</p>
        </div>
      </div>

      <div class="info-card">
        <div class="icon">📞</div>
        <div>
          <h3>Call Us</h3>
          <p>Main: (555) 123-4567<br>Support: (555) 123-4568</p>
        </div>
      </div>

      <div class="info-card">
        <div class="icon">✉️</div>
        <div>
          <h3>Email Us</h3>
          <p>info@lingualearn.com<br>support@lingualearn.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  margin-bottom: 32px;
}
.contact-info h2 {
  color: #0f172a;
  margin-bottom: 12px;
}
.subtitle {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.info-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  background: white;
}
.icon {
  background: #eef2ff;
  color: #1d4ed8;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 1.2rem;
}
.info-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #0f172a;
}
.info-card p {
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}
</style>