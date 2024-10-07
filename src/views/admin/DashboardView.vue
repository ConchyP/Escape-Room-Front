<script setup>
import NavbarAdmin from '@/components/Navbar/NavbarAdmin.vue';
import Table from '../../components/Table.vue';

</script>

<template>
  <NavbarAdmin/>

  <main>
  <div class="table">
<Table/>
</div>
  </main>

</template>

<style scoped>
main{
  background-color:grey;
}
.table{
  margin-bottom: 100px;
}
</style>