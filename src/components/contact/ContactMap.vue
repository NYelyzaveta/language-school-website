<template>
  <div class="map-container">
    <iframe 
      src="https://maps.google.com/maps?q=New%20York,%20NY%2010001&t=&z=13&ie=UTF8&iwloc=&output=embed" 
      width="100%" 
      height="100%" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy">
    </iframe>
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden; 
  border: 1px solid #eaeaea;
  background-color: #f8fafc;
}

iframe {
  display: block; 
}
</style>