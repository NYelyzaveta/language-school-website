<template>
  <div class="contact-info">
    <h2>{{ $t('contactInfo.title') }}</h2>
    <p class="subtitle">{{ $t('contactInfo.subtitle') }}</p>

    <div class="info-cards">
      <div class="info-card">
        <div class="icon">📍</div>
        <div>
          <h3>{{ $t('contactInfo.visitUs') }}</h3>
          <p>{{ $t('contactInfo.address1') }}<br>{{ $t('contactInfo.address2') }}</p>
        </div>
      </div>

      <div class="info-card">
        <div class="icon">📞</div>
        <div>
          <h3>{{ $t('contactInfo.callUs') }}</h3>
          <p>{{ $t('contactInfo.mainPhone') }}<br>{{ $t('contactInfo.supportPhone') }}</p>
        </div>
      </div>

      <div class="info-card">
        <div class="icon">✉️</div>
        <div>
          <h3>{{ $t('contactInfo.emailUs') }}</h3>
          <p>info@linguallearn.com<br>support@linguallearn.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info {
  margin-bottom: 32px;
}
.contact-info h2 {
  color: #0f172a;
  margin-bottom: 12px;
}
.subtitle {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.info-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  background: white;
}
.icon {
  background: #eef2ff;
  color: #1d4ed8;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 1.2rem;
}
.info-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #0f172a;
}
.info-card p {
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}
</style>