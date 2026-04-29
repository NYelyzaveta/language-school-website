<template>
  <section class="hero-section">
    <div class="hero-container">
      
      <div class="hero-content">
        <h1 class="hero-title">{{ $t('hero.title1') }}<br>{{ $t('hero.title2') }}</h1>
        <p class="hero-subtitle">
          {{ $t('hero.subtitle') }} 
        </p>
        <div class="hero-buttons">
          <router-link to="/courses" class="btn-primary">{{ $t('hero.btnPrimary') }}</router-link>
          <router-link to="/contact" class="btn-outline">{{ $t('hero.btnOutline') }}</router-link>
        </div>
      </div>
      
      <div class="hero-image-wrapper">
        <img 
          src="https://media.istockphoto.com/id/1430114144/photo/diverse-group-of-college-students-listen-to-the-unseen-professor.jpg?s=612x612&w=0&k=20&c=YYLZes6hFNiK3ePqtLFsVf04ffNQZWil4QP-LqWVYHM=" 
          alt="Students learning" 
          class="hero-img"
        />
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: #eff6ff;
  padding: 60px 20px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

@media (min-width: 992px) {
  .hero-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }
  
  .hero-content {
    flex: 1;
    padding-right: 40px; 
  }

  .hero-image-wrapper {
    flex: 1.2; 
  }
}

.hero-title {
  font-size: 3.5rem; 
  font-weight: 800;
  color: #0f172a;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 480px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: #0f172a;
  color: white;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #1e293b;
}

.btn-outline {
  background-color: white;
  color: #0f172a;
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid #cbd5e1;
  transition: all 0.2s;
}

.btn-outline:hover {
  border-color: #0f172a;
}

.hero-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08); 
}
</style>