<script setup>
import { ref } from 'vue';
import CountDownTimer from '@/components/game/CountDownTimer.vue';
import Game from '@/components/game/MsnStartGame.vue';
import Game1Colors from '@/components/game/Game1Colors.vue';

// Variable para alternar entre Game y Game1Colors
const showGameColors = ref(false);

// Función para alternar los componentes cuando el botón comenzar sea pulsado
const startGame = () => {
  showGameColors.value = true; // Cambia al juego de colores
};
</script>

<template>
  <main>
    <div class="main-container">
      <!-- Temporizador solo visible cuando se empieza el juego de colores -->
      <div class="countdown-timer" v-if="showGameColors">
        <CountDownTimer />
      </div>

      <div class="game-container">
        <!-- Muestra el primer juego (mensaje) o el segundo (juego de colores) según el estado -->
        <Game v-if="!showGameColors" @start="startGame" />
        <Game1Colors v-else />
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.countdown-timer {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10; /* Para que quede por encima de otros elementos */
}

.game-container {
  flex: 1; /* Hace que el contenedor crezca para llenar el espacio disponible */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
