<script setup>
import { ref, computed } from 'vue';

const timeLeft = ref(20);
const isActive = ref(false);
let timer = null;

const showAlertMessage = ref(false);

const startCountdown = () => {
  isActive.value = true;
  showAlertMessage.value = true;

  setTimeout(() => {
    showAlertMessage.value = false;
  }, 3000);

  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer);
      isActive.value = false;
      alert('¡Tu tiempo se ha agotado! Estabas avisado, ahora todos tus archivos están en mi poder');
    }
  }, 1000);
};

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});
</script>

<template>
  <div class="countdown-container" v-if="isActive">
    <div class="countdown-timer">{{ formattedTime }}</div>
    <div class="alert-message" v-if="showAlertMessage">Se me había olvidado decirte, el tiempo es limitado.</div>
  </div>
  <div class="start-button-container" v-else>
    <button @click="startCountdown" class="start-button">Iniciar Juego</button>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  height: 100vh;
}

.countdown-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vh;
  height: 300px;
  background-color: black;
  color: red;
  font-family: 'Arial', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.countdown-timer {
  font-size: 10rem;
  text-shadow: 0 0 10px red, 0 0 20px darkred;
}

.start-button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.start-button {
  padding: 15px 30px;
  font-size: 2rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.start-button:hover {
  background-color: darkred;
}

.alert-message {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  animation: fadeInOut 3s forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
