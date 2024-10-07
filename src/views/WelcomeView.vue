<script setup>
import NavbarNotLogin from '@/components/Navbar/NavbarNotLogin.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

const isClicked = ref(false);
const router = useRouter(); 


const handleClick = () => {
  isClicked.value = true; 

  
  setTimeout(() => {
    router.push('/Login'); 
  }, 1500); 
};
</script>

<template>
  <NavbarNotLogin />
  <main>
    <div class="background">
      <div class="main-container">
        <div class="content">
          <h1 class="title">Bienvenid@ a Escape Room Online</h1>
          <h2 class="subtitle">¿Estás list@ para poner a prueba tu ingenio?</h2>
          <h3 class="info">Inicia sesión y sumérgete en un mundo lleno de acertijos, enigmas y aventuras.</h3>
          <h4 class="cta">¡ Demuestra que eres capaz de escapar a tiempo !</h4>

          <RouterLink class="decoration" to="#">
            <button class="button" @click="handleClick">
              LOGIN
            </button>
          </RouterLink>

          <div v-if="isClicked" class="icon-container">
            <img src="../assets/icons/padlock.png" alt="Candado abierto" class="open-lock-icon" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Aplica la fuente Orbitron a todos los textos y añade el efecto neón */
h1, h2, h3, h4 {
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 128, 0, 0.8),
               0 0 20px rgba(255, 128, 0, 0.6),
               0 0 30px rgba(255, 128, 0, 0.4),
               0 0 40px rgba(255, 100, 0, 0.2); /* Efecto de neón */
}

.title {
  font-size: 5.0rem;
  margin-bottom: 1rem;
  margin-bottom: 50px;
}

.subtitle, .info, .cta {
  font-size: 1.9rem;
  margin: 0.5rem 0;
}

.background {
  background-image: url("../assets/images/BackgroundEscape.png");
  /* opacity: 0.9; */
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

/* Botón con efecto hover */
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
  margin-top: 60px;
  margin-left: 43%;
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
