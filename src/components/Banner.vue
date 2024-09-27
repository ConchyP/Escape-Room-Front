<script setup>

</script>

<template>
  <div class="jumbotron">
    <h2 class="title">Desafía tu mente,</h2> 
    <h2>escapa en cualquier lugar</h2>
    <hr class="divider">
    <p class="login-info">Logéate para acceder a nuestros escape rooms</p>
    <button class="login-btn">Login</button>
  </div>
</template>

<style scoped>
.jumbotron {
  background-image: url('../assets/images/Banner.jpg');
  background-size: cover;
  background-position: center;
  width: 80vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  color: white;
  margin-top: 0;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.3);
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
  background-color: #f68f32; /* Color de fondo interior */
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: 2px solid #ffffff; /* Borde negro */
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.4s ease; /* Transición suave */
  background-clip: padding-box; /* Clip del fondo al área de relleno */
}

.login-btn:hover {
  transform: scale(1.05); /* Efecto de agrandamiento */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Sombra */
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
