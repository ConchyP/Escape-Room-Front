<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importar el router

// Estado para controlar si se ha hecho clic en el botón
const isClicked = ref(false);
const router = useRouter(); // Hook para manejar la navegación

// Función que se ejecuta al hacer clic en el botón
const handleClick = () => {
  isClicked.value = true; // Mostrar el candado abierto

  // Mostrar el candado abierto por un breve tiempo antes de redirigir
  setTimeout(() => {
    router.push('/Login'); // Redirigir a la página de login
  }, 1500); // Espera 1.5 segundos antes de redirigir
};
</script>

<template>
  <div class="background">
  <div class="main-container">
    <div class="content">
      <!-- Texto principal de bienvenida -->
      <h1 class="title">Bienvenid@ a Escape Rooms Online</h1>
      <h2>¿Estás list@ para poner a prueba tu ingenio?</h2>
      <h3>Inicia sesión y sumérgete en un mundo lleno de acertijos, enigmas y aventuras.</h3>
      <h4>Juega solo o en equipo, ¡y demuestra que eres capaz de escapar a tiempo!</h4>

      <!-- Botón de login con animación de candado -->
      <RouterLink class="decoration" to="#">
        <button class="button" @click="handleClick">
          LOGIN
        </button>
      </RouterLink>

      <!-- Mostrar el icono del candado abierto si se ha hecho clic en el botón -->
      <div v-if="isClicked" class="icon-container">
        <img src="../assets/icons/padlock.png" alt="Candado abierto" class="open-lock-icon" />
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
/* Estilos del contenedor principal */
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
 
}

.background {
  background-image: url("../assets/images/escapeRoomBanner.jpg");
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


/* Estilos del texto */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;
}

h2, h3, h4 {
  color: #ffffff;
  text-align: center;
  margin: 0.5rem 0;
}

/* Estilos del botón */
.button {
  background: #000000;
  color: #c16b26;
  border: none;
  position: relative;
  height: 50px;
  width: 200px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  border-radius: 4px;
  transition: 800ms ease all;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top:50px;
  margin-left:38%;
}

.decoration {
  text-decoration: none;
}

.button:hover {
  background: #c16b26;
  color: #000000;
  transform: translateY(-5px);
}

.button:before,
.button:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #000000;
  transition: 400ms ease all;
}

.button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}

.button:hover:before,
.button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}

.button:active {
  transform: translateY(4px);
  box-shadow: 0px 4px 8px rgba(156, 96, 7, 0.961);
}

/* Estilos del candado */
.icon-container {
  margin-top: 20px;
}

.open-lock-icon {
  width: 80px;
  height: 80px;
  animation: fadeIn 0.5s ease-in-out;
}

/* Animación del candado */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
