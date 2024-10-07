<script setup>
import NavbarWithLogin from '@/components/Navbar/NavbarUser.vue';
import Card from '../components/Card.vue';
import Banner from '@/components/Banner.vue'; 


</script>

<template>
<NavbarWithLogin/>
  <main>
    <!-- <script src="http://falconmasters.com/demos/particulas/particulas.js"></script> -->
    <div class="banner">
    <Banner/>
    </div>
  <div class="background">
   
    <div class="card-container">
      <Card/>
    </div>
  </div>
  </main>
</template>

<style scoped>
body {
  background: url("http://falconmasters.com/demos/particulas/bg.jpg") no-repeat #000;
  background-size: cover;
}
.background {
  /* background-image: url("../assets/images/BackgroundEscape.png"); */
  /* background-color: #c16b26; */
  opacity: 0.9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.banner{
  position:fixed;
  z-index:3;
}
.card-container > * {
  flex: 1 1 calc(50% - 20px); 
  box-sizing: border-box;   
  margin-top: 500px;
}

@media (max-width: 768px) {
  .card-container > * {
    flex: 1 1 100%;  
  }
}
</style>
