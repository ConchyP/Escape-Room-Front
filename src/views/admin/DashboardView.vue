<script setup>
import NavbarAdmin from '@/components/Navbar/NavBarAdmin.vue';
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
.table{
  margin-bottom: 100px;
}
</style>