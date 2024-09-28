
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