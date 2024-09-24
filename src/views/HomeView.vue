 <script setup>

import Login from '@/components/Login.vue';


</script>

<template>

  <main>
  
    <div class="full-screen-image">
      <img src="../assets/images/Background.jpg" alt="Imagen completa" />
      <Login/>
    </div>
  
   </main> 
  
  </template>
  
  <style scoped>
 
  .full-screen-image {
    position: absolute; 
    margin-top: 100px;
    top: 0;
    bottom: auto;
    left: 0;
    width: 100vw;
    height: 100vh; 
    overflow: hidden; /* esto evita el scroll */
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
