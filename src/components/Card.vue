<!-- <script setup>
import { ref } from 'vue';

const showMore = ref(false); // Controlar la visibilidad del texto expandido

const toggleShowMore = () => {
  showMore.value = !showMore.value; // Alternar el estado de mostrar más texto
};

const expandedText = `
  Here is more detailed information about John Doe. 
  He has been working in the field for over 10 years and has 
  completed numerous projects in architecture and engineering. 
  His work is known for its innovation and creativity. 
  Outside of work, John enjoys hiking and photography, which 
  often inspires his designs. He believes in sustainable architecture 
  and is dedicated to creating environmentally friendly buildings. 
  He also participates in community service projects and mentors young 
  architects.
`;
</script>

<template>
  <div class="container">
    <div class="custom-card">
      <img
        class="card-img-left"
        src="../assets/images/LogoEscapeRoom.png"
        alt="Card image"
      />
      <div class="card-body">
        <h4 class="card-title">John Doe <span class="expand-text">+</span></h4>
        <p class="card-text">
          Some example text some example text. John Doe is an architect and engineer.
          <span v-if="showMore">{{ expandedText }}</span>
        </p>
        <button class="btn btn-secondary" @click="toggleShowMore">
          {{ showMore ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Centrar la tarjeta en el contenedor */
  padding: 20px; /* Espacio alrededor del contenedor */
}

.custom-card {
  display: flex; /* Usar flexbox para alinear elementos */
  width: 800px; /* Aumentar ancho de la tarjeta */
  background-color: black; /* Fondo negro para la tarjeta */
  border: 4px solid orange; /* Borde más ancho */
  border-radius: 8px; /* Esquinas redondeadas */
  overflow: hidden; /* Ocultar desbordamiento de contenido */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5); /* Sombra más pronunciada */
}

.card-img-left {
  width: 350px; /* Aumentar ancho de la imagen */
  height: auto; /* Mantener proporciones de la imagen */
}

.card-body {
  background-color: grey; /* Fondo gris para el cuerpo de la tarjeta */
  color: white; /* Color del texto */
  padding: 15px; /* Espaciado interno */
  flex: 1; /* Hacer que el cuerpo de la tarjeta ocupe el espacio restante */
  position: relative; /* Para el efecto de expansión */
}

.card-title {
  margin-bottom: 10px; /* Espaciado inferior del título */
  cursor: pointer; /* Cambiar el cursor al pasar sobre el título */
}

.expand-text {
  display: inline-block; /* Para poder expandir el texto */
  transition: transform 0.3s ease; /* Transición para el efecto de expansión */
}

.card-title:hover .expand-text {
  transform: scale(1.5); /* Aumentar el tamaño al hacer hover */
}

.card-text {
  margin-bottom: 20px; /* Espaciado inferior del texto */
  max-height: 50px; /* Altura máxima antes de expandir */
  overflow: hidden; /* Ocultar desbordamiento de contenido */
  transition: max-height 0.3s ease; /* Transición para la expansión del texto */
}

.button-container {
  display: flex;
  justify-content: center; /* Centrar el botón horizontalmente */
}

.btn-primary {
  background-color: orange; /* Color de fondo del botón */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno del botón */
  border-radius: 5px; /* Esquinas redondeadas del botón */
  color: white; /* Color del texto del botón */
  text-align: center; /* Centrar texto en el botón */
}

.btn-secondary {
  background-color: lightblue; /* Color de fondo del botón "Show More" */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno del botón */
  border-radius: 5px; /* Esquinas redondeadas del botón */
  color: black; /* Color del texto del botón */
  cursor: pointer; /* Cambiar el cursor al pasar sobre el botón */
}

.btn-secondary:hover {
  background-color: #add8e6; /* Color de fondo al pasar el ratón */
}

