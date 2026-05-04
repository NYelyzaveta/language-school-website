<template>
  <div class="filter-bar">
    <div class="results-info">
      <span>Showing <strong>{{ count }}</strong> courses</span>
    </div>
    
    <div class="filter-actions">
      <select v-model="selectedLanguage" class="filter-select">
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Korean">Korean</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

defineProps({
  count: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['filter-changed'])
const selectedLanguage = ref('')

watch(selectedLanguage, (newValue) => {
  emit('filter-changed', newValue)
})
</script>

<style scoped>
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 30px;
}

.results-info { color: #64748b; }

.filter-select {
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: white;
  color: #0f172a;
  outline: none;
  cursor: pointer;
}
</style>