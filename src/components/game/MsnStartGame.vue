<!-- 
<script setup>
import { ref, onMounted } from 'vue';

const fullText = `
Accediendo al sistema..............................

"Error": Protección deshabilitada

"... ... ...Hackeo en progreso... ... ..."

¡Felicidades... o no xD.... He tomado el control de tu ordenador!

Si quieres recuperarlo tendrás que superar mis pruebas.
`;

const preparationMessage = `
Soy Patata, 

No me subestimes, 

solo aquellos con reflejos rápidos y mentes agudas pueden derrotarme. 

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
  console.log('El juego ha comenzado');
  // Aquí puedes agregar cualquier lógica adicional para iniciar el juego
};
</script>

<template>
  <div class="console">
    <div v-if="!isPreparing && !isGameStarted" class="typing-effect" v-html="formattedText"></div>
    <div v-if="isPreparing && !isGameStarted" class="typing-effect" v-html="formattedPreparationText"></div>
    <button v-if="!isTyping && isPreparing && !isGameStarted" @click="startGame" class="start-button">
      Comenzar
    </button>
  </div>
</template>

<style>
.console {
  font-family: monospace;
  background-color: black;
  color: green;
  width: 1200px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.typing-effect {
  white-space: pre;
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
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 20px;
}
</style> -->
<script setup>
import { ref, onMounted } from 'vue';
import CountDownTimer from '@/components/game/CountDownTimer.vue'; // Asegúrate de que la ruta sea correcta

const fullText = `
Accediendo al sistema..............................

"Error": Protección deshabilitada

"... ... ...Hackeo en progreso... ... ..."

¡Felicidades... o no xD.... He tomado el control de tu ordenador!

Si quieres recuperarlo tendrás que superar mis pruebas.
`;

const preparationMessage = `
Soy Patata, 

No me subestimes, 

solo aquellos con reflejos rápidos y mentes agudas pueden derrotarme. 

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
  console.log('El juego ha comenzado');
  // Aquí puedes agregar cualquier lógica adicional para iniciar el juego
};
</script>

<template>
  <div class="console">
    <div v-if="!isGameStarted && !isPreparing" class="typing-effect" v-html="formattedText"></div>
    <div v-if="isPreparing && !isGameStarted" class="typing-effect" v-html="formattedPreparationText"></div>
    
    <!-- Botón "Comenzar" solo se muestra cuando se está preparando -->
    <button v-if="!isTyping && isPreparing && !isGameStarted" @click="startGame" class="start-button">
      Comenzar
    </button>

    <!-- Componente CountDown -->
    <CountDownTimer v-if="isGameStarted" />
  </div>
</template>

<style>
.console {
  font-family: monospace;
  background-color: black;
  color: green;
  width: 1200px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.typing-effect {
  white-space: pre;
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
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  margin-top: 20px;
}
</style>
