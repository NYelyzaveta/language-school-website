<template>
  <section class="popular-courses">
    <div class="container">
      <div class="section-header">
        <h2>Our Popular Courses</h2>
        <p>Start your language journey with our most highly-rated programs.</p>
      </div>
      
      <div v-if="isLoading" class="loading-state">
        Loading popular courses...
      </div>
      
      <div v-else class="courses-wrapper">
        <CoursesGrid :courses="popularCourses" />
        
        <div class="view-all-action">
          <router-link to="/courses" class="btn-view-all">
            Explore All Courses
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCoursesStore } from '@/stores/coursesStore'

import CoursesGrid from '@/components/courses/CoursesGrid.vue'

const coursesStore = useCoursesStore()
const { coursesList, isLoading } = storeToRefs(coursesStore)

const popularCourses = computed(() => {
  return coursesList.value.slice(0, 3) 
})

onMounted(() => {
  if (coursesList.value.length === 0) {
    coursesStore.fetchCourses()
  }
})
</script>

<style scoped>
.popular-courses {
  padding: 80px 0;
  background-color: #f8fafc; 
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #0f172a;
  margin-bottom: 12px;
}

.section-header p {
  color: #64748b;
  font-size: 1.1rem;
}

.loading-state {
  text-align: center;
  padding: 40px;
  color: #64748b;
}

.view-all-action {
  text-align: center;
  margin-top: 50px;
}

.btn-view-all {
  display: inline-block;
  padding: 14px 32px;
  background-color: #0f172a;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}

.btn-view-all:hover {
  background-color: #1e293b;
}
</style>