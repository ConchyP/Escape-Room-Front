<script setup>
import NavbarNotLogin from '@/components/Navbar/NavbarNotLogin.vue';
import Register from '@/components/Register.vue';



</script>

<template>
<NavbarNotLogin/>
<main>
  <div class="background">

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
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
</style>