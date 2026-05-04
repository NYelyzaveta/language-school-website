<template>
  <section class="page-header">
    <div class="container text-center">
      <h1>{{ $t('courses.headerTitle') }}</h1>
      <p>{{ $t('courses.headerDesc') }}</p>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  background-color: #eef2ff;
  padding: 80px 20px;
}
.container { max-width: 1000px; margin: 0 auto; }
.text-center { text-align: center; }
.page-header h1 {
  font-size: 3rem; 
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}
.page-header p {
  color: #475569;
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 700px; 
  margin: 0 auto;
}
</style>