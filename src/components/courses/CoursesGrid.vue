<template>
  <div class="courses-grid">
    <div v-for="course in courses" :key="course.id" class="course-card">
      
      <div class="card-header">
        <h3 class="course-title">{{ course.title }}</h3>
        <span class="level-badge" :class="course.level?.toLowerCase()">
          {{ course.level }}
        </span>
      </div>
      
      <p class="course-desc">{{ course.description }}</p>
      
      <div class="course-details">
        <div class="detail-item">
          <span>📅 {{ course.duration }}</span>
        </div>
        <div class="detail-item">
          <span>⏰ {{ course.schedule }}</span>
        </div>
        <div class="detail-item">
          <span>👥 {{ course.students }} students max</span>
        </div>
      </div>
      
      <div class="card-footer">
        <div class="price-block">
          <span class="price">${{ course.price }}</span>
          <span class="per-course">per course</span>
        </div> 
        <button class="btn-enroll" @click="goToContact(course)">Enroll Now</button>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  courses: {
    type: Array,
    required: true
  }
})

const router = useRouter() 

const goToContact = (course) => {
  router.push({
    path: '/contact',
    query: {
      selectedCourse: course.title, 
      selectedLevel: course.level
    }
  })
}
</script>

<style scoped>
.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px;

}

@media (max-width: 1024px) {
  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .courses-grid {
    grid-template-columns: 1fr;
  }
}

.course-card {
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.course-title { font-size: 1.5rem; color: #0f172a; margin: 0; }

.level-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
}

.level-badge.beginner { background-color: #dcfce7; color: #166534; }
.level-badge.intermediate { background-color: #fef08a; color: #854d0e; }
.level-badge.advanced { background-color: #fee2e2; color: #991b1b; }

.course-desc { color: #64748b; line-height: 1.6; margin-bottom: 24px; flex-grow: 1; }

.course-details { margin-bottom: 24px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px; }
.detail-item { margin-bottom: 8px; font-size: 0.95rem; color: #475569; }

.price-block { display: flex; align-items: baseline; gap: 6px; margin-bottom: 20px; }
.price { font-size: 1.8rem; font-weight: 700; color: #2563eb; }
.per-course { color: #94a3b8; font-size: 0.85rem; }

.btn-enroll {
  width: 100%;
  padding: 14px;
  background-color: #0a0a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
</style>