<script setup>
import { ref, computed, onMounted } from 'vue';

// Lógica del texto inicial
const fullText = `
Accediendo al sistema........

"Error": Protección deshabilitada

"... ... ...Hackeo en progreso... ... ..."

¡Felicidades... o no xD.... He tomado el control de tu ordenador!

Si quieres recuperarlo tendrás que superar mis pruebas.
`;
const preparationMessage = `
Soy Patata, 

No me subestimes, 

Solo aquellos con reflejos rápidos y mentes agudas pueden derrotarme. 

Enfrentarás tres pruebas. 

Si fallas, todos tus archivos quedarán en mi poder. 

¿ Estás preparado ?
`;

const isTyping = ref(true);
const typingIndex = ref(0);
const formattedText = ref('');
const formattedPreparationText = ref('');
const isPreparing = ref(false);
const isGameStarted = ref(false);

const typeText = (text, formatted, callback) => {
    typingIndex.value = 0;
    formatted.value = '';

    const typeNextChar = () => {
        if (typingIndex.value < text.length) {
            const currentChar = text.charAt(typingIndex.value);
            formatted.value += currentChar;  // Agregar el carácter actual
            typingIndex.value++;

            // Lógica para manejar texto entre comillas
            if (currentChar === '"') {
                const endIndex = text.indexOf('"', typingIndex.value);
                if (endIndex !== -1) {
                    const quotedText = text.substring(typingIndex.value - 1, endIndex + 1);
                    formatted.value = formatted.value.slice(0, -1);  // Eliminar el último carácter antes de agregar el texto
                    if (quotedText.includes('Error')) {
                        formatted.value += `<span class="error">${quotedText}</span>`;
                    } else if (quotedText.includes('Hackeo')) {
                        formatted.value += `<span class="hack">${quotedText}</span>`;
                    } else {
                        formatted.value += quotedText;
                    }
                    typingIndex.value = endIndex + 1; // Actualizar el índice
                }
            }

            setTimeout(typeNextChar, 100); // Continuar con el siguiente carácter
        } else {
            isTyping.value = false;
            if (callback) callback();
        }
    };

    typeNextChar();
};

onMounted(() => {
    typeText(fullText, formattedText, () => {
        isTyping.value = false;
        // Iniciar preparación automáticamente después de terminar de escribir el texto completo
        setTimeout(prepareForGame, 1000); // Espera 1 segundo antes de iniciar la preparación
    });
});

const prepareForGame = () => {
    isPreparing.value = true;
    isTyping.value = true;

    typeText(preparationMessage, formattedPreparationText, () => {
        isTyping.value = false;
        // Mostrar el botón "Comenzar" después de escribir el mensaje de preparación
    });
};

const startGame = () => {
    isGameStarted.value = true;
    startCountdown(); // Inicia el temporizador
    nextRound(); // Inicia el juego de secuencia de colores
};

// Lógica del temporizador
const timeLeft = ref(20); // 20 segundos para pruebas
let timer = null;
const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60);
    const seconds = timeLeft.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

const startCountdown = () => {
    timer = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
        } else {
            clearInterval(timer);
            alert('¡Tiempo agotado! He ganado.');
        }
    }, 1000);
};

// Lógica del juego de secuencia de colores
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8', '#33FFF5'];
const rounds = [3, 4, 5];
const maxRounds = 3;
const currentRound = ref(0);
const colorSequence = ref([]);
const userSequence = ref([]);
const userTurn = ref(false);
const checks = ref([false, false, false]);
const showMessage = ref(false);
const message = ref('');
const link = ref('');

const nextRound = () => {
    if (currentRound.value >= maxRounds) {
        message.value = '¡Impresionante! Parece que tienes buen ojo, pero esto era solo el calentamiento';
        showMessage.value = true;
        return;
    }

    userTurn.value = false;
    userSequence.value = [];
    colorSequence.value = [];

    for (let i = 0; i < rounds[currentRound.value]; i++) {
        colorSequence.value.push(colors[Math.floor(Math.random() * colors.length)]);
    }

    let index = 0;
    const interval = setInterval(() => {
        if (index >= colorSequence.value.length) {
            clearInterval(interval);
            userTurn.value = true;
            return;
        }
        const button = document.querySelector(`.color-button:nth-child(${colors.indexOf(colorSequence.value[index]) + 1})`);
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
            index++;
        }, 500);
    }, 1000);
};

const handleClick = (index) => {
    if (!userTurn.value) return;

    const button = document.querySelector(`.color-button:nth-child(${index + 1})`);
    button.classList.add('active');
    setTimeout(() => button.classList.remove('active'), 300);

    userSequence.value.push(colors[index]);

    if (userSequence.value.length === colorSequence.value.length) {
        if (JSON.stringify(userSequence.value) === JSON.stringify(colorSequence.value)) {
            checks.value[currentRound.value] = true;
            currentRound.value++;
            nextRound();
        } else {
            message.value = '¡Inténtalo de nuevo!';
            showMessage.value = true;
            setTimeout(() => {
                showMessage.value = false;
                nextRound();
            }, 2000);
        }
    }
};
</script>



<template>
    <div class="console">
        <!-- Introducción inicial -->
        <div v-if="!isGameStarted && !isPreparing" class="typing-effect" v-html="formattedText"></div>
        <div v-if="isPreparing && !isGameStarted" class="typing-effect" v-html="formattedPreparationText"></div>

        <!-- Botón "Comenzar" -->
        <button v-if="!isTyping && isPreparing && !isGameStarted" @click="startGame" class="start-button">Comenzar</button>


        <!-- Juego y Temporizador cuando comienza el juego -->
        <div v-if="isGameStarted" class="game-area">
            <!-- Temporizador en la parte superior derecha -->
            <div class="countdown-container">
                <div class="countdown-timer">{{ formattedTime }}</div>
            </div>

            <!-- Juego de secuencia de colores -->
            <div v-if="!showMessage" class="game-container">
                <div class="color-buttons">
                    <button v-for="(color, index) in colors" :key="index" :style="{ backgroundColor: color }"
                        @click="handleClick(index)" class="color-button"></button>
                </div>
                <div class="status">
                    <div class="checks">
                        <span v-for="(check, index) in checks" :key="index"
                            :class="{ 'check-filled': check, 'check-empty': !check }">✔</span>
                    </div>
                </div>
            </div>

            <!-- Mensaje final del juego -->
            <div v-if="showMessage" class="message">
                <p>{{ message }}</p>
                <a v-if="link" :href="link">Ir a otra vista</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.console {
    font-family: monospace;
    color: green;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: black;
    /* background-image: url('../assets/images/'); POR SI AL FINAL PONGO EL FONDO*/
    background-size: cover;
}

.typing-effect {
    white-space: pre;
    font-size: 1.5rem;
    line-height: 1.6;
    margin-bottom: 20px;
}

.error {
    color: red;
}

.hack {
    color: yellow;
}

.start-button {
    background-color: #d26e0a;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 1.2rem;
}

.game-area {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.countdown-container {
    position: absolute;
    top: 50px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0);
    color: red;
    padding: 10px;
    font-size: 8rem;
    border-radius: 5px;
}

.color-buttons {
    display: flex;
    gap: 10px;
}

.color-button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transition: transform 0.2s;
    box-shadow: 0 0 5px white, 0 0 10px black;
    border: none;
}

.color-button.active {
    transform: scale(1.1);
}

.check-filled {
    color: green;
    size: 20px;
}

.check-empty {
    color: gray;
}
</style> 
