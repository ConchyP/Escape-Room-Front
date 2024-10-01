<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Estado reactivo
const escapeRooms = ref([]); 
const selectedRoomIds = ref([]); // Para almacenar los IDs seleccionados
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
  currentRoom.value = { ...room };
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
    const response = await axios.post('http://localhost:8080/api/v1/escapeRooms/create', currentRoom.value, {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',  // Incluye la autenticación
      }
    });
    escapeRooms.value.push(response.data);
    closeModal();
  } catch (error) {
    console.error("Error al crear el escape room:", error);
  }
};

// Función para actualizar un escape room existente
const updateRoom = async () => {
  try {
    const response = await axios.put(`http://localhost:8080/api/v1/escapeRooms/${currentRoom.value.id}`, currentRoom.value, {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',  // Incluye la autenticación
      }
    });
    const index = escapeRooms.value.findIndex(room => room.id === currentRoom.value.id);
    if (index !== -1) {
      escapeRooms.value[index] = response.data;
    }
    closeModal();
  } catch (error) {
    console.error("Error al actualizar el escape room:", error);
  }
};

// Función para eliminar escape rooms seleccionados
const deleteSelectedRooms = async () => {
  try {
    await Promise.all(selectedRoomIds.value.map(async (roomId) => {
      await axios.delete(`http://localhost:8080/api/v1/escapeRooms/${roomId}`, {
        headers: {
          'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',  // Incluye la autenticación
        }
      });
    }));
    
    // Filtrar los escape rooms eliminados
    escapeRooms.value = escapeRooms.value.filter(room => !selectedRoomIds.value.includes(room.id));
    selectedRoomIds.value = []; // Limpiar la selección después de eliminar
  } catch (error) {
    console.error("Error al eliminar los escape rooms:", error);
  }
};

// Función para obtener los escape rooms al montar el componente
const fetchEscapeRooms = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/escapeRooms/all', {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',  // Incluye la autenticación
      }
    });
    escapeRooms.value = response.data;
  } catch (error) {
    console.error("Error al obtener los escape rooms:", error);
  }
};

// Llamar a la función para cargar los datos al montar el componente
onMounted(() => {
  fetchEscapeRooms();
});

// Función para alternar la selección de un escape room
const toggleSelectRoom = (roomId) => {
  const index = selectedRoomIds.value.indexOf(roomId);
  if (index > -1) {
    selectedRoomIds.value.splice(index, 1); // Si ya está seleccionado, quitarlo
  } else {
    selectedRoomIds.value.push(roomId); // Si no está seleccionado, agregarlo
  }
};
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
                    <input type="checkbox" @change="toggleCheckAll" />
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
                <tr v-for="room in escapeRooms" :key="room.id">
                  <td>
                    <input type="checkbox" :value="room.id" @change="toggleSelectRoom(room.id)" />
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
                    <button class="btn btn-danger btn-xs" @click="deleteSelectedRooms">Eliminar</button>
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
            <input class="nombre" type="text" v-model="currentRoom.nombre" required />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea v-model="currentRoom.descripcion" required></textarea>
          </div>
          <div class="form-group">
            <label for="dificultad">Dificultad:</label>
            <select v-model="currentRoom.dificultad" required>
            <option value="" disabled selected>Selecciona una dificultad</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
          </div>
          <div class="form-group">
            <label for="imagen">Imagen:</label>
            <input type="file" @change="handleFileUpload" />
          </div>
          <div class="buttons">
  
          <button type="submit" id="btn-crear" class="btn btn-success">{{ isEditMode ? 'Actualizar' : 'Crear' }}</button>
      
          <button type="button" id="btn-cancelar"class="btn btn-success" @click="closeModal">Cancelar</button>
        
      </div>
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
  background-color: rgba(186, 181, 177, 0.468);;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display:flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  display:flex;
  font-size: 1.5em;
  font-weight: bold;
}
.nombre{
  width: 350px;
  border-radius: 6px;
  border:solid orange
}
textarea{
  width: 350px;
  border-radius: 6px;
  border:solid orange
}

select{
  align-items: center;
  border-radius: 6px;
  border:solid orange
}

.btn-xs {
  padding: 5px 10px;
  font-size: 0.75rem;
}

.btn-success{
  width: 100px;
  height: auto;
  margin-top: 30px;
}

#btn-crear{
  margin-right: 30px;
}
#btn-cancelar{
  background-color: red;

}

/* Estilos responsivos */
@media (max-width: 768px) {
  .table-img {
    width: 40px;
  }
}
</style>
