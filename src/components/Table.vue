<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const escapeRooms = ref([]);
const selectedRoomIds = ref([]);
const isModalVisible = ref(false);
const isEditMode = ref(false);
const currentRoom = ref({
  id: null,
  nombre: '',
  descripcion: '',
  dificultad: '',
  image: ''
});

const showAddModal = () => {
  currentRoom.value = { id: null, nombre: '', descripcion: '', dificultad: '', image: '' };
  isEditMode.value = false;
  isModalVisible.value = true;
};


const editRoom = (room) => {
  currentRoom.value = { ...room };
  isEditMode.value = true;
  isModalVisible.value = true;
};


const closeModal = () => {
  isModalVisible.value = false;
};


const addRoom = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/escapeRooms/create', currentRoom.value, {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
      }
    });
    escapeRooms.value.push(response.data);
    closeModal();
  } catch (error) {
    console.error("Error al crear el escape room:", error);
  }
};


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


const deleteSelectedRooms = async () => {
  try {
    await Promise.all(selectedRoomIds.value.map(async (roomId) => {
      await axios.delete(`http://localhost:8080/api/v1/escapeRooms/${roomId}`, {
        headers: {
          'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',  // Incluye la autenticación
        }
      });
    }));


    escapeRooms.value = escapeRooms.value.filter(room => !selectedRoomIds.value.includes(room.id));
    selectedRoomIds.value = [];
  } catch (error) {
    console.error("Error al eliminar los escape rooms:", error);
  }
};


const fetchEscapeRooms = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/escapeRooms/all', {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
      }
    });
    escapeRooms.value = response.data;
  } catch (error) {
    console.error("Error al obtener los escape rooms:", error);
  }
};

onMounted(() => {
  fetchEscapeRooms();
});


const toggleSelectRoom = (roomId) => {
  const index = selectedRoomIds.value.indexOf(roomId);
  if (index > -1) {
    selectedRoomIds.value.splice(index, 1);
  } else {
    selectedRoomIds.value.push(roomId);
  }
};
</script>

<template>
  <main>
    <div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h1 class="text-center">LISTADO DE ESCAPE ROOMS</h1>
          <div class="d-flex justify-content-between">
            <button id="add-er" class="btn btn-success" @click="showAddModal"> + Añadir ER</button>
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

            <button type="submit" id="btn-crear" class="btn btn-success">{{ isEditMode ? 'Actualizar' : 'Crear'
              }}</button>

            <button type="button" id="btn-cancelar" class="btn btn-success" @click="closeModal">Cancelar</button>

          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style scoped>
h1{
  margin-top: 100px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.table {

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
  background-color: rgba(186, 181, 177, 0.468);
  ;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
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
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
}

.nombre {
  width: 350px;
  border-radius: 6px;
  border: solid 2px #c16b26;
}

textarea {
  width: 350px;
  border-radius: 6px;
  border: solid 2px #c16b26;
}

select {
  align-items: center;
  border-radius: 6px;
  border: solid 2px #c16b26;
}

.btn-xs {
  padding: 5px 10px;
  font-size: 0.75rem;
}

#add-er {
  background-color: #c16b26;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  border: solid 2px black;
  margin-bottom: 15px;
}

.btn-success {
  width: 120px;
  height: auto;
  margin-top: 30px;
}

#btn-crear {
  margin-right: 30px;
}

#btn-cancelar {
  background-color: red;

}

/* Estilos responsivos */
@media (max-width: 768px) {
  .table-img {
    width: 40px;
  }
}
</style>
