<template>
  <main class="courses-page">
    <CoursesHeader />

    <section class="catalog-section">
      <div class="container">
        
        <div v-if="isLoading" class="loading-state">
          <h2>Loading courses from database...</h2>
        </div>
        
        <div v-else class="catalog-wrapper">
          <CoursesFilter :count="filteredCourses.length" @filter-changed="activeFilter = $event" />
          <CoursesGrid :courses="filteredCourses" />
        </div>

      </div>
    </section>

    <CoursesCta />
  </main>
</template>


<script setup>
import { onMounted, computed, ref } from 'vue' 
import { storeToRefs } from 'pinia'
import { useCoursesStore } from '@/stores/coursesStore.js'

import CoursesHeader from '@/components/courses/CoursesHeader.vue'
import CoursesGrid from '@/components/courses/CoursesGrid.vue'
import CoursesCta from '@/components/courses/CoursesCta.vue'
import CoursesFilter from '@/components/courses/CoursesFilter.vue'

const coursesStore = useCoursesStore()
const { coursesList, isLoading } = storeToRefs(coursesStore)

const activeFilter = ref('')

const filteredCourses = computed(() => {
  if (!activeFilter.value) {
    return coursesList.value
  }
  return coursesList.value.filter(course => course.title === activeFilter.value)
})

onMounted(() => {
  if (coursesList.value.length === 0) {
    coursesStore.fetchCourses()
  }
})
</script>

<style scoped>
.catalog-section {
  padding: 60px 0;
  background-color: #f8fafc;
}
.container {
  max-width: 1200px; 
  margin: 0 auto;
  padding: 0 20px;
}
.catalog-wrapper {
  width: 100%;
}
</style>