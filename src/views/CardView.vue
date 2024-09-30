<script setup>
import Banner from '@/components/Banner.vue';
import Card from '@/components/Card.vue';
import Searcher from '@/components/Searcher.vue';




</script>

<template>
    <nav></nav>
<main>
  <div class="banner">
    <Banner/>
  </div>
  <div class="searcher">
    <Searcher/>
  </div>
    <div class="card">
      <Card/>
    </div>
</main>
</template>

<style scoped>
main {
  width: 100%;
  margin: 0 auto;
}

.banner{
  margin-top:100px;
}

.searcher{
  text-align: center;
  margin: 50px;
}
</style>
