
<script setup>
import { ref } from 'vue';

const isGameStarted = ref(false);
const grid = ref([]);
const differentNumber = ref(null);
const showMessage = ref(false);
const message = ref('');
const numberClicked = ref(null); 
const currentRound = ref(0);
const maxRounds = 3;
const checks = ref([false, false, false]); 


const generateGrid = () => {
    const rows = 6;
    const cols = 7;
    grid.value = [];
    const differentIndex = Math.floor(Math.random() * (rows * cols));
    differentNumber.value = Math.random() < 0.5 ? 2 : 3; 

    for (let i = 0; i < rows * cols; i++) {
        grid.value[i] = i === differentIndex ? differentNumber.value : (i % 2); 
    }
};


const startGame = () => {
    isGameStarted.value = true;
    currentRound.value = 0;
    checks.value = [false, false, false]; 
    nextRound(); 
};


const nextRound = () => {
    if (currentRound.value < maxRounds) {
        generateGrid();
        numberClicked.value = null; 
        showMessage.value = false; 
    }
};


const checkNumber = (number) => {
    numberClicked.value = number; 
    if (number === differentNumber.value) {
        checks.value[currentRound.value] = true;
        showMessage.value = true;
        message.value = '¡Correcto! Encontraste el número diferente.';
        currentRound.value++; 
        if (currentRound.value < maxRounds) {
            nextRound(); 
        }
    } else {
        showMessage.value = true;
        message.value = '¡Incorrecto! Inténtalo de nuevo.';
    }
};


const resetGame = () => {
    isGameStarted.value = false;
};


</script>
<template>
    <div class="console">
      
        <div v-if="isGameStarted" class="game-area">
     
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

        
            <div class="checks">
                <span v-for="(check, index) in checks" :key="index"
                    :class="{ 'check-filled': check, 'check-empty': !check }">✔</span>
            </div>

         
            <div v-if="showMessage" class="message">
                <p>{{ message }}</p>
                <button v-if="currentRound < maxRounds" @click="nextRound" class="next-button">Siguiente Ronda</button>
                <button v-if="currentRound === maxRounds" @click="resetGame" class="start-button">Reiniciar Juego</button>
            </div>
        </div>

      
        <button v-if="!isGameStarted" @click="startGame" class="start-button">Comenzar</button>
    </div>
</template>

<style>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    margin: 0;
    background-color: black; 
}

.console {
    color: green;
    padding: 20px;
    font-family: monospace;
    text-align: center; 
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
    gap: 10px; 
}

.grid-item {
    color: green; 
    padding: 20px;
    font-size: 24px; 
    cursor: pointer;
}

.different {
    color: yellow; 
}

.incorrect {
    color: red; 
}

.checks {
    margin-top: 30px;
    
}

.check-filled {
    color: green; 
}

.check-empty {
    color: gray; 
}

.message {
    margin-top: 20px;
    font-size: 18px;
    color: yellow;
}
</style>
