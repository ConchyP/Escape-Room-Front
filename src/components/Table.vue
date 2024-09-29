
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const escapeRooms = ref([
  {
    id: 1,
    nombre: 'Sala del Enigma',
    descripcion: 'Una habitación llena de acertijos y misterios.',
    dificultad: 'Media',
    image: 'sala_enigma.jpg',
    checked: false
  },
  {
    id: 2,
    nombre: 'La Prisión Perdida',
    descripcion: 'Escapa de una antigua prisión olvidada.',
    dificultad: 'Alta',
    image: 'prision_perdida.jpg',
    checked: false
  },
  {
    id: 3,
    nombre: 'Laboratorio Secreto',
    descripcion: 'Descubre los experimentos secretos.',
    dificultad: 'Baja',
    image: 'laboratorio_secreto.jpg',
    checked: false
  },
  {
    id: 4,
    nombre: 'El Tesoro Pirata',
    descripcion: 'Encuentra el tesoro escondido de los piratas.',
    dificultad: 'Media',
    image: 'tesoro_pirata.jpg',
    checked: false
  }
])
// const escapeRooms = ref([]); 
const isModalVisible = ref(false);
const isEditMode = ref(false);
const currentRoom = ref({
  id: null,
  nombre: '',
  descripcion: '',
  dificultad: '',
  image: ''
});

// Función para mostrar el modal de añadir
const showAddModal = () => {
  currentRoom.value = { id: null, nombre: '', descripcion: '', dificultad: '', image: '' };
  isEditMode.value = false;
  isModalVisible.value = true;
};

// Función para mostrar el modal de edición
const editRoom = (room) => {
  currentRoom.value = { ...room };  // Clonamos el objeto para no mutar directamente el original
  isEditMode.value = true;
  isModalVisible.value = true;
};

// Función para cerrar el modal
const closeModal = () => {
  isModalVisible.value = false;
};

// Función para añadir un nuevo escape room
const addRoom = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/escapeRooms/create', currentRoom.value);
    escapeRooms.value.push(response.data);
    closeModal();
  } catch (error) {
    console.error("Error al crear el escape room:", error);
  }
};

// Función para actualizar un escape room existente
const updateRoom = async () => {
  try {
    const response = await axios.put(`http://localhost:8080/api/v1/escapeRooms/${currentRoom.value.id}`, currentRoom.value);
    const index = escapeRooms.value.findIndex(room => room.id === currentRoom.value.id);
    if (index !== -1) {
      escapeRooms.value[index] = response.data;
    }
    closeModal();
  } catch (error) {
    console.error("Error al actualizar el escape room:", error);
  }
};

// Función para manejar la carga de imágenes
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Aquí puedes manejar la subida del archivo
    currentRoom.value.image = file;
  }
};

// Función para eliminar un escape room
const deleteRoom = async (room) => {
  try {
    await axios.delete(`http://localhost:8080/api/v1/escapeRooms/${id}`);
    escapeRooms.value = escapeRooms.value.filter(r => r.id !== id);
  } catch (error) {
    console.error("Error al eliminar el escape room:", error);
  }
};

// Ejemplo: Método para obtener los escape rooms al montar el componente
const fetchEscapeRooms = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/escapeRooms');
    escapeRooms.value = response.data;
  } catch (error) {
    console.error("Error al obtener los escape rooms:", error);
  }
};

// Llamar a la función para cargar los datos al montar el componente
fetchEscapeRooms();
</script>

<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h4 class="text-center">Listado de Escape Rooms</h4>
          <div class="d-flex justify-content-between">
            <button class="btn btn-success" @click="showAddModal"> + Añadir ER</button>
          </div>
          <div class="table-responsive">
            <table id="mytable" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" v-model="checkAll" @change="toggleCheckAll" />
                  </th>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Dificultad</th>
                  <th>Imagen</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(room, index) in escapeRooms" :key="index">
                  <td>
                    <input type="checkbox" v-model="room.checked" />
                  </td>
                  <td>{{ room.id }}</td>
                  <td>{{ room.nombre }}</td>
                  <td>{{ room.descripcion }}</td>
                  <td>{{ room.dificultad }}</td>
                  <td>
                    <img :src="'/assets/images/' + room.image" alt="Room image" class="table-img" />
                  </td>
                  <td>
                    <button class="btn btn-primary btn-xs" @click="editRoom(room)">Editar</button>
                  </td>
                  <td>
                    <button class="btn btn-danger btn-xs" @click="deleteRoom(room)">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="clearfix"></div>
            <ul class="pagination justify-content-center">
              <li class="disabled"><a href="#"><span class="glyphicon glyphicon-chevron-left"></span></a></li>
              <li class="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#"><span class="glyphicon glyphicon-chevron-right"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para añadir/editar Escape Room -->
    <div v-if="isModalVisible" class="modal-overlay">
      <div class="modal-content">
        <h2>{{ isEditMode ? 'Editar Escape Room' : 'Añadir Escape Room' }}</h2>
        <form @submit.prevent="isEditMode ? updateRoom() : addRoom()">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input type="text" v-model="currentRoom.nombre" required />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea v-model="currentRoom.descripcion" required></textarea>
          </div>
          <div class="form-group">
            <label for="dificultad">Dificultad:</label>
            <input type="text" v-model="currentRoom.dificultad" required />
          </div>
          <div class="form-group">
            <label for="imagen">Imagen:</label>
            <input type="file" @change="handleFileUpload" />
          </div>
          <button type="submit" class="btn btn-success">{{ isEditMode ? 'Actualizar' : 'Crear' }}</button>
          <button type="button" class="btn btn-danger" @click="closeModal">Cancelar</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.table {
  margin-top: 2rem;
  text-align: center;
}

.table-img {
  width: 50px;
  height: auto;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.btn-xs {
  padding: 5px 10px;
  font-size: 0.75rem;
}
.btn-success{
  margin-top: 50px;
background-color: #f68f32;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .table-img {
    width: 40px;
  }
}
</style>
