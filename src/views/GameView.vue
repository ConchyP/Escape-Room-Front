<!-- <script setup>
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
      <!-- Temporizador solo visible cuando se empieza el juego de colores 
      <div class="countdown-timer" v-if="showGameColors">
        <CountDownTimer />
      </div>

      <div class="game-container">
        <!-- Muestra el primer juego (mensaje) o el segundo (juego de colores) según el estado 
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
</style> -->
<script setup>
import MsnStartGame from '@/components/game/MsnStartGame.vue';
import Game1Colors from '@/components/game/Game1Colors.vue'; // Importa el nuevo componente
import CountDownTimer from '@/components/game/CountDownTimer.vue';
</script>
<template>
  <main>
     <div class="container">
      <div class="foreground-component">
        <MsnStartGame/>
      <div class="counter">
        <CountDownTimer/>
      </div>
       <div class="background-component">
         <Game1Colors/> <!-- Componente que se muestra detrás -->
       </div>
       </div>
     </div>
  </main>
</template>


<style scoped>
.main-content {
  position: relative;
  width: 100%;
  height: 100vh; /* O lo que necesites para que cubra la pantalla */
}

.main-content counter {
  position: absolute;
  top: 10px; /* Ajusta la distancia desde la parte superior */
  right: 10px; /* Ajusta la distancia desde el lado derecho */
  z-index: 10; /* Para asegurarte que esté sobre otros elementos */
}
.container {
 position: relative; /* Para manejar el posicionamiento relativo de los hijos */
 width: 100%;
 height: 100vh; /* Altura completa de la ventana */
}

.background-component {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 1; /* Coloca el componente en el fondo */
}

.foreground-component {
 position: relative;
 z-index: 2; /* Coloca el componente delante del fondo */
}
</style>