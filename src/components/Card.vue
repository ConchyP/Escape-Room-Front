<script setup>

import { ref, onMounted } from 'vue';
import axios from 'axios';

// Estado reactivo para almacenar los escape rooms y el control del texto expandido
const escapeRooms = ref([]);  // Guardar la lista de escape rooms
const showMore = ref([]);     // Controlar el estado expandido para cada tarjeta

// Función para alternar el estado de 'showMore' para cada tarjeta
const toggleShowMore = (index) => {
  showMore.value[index] = !showMore.value[index];
};

// Función para obtener los datos del backend
const fetchEscapeRooms = async () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/v1/escapeRooms/all',
    headers: { 
      'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',  // Asegúrate de que esta autenticación esté bien configurada
      'Cookie': 'JSESSIONID=AC045ED1927C424A61F1063ECB067870'
    }
  };

  try {
    const response = await axios.request(config);
    escapeRooms.value = response.data;
    showMore.value = new Array(response.data.length).fill(false);  // Inicializa 'showMore' con 'false'
  } catch (error) {
    console.error("Error al obtener los escape rooms:", error);
  }
};

// Ejecutar la función cuando el componente se monte
onMounted(() => {
  fetchEscapeRooms();
});

const getDifficultyLevel = (difficulty) => {
  if (typeof difficulty === 'string') {
    // Normalizar el texto a minúsculas y comparar
    if (difficulty.toLowerCase() === 'baja') return 1;
    if (difficulty.toLowerCase() === 'media') return 2;
    if (difficulty.toLowerCase() === 'alta') return 3;
  } else if (typeof difficulty === 'number') {
    // Si la dificultad es un número directamente
    return difficulty;
  }
  // Valor por defecto en caso de que no se cumpla ninguna condición
  return 0;
};
</script>
<template>
    <div class="container">
      <div v-for="(escapeRoom, index) in escapeRooms" :key="escapeRoom.id" class="custom-card">
        <div class="card-left">
          <img
            class="card-img-left"
            :src="escapeRoom.image"
            alt="Card image"
          />
        </div>
        <div class="card-right">
          <h4 class="card-title">
            {{ escapeRoom.nombre }}
          </h4>
          <p class="card-difficulty">
            Dificultad: {{ escapeRoom.dificultad }}
            <!-- Mostrar llaves según la dificultad -->
            <span v-if="getDifficultyLevel(escapeRoom.dificultad) === 1">🔑</span>
            <span v-if="getDifficultyLevel(escapeRoom.dificultad) === 2">🔑🔑</span>
            <span v-if="getDifficultyLevel(escapeRoom.dificultad) === 3">🔑🔑🔑</span>
          </p>
          <div class="btn-container">
            <button class="btn-play">
              JUGAR
            </button>
          </div>
          <p class="card-description">
            {{ escapeRoom.descripcion }}
          </p>
        </div>
      </div>
    </div>
  </template>

  
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.custom-card {
  display: flex;
  width: 600px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 6px;
  border: 2px solid #ffffff;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.custom-card:hover {
  transform: scale(1.08); 
}

.card-left {
  width: 40%;
  height: auto;
}

.card-img-left {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-right {
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.card-difficulty {
  font-size: 1.2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.card-difficulty span {
  margin-left: 10px;
  font-size: 1.5rem;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.btn-play {
  padding: 10px 20px;
  background-color: #f68f32;
  border: solid;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  position: relative; /* Asegurarse de que el botón mantenga su posición */
  z-index: 1; /* Asegúrate de que el botón esté por encima de otros elementos */
}

.btn-play:hover {
  background-color: darkorange;
}

.card-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background-color: rgba(137, 137, 137, 0.83);
  color: #fff;
  font-size: 1.5rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.custom-card:hover .card-description {
  opacity: 1;
  visibility: visible;
}

/* Para dispositivos móviles */
@media (max-width: 768px) {
  .custom-card {
    width: 100%;
    flex-direction: column;
  }

  .card-left, .card-right {
    width: 100%;
  }

  .card-img-left {
    height: 200px;
  }
}
</style>
