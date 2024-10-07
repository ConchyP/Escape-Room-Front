<script setup>
import NavBarAdmin from '@/components/Navbar/NavbarAdmin.vue';
import Card from '../../components/Card.vue';
import Banner from '../../components/Banner.vue'; 
</script>

<template>
<NavBarAdmin/>
  <main>
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
.background {
  background-image: url("../assets/images/BackgroundEscape.png");
  opacity: 0.9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.banner{
  opacity: 0.9;
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
