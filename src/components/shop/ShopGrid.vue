<template>
  <div class="courses-grid">
    <BaseCard v-for="product in products" :key="product.id" class="shop-card-wrapper">

      <div class="card-image" @click="goToProduct(product.id)">
        <img :src="product.image" :alt="product.title" />
      </div>

      <div class="card-content">
        <div class="card-header">
          <h3 class="course-title" @click="goToProduct(product.id)">{{ product.title }}</h3>
        </div>
        
        <div class="tags-row">
          <span class="level-badge">{{ product.language }}</span>
          <span class="level-badge outline">{{ product.category }}</span>
        </div>
        
        <p class="course-desc">{{ product.description }}</p>
        
        <div class="card-footer">
          <div class="price-block">
            <span class="price">${{ product.price }}</span>
          </div> 
          <button class="btn-enroll" @click="cartStore.addToCart(product)">
            Add to Cart
          </button>
        </div>
      </div>

    </BaseCard>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore' 
import BaseCard from '@/components/ui/BaseCard.vue' 

defineProps({
  products: {
    type: Array,
    required: true
  }
})

const router = useRouter() 
const cartStore = useCartStore() 

const goToProduct = (id) => {
  router.push(`/shop/${id}`)
}
</script>

<style scoped>
.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px;
}

@media (max-width: 1024px) {
  .courses-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .courses-grid { grid-template-columns: 1fr; }
}

.course-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.card-image {
  height: 200px;
  background-color: #f8fafc;
  cursor: pointer;
  border-bottom: 1px solid #eaeaea;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-header {
  margin-bottom: 15px;
}

.course-title { 
  font-size: 1.4rem; 
  color: #0f172a; 
  margin: 0; 
  cursor: pointer;
  transition: color 0.2s;
}

.course-title:hover {
  color: #2563eb;
}

.tags-row {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.level-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #f1f5f9; 
  color: #475569;
}

.level-badge.outline {
  background-color: transparent;
  border: 1px solid #cbd5e1;
}

.course-desc { 
  color: #64748b; 
  line-height: 1.6; 
  margin-bottom: 24px; 
  flex-grow: 1; 
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price-block { 
  margin-bottom: 20px; 
}

.price { 
  font-size: 1.8rem; 
  font-weight: 700; 
  color: #2563eb; 
}

.btn-enroll {
  width: 100%;
  padding: 14px;
  background-color: #0a0a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-enroll:hover {
  background-color: #1e293b;
}
</style>