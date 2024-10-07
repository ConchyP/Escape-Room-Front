<script setup>
import NavbarNotLogin from '@/components/Navbar/NavbarNotLogin.vue';
import Register from '@/components/Register.vue';

</script> 

<template>
  <NavbarNotLogin/>
  <main>
    <div class="background">
     
      <div class="img-container">
        <img src="../assets/images/construccion.jpeg" alt="En construcción">
      </div>
      

      <Register/>
    </div>
  </main>
</template>

<style scoped>
.background {
  background-image: url("../assets/images/BackgroundEscape.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: center;
  color: white;
  text-align: center;
  padding-top: 20px;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center; 
}

.img-container img {
  width: 300px; 
  height:200px;
  margin-top: 100px;
  margin-bottom: 20px; 
}
</style>
