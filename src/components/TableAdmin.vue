<!-- <script setup>
import { ref } from 'vue'

// Crear una lista de usuarios (data) para simular las filas
const users = ref([
  {
    firstName: 'Mohsin',
    lastName: 'Irshad',
    address: 'CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan',
    email: 'isometric.mohsin@gmail.com',
    contact: '+923335586757',
    checked: false
  },
  {
    firstName: 'Mohsin',
    lastName: 'Irshad',
    address: 'CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan',
    email: 'isometric.mohsin@gmail.com',
    contact: '+923335586757',
    checked: false
  },
  {
    firstName: 'Mohsin',
    lastName: 'Irshad',
    address: 'CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan',
    email: 'isometric.mohsin@gmail.com',
    contact: '+923335586757',
    checked: false
  },
  {
    firstName: 'Mohsin',
    lastName: 'Irshad',
    address: 'CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan',
    email: 'isometric.mohsin@gmail.com',
    contact: '+923335586757',
    checked: false
  }
])

// Checkbox de selección general
const checkAll = ref(false)

// Función para manejar la selección de todos los checkboxes
const toggleCheckAll = () => {
  users.value.forEach(user => user.checked = checkAll.value)
}

// Función para manejar la edición de un usuario
const editUser = (user) => {
  // Aquí iría la lógica para editar el usuario
  console.log('Editando usuario', user)
}

// Función para manejar la eliminación de un usuario
const deleteUser = (user) => {
  // Aquí iría la lógica para eliminar el usuario
  console.log('Eliminando usuario', user)
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4>Vue Snippet for Datatable</h4>
          <div class="table-responsive">
            <table id="mytable" class="table table-bordred table-striped">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" v-model="checkAll" @change="toggleCheckAll" />
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <td>
                    <input type="checkbox" v-model="user.checked" />
                  </td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.address }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.contact }}</td>
                  <td>
                    <button class="btn btn-primary btn-xs" @click="editUser(user)">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-danger btn-xs" @click="deleteUser(user)">
                      <span class="glyphicon glyphicon-trash"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="clearfix"></div>
            <ul class="pagination pull-right">
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

    <!-- Modal Edit 
    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
            <h4 class="modal-title custom_align" id="Heading">Edit Your Detail</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input class="form-control " type="text" placeholder="First Name">
            </div>
            <div class="form-group">
              <input class="form-control " type="text" placeholder="Last Name">
            </div>
            <div class="form-group">
              <textarea rows="2" class="form-control" placeholder="Address"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning btn-lg" style="width: 100%;">
              <span class="glyphicon glyphicon-ok-sign"></span> Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Delete 
    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
            <h4 class="modal-title custom_align" id="Heading">Delete this entry</h4>
          </div>
          <div class="modal-body">
            <div class="alert alert-danger">
              <span class="glyphicon glyphicon-warning-sign"></span> Are you sure you want to delete this Record?
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">
              <span class="glyphicon glyphicon-ok-sign"></span> Yes
            </button>
            <button type="button" class="btn btn-default" data-dismiss="modal">
              <span class="glyphicon glyphicon-remove"></span> No
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Puedes agregar estilos adicionales aquí */
</style> -->
<script setup>
import { ref } from 'vue'

// Crear una lista de escape rooms simulada basada en tu modelo Java
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

// Checkbox de selección general
const checkAll = ref(false)

// Función para manejar la selección de todos los checkboxes
const toggleCheckAll = () => {
  escapeRooms.value.forEach(room => room.checked = checkAll.value)
}

// Función para manejar la edición de una escape room
const editRoom = (room) => {
  // Aquí iría la lógica para editar la escape room
  console.log('Editando escape room', room)
}

// Función para manejar la eliminación de una escape room
const deleteRoom = (room) => {
  // Aquí iría la lógica para eliminar la escape room
  console.log('Eliminando escape room', room)
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h4 class="text-center">Listado de Escape Rooms</h4>
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
                  <td><img :src="'/assets/images/' + room.image" alt="Room image" class="table-img"/></td>
                  <td>
                    <button class="btn btn-primary btn-xs" @click="editRoom(room)">
                      <span class="glyphicon glyphicon-pencil"></span> Editar
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-danger btn-xs" @click="deleteRoom(room)">
                      <span class="glyphicon glyphicon-trash"></span> Eliminar
                    </button>
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
  </main>
</template>

<style scoped>
/* Estilos para centrar la tabla */
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

.pagination {
  margin-top: 20px;
}

.btn-xs {
  padding: 5px 10px;
  font-size: 0.75rem;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .table-img {
    width: 40px;
  }
}
</style>

