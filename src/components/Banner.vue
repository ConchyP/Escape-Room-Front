<script setup>

</script>

<template>

  <div class="jumbotron">
    <h1 class="title">Desafía tu mente,</h1> 
    <h2>escapa en cualquier lugar</h2>
    <hr class="divider">
    <h3 class="login-info">Dale a jugar y comienza tu aventura</h3>
  </div>

</template>

<style scoped>

.jumbotron {
  /* background-image: url('../assets/images/escapeRoomBanner.jpg'); */
  background-color: rgb(0, 0, 0);
  opacity: 0.9;
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 350px;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  margin: 0 auto;
  overflow: hidden;

}


.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.divider {
  width: 50%;
  border: 1px solid white;
  margin: 1.5rem 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .login-info {
    font-size: 1rem;
  }

  .divider {
    width: 80%;
  }

  .login-btn {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}

</style>