.btn-primary:hover {
  background-color: #ff8c00; /* Color de fondo al pasar el ratón */
}
</style>
 -->
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
   try {
     const response = await axios.get('http://localhost:8080/api/v1/escapeRooms/all');
     escapeRooms.value = response.data;  // Guardar los datos de escape rooms
     // Inicializar el estado de 'showMore' para cada tarjeta
     showMore.value = Array(escapeRooms.value.length).fill(false);
   } catch (error) {
     console.error('Error fetching escape rooms:', error);
   }
 };
 
 // Llamar a fetchEscapeRooms cuando el componente se monte
 onMounted(() => {
   fetchEscapeRooms();
 });
 </script>

<template>
  <div class="container">
    <div v-for="(escapeRoom, index) in escapeRooms" :key="escapeRoom.id" class="custom-card">
      <img
        class="card-img-left"
        :src="escapeRoom.image"
        alt="Card image"
      />
      <div class="card-body">
        <h4 class="card-title">
          {{ escapeRoom.nombre }} 
          <span class="expand-text" @click="toggleShowMore(index)">
            {{ showMore[index] ? '-' : '+' }}
          </span>
        </h4>
        <p class="card-text">
          {{ escapeRoom.descripcion }}
          <span v-if="showMore[index]">
            Dificultad: {{ escapeRoom.dificultad }}
          </span>
        </p>
        <button class="btn btn-secondary" @click="toggleShowMore(index)">
          {{ showMore[index] ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Centrar la tarjeta en el contenedor */
  padding: 20px; /* Espacio alrededor del contenedor */
}

.custom-card {
  display: flex; /* Usar flexbox para alinear elementos */
  width: 800px; /* Aumentar ancho de la tarjeta */
  background-color: black; /* Fondo negro para la tarjeta */
  border: 4px solid orange; /* Borde más ancho */
  border-radius: 8px; /* Esquinas redondeadas */
  overflow: hidden; /* Ocultar desbordamiento de contenido */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5); /* Sombra más pronunciada */
}

.card-img-left {
  width: 350px; /* Aumentar ancho de la imagen */
  height: auto; /* Mantener proporciones de la imagen */
}

.card-body {
  background-color: grey; /* Fondo gris para el cuerpo de la tarjeta */
  color: white; /* Color del texto */
  padding: 15px; /* Espaciado interno */
  flex: 1; /* Hacer que el cuerpo de la tarjeta ocupe el espacio restante */
  position: relative; /* Para el efecto de expansión */
}

.card-title {
  margin-bottom: 10px; /* Espaciado inferior del título */
  cursor: pointer; /* Cambiar el cursor al pasar sobre el título */
}

.expand-text {
  display: inline-block; /* Para poder expandir el texto */
  transition: transform 0.3s ease; /* Transición para el efecto de expansión */
}

.card-title:hover .expand-text {
  transform: scale(1.5); /* Aumentar el tamaño al hacer hover */
}

.card-text {
  margin-bottom: 20px; /* Espaciado inferior del texto */
  max-height: 50px; /* Altura máxima antes de expandir */
  overflow: hidden; /* Ocultar desbordamiento de contenido */
  transition: max-height 0.3s ease; /* Transición para la expansión del texto */
}

.button-container {
  display: flex;
  justify-content: center; /* Centrar el botón horizontalmente */
}

.btn-primary {
  background-color: orange; /* Color de fondo del botón */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno del botón */
  border-radius: 5px; /* Esquinas redondeadas del botón */
  color: white; /* Color del texto del botón */
  text-align: center; /* Centrar texto en el botón */
}

.btn-secondary {
  background-color: lightblue; /* Color de fondo del botón "Show More" */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno del botón */
  border-radius: 5px; /* Esquinas redondeadas del botón */
  color: black; /* Color del texto del botón */
  cursor: pointer; /* Cambiar el cursor al pasar sobre el botón */
}

.btn-secondary:hover {
  background-color: #add8e6; /* Color de fondo al pasar el ratón */
}

.btn-primary:hover {
  background-color: #ff8c00; /* Color de fondo al pasar el ratón */
}
</style> 