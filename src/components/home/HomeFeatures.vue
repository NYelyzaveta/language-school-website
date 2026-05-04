<template>
  <section class="features-section">
    <div class="container">
      <div class="section-header">
        <h2>{{ $t('homeFeatures.title') }}</h2>
        <p>{{ $t('homeFeatures.subtitle') }}</p>
      </div>

      <div class="features-grid">
        <BaseCard v-for="feature in features" :key="feature.id">
          
          <div class="icon-wrapper">
            <span class="icon">{{ feature.icon }}</span>
          </div>
          <h3>{{ $t(feature.title) }}</h3>
          <p>{{ $t(feature.description) }}</p>
          
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'

const features = ref([
  { id: 1, icon: '👥', title: 'features.f1Title', description: 'features.f1Desc' },
  { id: 2, icon: '🕒', title: 'features.f2Title', description: 'features.f2Desc' },
  { id: 3, icon: '📖', title: 'features.f3Title', description: 'features.f3Desc' },
  { id: 4, icon: '🏅', title: 'features.f4Title', description: 'features.f4Desc' },
  { id: 5, icon: '📍', title: 'features.f5Title', description: 'features.f5Desc' },
  { id: 6, icon: '🌐', title: 'features.f6Title', description: 'features.f6Desc' }
])
</script>

<style scoped>
.features-section {
  padding: 80px 20px;
  background-color: white;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
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
  font-size: 1.1rem;
  color: #64748b;
}
.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
@media (min-width: 768px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .features-grid { grid-template-columns: repeat(3, 1fr); }
}

.icon-wrapper {
  background-color: #eef2ff;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20px;
}
.icon { font-size: 1.5rem; }
h3 {
  font-size: 1.25rem;
  color: #0f172a;
  margin-bottom: 12px;
}
p {
  color: #64748b;
  line-height: 1.6;
}
</style>