<template>
  <div class="admin-wrapper">
    <div class="admin-header">
      <h2>Admin Panel</h2>
      <p class="subtitle">Manage orders and requests</p>
    </div>

    <div class="tabs">
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'orders' }"
        @click="activeTab = 'orders'"
      >
        📦 Merchandise Orders
      </button>
      <button
        class="tab-btn"
        :class="{ active: activeTab === 'requests' }"
        @click="activeTab = 'requests'"
      >
        🎓 Course Requests
      </button>
    </div>

    <div v-if="isLoading" class="loading">Loading data...</div>

    <div v-else class="content-list">
      
      <template v-if="activeTab === 'orders'">
        <div v-if="orders.length === 0" class="empty-state">
          No orders yet. Nobody has bought your merchandise.
        </div>

        <div v-for="order in orders" :key="order.id" class="list-item">
          <div class="item-header">
            <div>
              <strong>{{ order.customer?.fullName }}</strong>
              <span class="price">${{ order.totalAmount }}</span>
            </div>
            
            <button @click="deleteItem('orders', order.id)" class="btn-delete">
              🗑️ Delete
            </button>
          </div>
          
          <p class="details">{{ order.customer?.email }} | {{ order.customer?.phone }}</p>
          <ul class="simple-list">
            <li v-for="item in order.items" :key="item.id">
              {{ item.title }} (x{{ item.quantity }})
            </li>
          </ul>
        </div>
      </template>

      <template v-if="activeTab === 'requests'">
        <div v-if="requests.length === 0" class="empty-state">
          No course requests yet. Try filling out the form on the Contact page!
        </div>

        <div v-for="req in requests" :key="req.id" class="list-item">
          <div class="item-header">
            <div>
              <strong>{{ req.fullName || req.name }}</strong>
              <span class="badge">{{ req.interest || 'Course' }}</span>
            </div>

            <button @click="deleteItem('course_registrations', req.id)" class="btn-delete">
              🗑️ Delete
            </button>
          </div>
          
          <p class="details">{{ req.email }} | {{ req.phone }}</p>
          <p class="message-box" v-if="req.message">"{{ req.message }}"</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DbOperations from '@/helpers/DbOperations'
import { doc, deleteDoc } from 'firebase/firestore/lite'
import db from '@/firebase/config' 

const activeTab = ref('orders')
const isLoading = ref(true)

const orders = ref([])
const requests = ref([])

const ordersDB = new DbOperations('orders')
const requestsDB = new DbOperations('course_registrations')

const deleteItem = async (collectionName, id) => {
  if (!confirm('Are you sure you want to delete this record?')) return;

  try {
    await deleteDoc(doc(db, collectionName, id));
    
    if (collectionName === 'orders') {
      orders.value = orders.value.filter(item => item.id !== id);
    } else {
      requests.value = requests.value.filter(item => item.id !== id);
    }
    
  } catch (error) {
    console.error("Deletion error:", error);
    alert('Failed to delete record.');
  }
}

onMounted(async () => {
  isLoading.value = true
  try {
    orders.value = await ordersDB.loadItemsList()
    requests.value = await requestsDB.loadItemsList()
  } catch (error) {
    console.error('Error loading database:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
.admin-wrapper {
  max-width: 900px;
  margin: 40px auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}

.admin-header {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  color: #0f172a;
  margin-bottom: 8px;
  font-size: 1.8rem;
}
.subtitle {
  color: #64748b;
  font-size: 1rem;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 40px;
  background: #f1f5f9;
  padding: 6px;
  border-radius: 10px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.tab-btn {
  padding: 10px 24px;
  border: none;
  background: transparent;
  border-radius: 8px;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.tab-btn:hover {
  color: #0f172a;
}

.tab-btn.active {
  background: #ffffff;
  color: #0f172a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.list-item {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 24px;
  margin-bottom: 20px;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.list-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-color: #cbd5e1;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #e2e8f0;
}

.item-header strong {
  font-size: 1.1rem;
  color: #0f172a;
  text-transform: uppercase;
  margin-right: 15px;
}

.price {
  font-weight: 800;
  color: #10b981;
  font-size: 1.25rem;
  background: #d1fae5;
  padding: 4px 12px;
  border-radius: 20px;
}

.badge {
  background: #e0e7ff;
  color: #4338ca;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
}

.details {
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.message-box {
  font-style: italic;
  color: #334155;
  background: #f8fafc;
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid #cbd5e1;
}

.simple-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.simple-list li {
  padding: 10px 14px;
  background: #f8fafc;
  border-radius: 8px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  color: #334155;
  display: flex;
  align-items: center;
  border: 1px solid #f1f5f9;
}
.simple-list li::before {
  content: '👉';
  margin-right: 10px;
}

.loading {
  text-align: center;
  padding: 40px;
  color: #64748b;
  font-weight: 600;
}

.empty-state {
  text-align: center;
  padding: 50px 20px;
  background: #f8fafc;
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  color: #64748b;
  font-weight: 500;
  font-size: 1.1rem;
}

.btn-delete {
  background: transparent;
  border: 1px solid #fca5a5;
  color: #ef4444;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
}

.btn-delete:hover {
  background: #fef2f2;
  border-color: #ef4444;
}
</style>