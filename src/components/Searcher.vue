<template>
    <div>
      <label class="searcher" for="difficulty">Buscar por dificultad:  </label>
      <select v-model="selectedDifficulty" @change="searchEscapeRooms">
        <option class="dificultad" value="Dificultad">Seleciona dificultad</option>
        <option value="Baja">Baja</option>
        <option value="Media">Media</option>
        <option value="Alta">Alta</option>
      </select>
  
      <div v-if="escapeRooms.length > 0">
        <h3>Resultados:</h3>
        <ul>
          <li v-for="escapeRoom in escapeRooms" :key="escapeRoom.id">
            {{ escapeRoom.name }} - {{ escapeRoom.difficulty }}
          </li>
        </ul>
      </div>
      <div v-else>
        <!-- <p>No hay escape room con esa dificultad.</p> -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        selectedDifficulty: '',
        escapeRooms: []
      };
    },
    methods: {
      searchEscapeRooms() {
        if (this.selectedDifficulty) {
          axios
            .get(`http://localhost:8080/api/v1/escapeRooms/search`, {
              params: { difficulty: this.selectedDifficulty }
            })
            .then(response => {
              this.escapeRooms = response.data;
            })
            .catch(error => {
              console.error("Error searching escape rooms:", error);
            });
        }
      }
    }
  };
  </script>
  <style scoped>
.searcher {
  color: #f68F32;
  font-size:40px;
}

.dificultad{
  margin:50px;
}
  </style>
  