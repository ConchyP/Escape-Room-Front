<script setup>
import Login from '@/components/Login.vue';
import NavbarNotLogin from '@/components/Navbar/NavbarNotLogin.vue';



</script>

<template>
<NavbarNotLogin/>
<main>
  <div class="background">

<Login/>


</div>
</main>

</template>

<style scoped>
.background {
  background-image: url("../assets/images/BackgroundEscape.png");
  opacity: 0.9;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
</style>