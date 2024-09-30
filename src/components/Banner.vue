<script setup>

</script>

<template>

  <div class="jumbotron">
    <h1 class="title">Desafía tu mente,</h1> 
    <h2>escapa en cualquier lugar</h2>
    <hr class="divider">
    <h3 class="login-info">Dale a jugar y comienza tu aventura</h3>
    <!-- <router-link to="/Login" class="login-btn">Login</router-link> -->
  </div>

</template>

<style scoped>
/* 
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
} */

.jumbotron {
  background-image: url('../assets/images/Banner.jpg');
  background-size: cover;
  background-position: center;
  width: 80vw;
  min-height: 300px;  /* Cambiado para adaptarse mejor */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  margin: 0 auto; /* Centra horizontalmente */
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

.login-info {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.login-btn {
  background-color: #f68f32;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: 2px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background-clip: padding-box;
  max-width: 100%;  /* Asegura que el botón no se desborde */
}

.login-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
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

