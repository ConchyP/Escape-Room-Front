<template>
    <div class="terminal">
      <div v-for="(line, index) in displayedLines" :key="index">{{ line }}</div>
      <button v-if="!gameStarted" @click="startGame">Iniciar Juego</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const terminalLines = [
    "Accediendo al sistema..............................",
    '"Error": Protección deshabilitada',
    '"Hackeo en progreso..."',
    "¡Felicidades... o no xD.... He tomado el control de tu ordenador!",
    "Si quieres recuperarlo tendrás que superar mis pruebas, pero cuidado, el tiempo es limitado."
  ];
  
  const displayedLines = ref([]);
  const gameStarted = ref(false);
  
  const startGame = () => {
    gameStarted.value = true;
    displayNextLine(0);
  };
  
  const displayNextLine = (index) => {
    if (index < terminalLines.length) {
      const line = terminalLines[index];
      let currentLine = '';
  
      const typeLine = (charIndex) => {
        if (charIndex < line.length) {
          currentLine += line[charIndex];
          displayedLines.value.push(currentLine);
          setTimeout(() => typeLine(charIndex + 1), 50); // Ajusta la velocidad aquí
        } else {
          setTimeout(() => displayNextLine(index + 1), 1000); // Espera antes de la siguiente línea
        }
      };
      
      typeLine(0);
    }
  };
  </script>
  
  <style>
  .terminal {
    background-color: black;
    color: green;
    padding: 20px;
    font-family: monospace;
    height: 100vh;
    overflow-y: auto;
  }
  </style>
  