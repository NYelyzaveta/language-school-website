<template>
  <div class="app-wrapper">
    <TheHeader />
    
    <main>
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
}

main {
  min-height: calc(100vh - 80px - 300px); 
}
</style>