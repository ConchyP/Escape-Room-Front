<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
<body>
  <Navbar />
  <main>

    <RouterView />

  </main>
  <Footer/>
</body> 
</template>

<style scoped>
main {
  width: 100%;
  margin: 0 auto;
  background-color: rgba(185, 163, 141, 0.768);
}

</style>