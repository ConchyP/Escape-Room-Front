<template>
    <div class="console">
        <!-- Juego cuando comienza -->
        <div v-if="isGameStarted" class="game-area">
            <!-- Juego de cuadrícula de números -->
            <div v-if="!showMessage" class="game-container">
                <div class="grid">
                    <div 
                        v-for="(number, index) in grid" 
                        :key="index" 
                        class="grid-item" 
                        :class="{ 
                            'different': number === differentNumber && numberClicked === number, 
                            'incorrect': numberClicked !== null && numberClicked !== differentNumber && number === differentNumber 
                        }"
                        @click="checkNumber(number)"
                    >
                        {{ number }}
                    </div>
                </div>
            </div>

            <!-- Cheques de ronda -->
            <div class="checks">
                <span v-for="(check, index) in checks" :key="index"
                    :class="{ 'check-filled': check, 'check-empty': !check }">✔</span>
            </div>

            <!-- Mensaje final de la ronda -->
            <div v-if="showMessage" class="message">
                <p>{{ message }}</p>
                <button v-if="currentRound < maxRounds" @click="nextRound" class="next-button">Siguiente Ronda</button>
                <button v-if="currentRound === maxRounds" @click="resetGame" class="start-button">Reiniciar Juego</button>
            </div>
        </div>

        <!-- Botón "Comenzar" -->
        <button v-if="!isGameStarted" @click="startGame" class="start-button">Comenzar</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Variables de estado
const isGameStarted = ref(false);
const grid = ref([]);
const differentNumber = ref(null);
const showMessage = ref(false);
const message = ref('');
const numberClicked = ref(null); // Para guardar el número clicado
const currentRound = ref(0);
const maxRounds = 3;
const checks = ref([false, false, false]); // Para verificar las rondas

// Lógica para crear la cuadrícula
const generateGrid = () => {
    const rows = 6;
    const cols = 7;
    grid.value = [];
    const differentIndex = Math.floor(Math.random() * (rows * cols));
    differentNumber.value = Math.random() < 0.5 ? 2 : 3; // Número diferente

    for (let i = 0; i < rows * cols; i++) {
        grid.value[i] = i === differentIndex ? differentNumber.value : (i % 2); // Alterna entre 0 y 1
    }
};

// Función para iniciar el juego
const startGame = () => {
    isGameStarted.value = true;
    currentRound.value = 0;
    checks.value = [false, false, false]; // Reinicia los cheques
    nextRound(); // Comienza la primera ronda
};

// Pasar a la siguiente ronda
const nextRound = () => {
    if (currentRound.value < maxRounds) {
        generateGrid();
        numberClicked.value = null; // Reinicia el número clicado al comenzar la ronda
        showMessage.value = false; // Oculta el mensaje de la ronda anterior
    }
};

// Comprobar si el número seleccionado es el diferente
const checkNumber = (number) => {
    numberClicked.value = number; // Guarda el número clicado
    if (number === differentNumber.value) {
        checks.value[currentRound.value] = true; // Marca la ronda como exitosa
        showMessage.value = true;
        message.value = '¡Correcto! Encontraste el número diferente.';
        currentRound.value++; // Avanza a la siguiente ronda
        if (currentRound.value < maxRounds) {
            nextRound(); // Inicia la próxima ronda
        }
    } else {
        showMessage.value = true;
        message.value = '¡Incorrecto! Inténtalo de nuevo.';
    }
};

// Reiniciar el juego al final
const resetGame = () => {
    isGameStarted.value = false;
};

// Estilo CSS
</script>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Altura completa de la ventana */
    margin: 0;
    background-color: black; /* Fondo de la página */
}

.console {
    color: green;
    padding: 20px;
    font-family: monospace;
    text-align: center; /* Centrar texto */
}

.start-button, .next-button {
    margin: 20px 0;
    padding: 10px;
    background-color: green;
    border: none;
    color: white;
    cursor: pointer;
}

.start-button:hover, .next-button:hover {
    background-color: darkgreen;
}

.game-area {
    position: relative;
}

.game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px; /* Espacio entre los elementos de la cuadrícula */
}

.grid-item {
    color: green; /* Color de los números */
    padding: 20px;
    font-size: 24px; /* Tamaño del texto */
    cursor: pointer;
}

.different {
    color: yellow; /* Color para el número diferente al acertar */
}

.incorrect {
    color: red; /* Color para el número incorrecto al hacer clic */
}

.checks {
    margin-top: 30px;
    
}

.check-filled {
    color: green; /* Color para checks exitosos */
}

.check-empty {
    color: gray; /* Color para checks vacíos al inicio */
}

.message {
    margin-top: 20px;
    font-size: 18px;
    color: yellow;
}
</style>
