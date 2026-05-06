<template>
  <div class="page-wrapper">
    <div v-if="!product" class="loading-container container">
      <p>Loading product information...</p>
    </div>
    <div v-else class="product-detail-container container">
      <div class="product-hero">
        <div class="product-image-wrapper">
          <img :src="product.image" :alt="product.title" class="main-image" />
        </div>

        <div class="product-info">
          <div class="tags">
            <span class="badge lang">{{ product.language }}</span>
            <span class="badge cat">{{ product.category }}</span>
          </div>

          <h1 class="title">{{ product.title }}</h1>
          
          <div class="price-block">
            <span class="price">${{ product.price }}</span>
          </div>

          <p class="description">{{ product.description }}</p>

          <button class="btn-add-to-cart" @click="cartStore.addToCart(product); cartStore.isCartOpen = true">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    <ShopCart />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useShopStore } from '@/stores/shopStore'
import { useCartStore } from '@/stores/cartStore'
import ShopCart from '@/components/shop/ShopCart.vue'

const route = useRoute()
const shopStore = useShopStore()
const cartStore = useCartStore()

const product = computed(() => {
  return shopStore.products.find(p => p.id === route.params.id)
})

onMounted(async () => {
  if (shopStore.products.length === 0) {
    await shopStore.fetchProducts()
  }
})

</script>

<style scoped>
.page-wrapper {
  padding: 40px 0 80px;
  min-height: 80vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.product-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
}

@media (max-width: 768px) {
  .product-hero {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

.product-image-wrapper {
  background: #f8fafc;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eaeaea;
}

.main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tags {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.badge.lang {
  background-color: #e0e7ff;
  color: #3730a3;
}

.badge.cat {
  background-color: #f1f5f9;
  color: #475569;
  border: 1px solid #cbd5e1;
}

.title {
  font-size: 2.5rem;
  color: #0f172a;
  margin: 0 0 20px 0;
  line-height: 1.2;
}

.price-block {
  margin-bottom: 30px;
}

.price {
  font-size: 2rem;
  font-weight: 700;
  color: #2563eb;
}

.description {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 40px;
}

.btn-add-to-cart {
  background-color: #0f172a;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  width: fit-content;
}

.btn-add-to-cart:hover {
  background-color: #1e293b;
}

.btn-add-to-cart:active {
  transform: scale(0.98);
}

.loading-container {
  text-align: center;
  padding: 100px 0;
  font-size: 1.2rem;
  color: #64748b;
}
</style>