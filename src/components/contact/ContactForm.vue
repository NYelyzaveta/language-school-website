<template>
  <div class="contact-form-card">
    <h2>Send us a Message</h2>
    <p class="subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label>Full Name *</label>
        <input v-model="form.fullName" type="text" placeholder="John Doe" required />
      </div>

      <div class="form-group">
        <label>Email Address *</label>
        <input v-model="form.email" type="email" placeholder="john@example.com" required />
      </div>

      <div class="form-group">
        <label>Phone Number</label>
        <input v-model="form.phone" type="tel" placeholder="(555) 123-4567" />
      </div>

      <div class="form-group">
        <label>Interested In</label>
        <select v-model="form.interest">
          <option value="" disabled>Select a language</option>
          <option value="korean">Korean</option>
          <option value="german">German</option>
          <option value="english">English</option>
        </select>
      </div>

      <div class="form-group">
        <label>Message *</label>
        <textarea v-model="form.message" rows="4" placeholder="Tell us about your language learning goals..." required></textarea>
      </div>

      <button type="submit" class="btn-submit">Send Message</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue' 
import { useRoute } from 'vue-router' 

const route = useRoute() 

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  interest: '',
  message: ''
})

onMounted(() => {
  if (route.query.selectedCourse) {
    const courseName = route.query.selectedCourse
    const courseLevel = route.query.selectedLevel || ''
    form.interest = courseName.toLowerCase()
    form.message = `Hello! I would like to enroll in the ${courseName} course (${courseLevel} level). Please provide more details.`
  }
})

watch(() => form.phone, (newValue) => {
  form.phone = newValue.replace(/[^\d\s()+-]/g, '')
})

const handleSubmit = () => {
  console.log('Дані на відправку:', form)
  alert(`Дякуємо, ${form.fullName}! Ваше повідомлення отримано.`)

  form.fullName = ''
  form.email = ''
  form.phone = ''
  form.interest = ''
  form.message = ''
}
</script>

<style scoped>
.contact-form-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #eaeaea;
}
.contact-form-card h2 {
  margin-bottom: 8px;
  color: #0f172a;
}
.subtitle {
  color: #64748b;
  margin-bottom: 24px;
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #0f172a;
}
input, select, textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f8fafc;
  font-family: inherit;
}
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #1d4ed8;
  background-color: white;
}
.btn-submit {
  width: 100%;
  padding: 14px;
  background-color: #0a0a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}
.btn-submit:hover {
  background-color: #1e293b;
}
</style>