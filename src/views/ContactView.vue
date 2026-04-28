<template>
  <div class="contact-view">
    <section class="page-header">
      <div class="container text-center">
        <h1>Contact Us</h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>
    </section>

    <section class="content-section">
      <div class="container grid-layout">
        <div class="left-col">
          <ContactForm />
        </div>
        
        <div class="right-col">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ContactForm from '@/components/contact/ContactForm.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
import ContactMap from '@/components/contact/ContactMap.vue'
</script>


<style scoped>
.page-header {
  background-color: #eef2ff;
  padding: 80px 20px;
}
.text-center {
  text-align: center;
}
.page-header h1 {
  font-size: 3rem;
  color: #0f172a;
  margin-bottom: 16px;
}
.page-header p {
  font-size: 1.2rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
}
.content-section {
  padding: 60px 20px;
  background-color: #ffffff;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

</style>