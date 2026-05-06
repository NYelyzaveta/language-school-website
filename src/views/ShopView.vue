<template>
  <main class="shop-page">
    <section class="shop-hero">
        <div class="container hero-flex">
            <div class="hero-text">
            <h1>Student Shop</h1>
            <p>Browse our collection of learning materials, textbooks, and study aids</p>
            </div>

            <button class="cart-trigger-btn" @click="cartStore.toggleCart">
            🛒 {{ cartStore.cartCount }} items
            </button>
        </div>
    </section>


    <section class="shop-content container">
      <div class="shop-filters">
        <select v-model="selectedLanguage" class="filter-btn dropdown-btn">
          <option value="">All Languages</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Korean">Korean</option>
        </select>

        <button 
          v-for="cat in categories" 
          :key="cat"
          class="filter-btn"
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
      <div v-if="shopStore.isLoading" class="loading">
        Loading products from database...
      </div>
      <ShopGrid v-else :products="filteredProducts" />
      
    </section>
    <ShopCart />
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useShopStore } from '@/stores/shopStore'
import ShopCart from '@/components/shop/ShopCart.vue'
import ShopGrid from '@/components/shop/ShopGrid.vue' 
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const shopStore = useShopStore()

const categories = ['All Products', 'Textbook', 'Dictionary', 'Workbook', 'Flashcards', 'Audio', 'Grammar', 'Reading']
const selectedCategory = ref('All Products')

const selectedLanguage = ref('') 

onMounted(() => {
  shopStore.fetchProducts()
})

const filteredProducts = computed(() => {
  return shopStore.products.filter(product => {
    const matchCategory = selectedCategory.value === 'All Products' || product.category === selectedCategory.value
    const matchLanguage = selectedLanguage.value === '' || product.language === selectedLanguage.value
    return matchCategory && matchLanguage
  })
})
</script>

<style scoped>
.shop-page {
  min-height: 100vh;
  padding-bottom: 80px;
}

.shop-hero {
  background-color: #eef2ff; 
  padding: 80px 20px;
  margin-bottom: 40px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.shop-hero h1 {
  font-size: 3.5rem;
  color: #0f172a;
  margin-bottom: 16px;
  font-weight: 700;
}

.shop-hero p {
  font-size: 1.2rem;
  color: #475569;
}

.filter-btn {
  padding: 10px 24px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  color: #475569;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  color: #0f172a;
}

.filter-btn.active {
  background-color: white;
  color: #0f172a;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.loading {
  text-align: center;
  padding: 80px;
  font-size: 1.2rem;
  color: #64748b;
}
.hero-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.cart-trigger-btn {
  background-color: white;
  color: #0f172a;
  border: 1px solid #e2e8f0;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.cart-trigger-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}

/* Стиль для селекту, щоб він виглядав як твої кнопки */
.dropdown-btn {
  appearance: none; /* Прибирає стандартну браузерну стрілочку */
  -webkit-appearance: none;
  background-color: white; 
  color: #0f172a;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  border: 1px solid transparent;
  
  /* Малюємо власну акуратну стрілочку через SVG */
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%230f172a%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center; /* Позиція стрілочки */
  background-size: 16px;
  
  /* Робимо відступ справа трохи більшим, щоб текст не наїжджав на стрілочку */
  padding-right: 40px; 
}

.dropdown-btn:focus {
  outline: none;
  border-color: #cbd5e1;
}

/* Якщо хочеш, щоб на мобільних пристроях фільтри теж виглядали гарно і не злипалися */
.shop-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
  background: #f8fafc;
  padding: 10px;
  border-radius: 30px;
  width: fit-content;
  align-items: center; /* Додаємо вирівнювання по центру */
}
</style>