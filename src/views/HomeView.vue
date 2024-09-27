<script setup>
import Banner from '@/components/Banner.vue';
</script>

<template>
  
  <main>
    <div class="banner">
      <Banner />
    </div>
  </main>
</template>

<style scoped>
.banner {

  margin-bottom: 80px; /* Espacio entre el banner y el login */
}


/* Imagen de fondo para el banner, si es necesario */
.full-screen-image {
  background:url('../assets/images/Banner.jpg');
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Esto evita el scroll */
  z-index: -1; 
}

.full-screen-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: center;
}

@media (max-width: 600px) {
  .full-screen-image img {
    object-fit: contain; 
  }
}
</style>
