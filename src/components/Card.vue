
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
  border-radius: solid;
  border-radius: #f68f32;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.custom-card:hover {
  transform: scale(1.08); /* Aumenta un poco la tarjeta al hacer hover */
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
