<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-card {
  padding: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: white;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%; 
}

.base-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}
</style>