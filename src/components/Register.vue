<template>
    <div class="register-form-container">
      <h2>Register</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            v-model="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
  
        <!-- <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div> -->
  
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
  
        <button type="submit">Register</button>
      </form>
      <p v-if="message">{{ message }}</p> <!-- Mensaje de éxito o error -->
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      password: "",
      message: ""
    };
  },
  methods: {
    async handleSubmit() {
   
      const data = {
        username: this.name,
        password: this.password,
        roles: ["ROLE_USER"], 
     
      };

      const config = {
        method: 'post',
        url: 'http://localhost:8080/api/v1/register',
        headers: {
          'Authorization': 'Basic ' + btoa('admin:password'), // Cambia admin y password según tu configuración
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data) // Convertimos los datos a JSON
      };

      try {
        // Realizamos la solicitud al servidor
        const response = await axios.request(config);
        console.log(response.data);
        this.message = "¡Registro exitoso!";
      } catch (error) {
        console.error(error);
        this.message = "¡El registro falló!";
      }
    }
  }
};
</script>
  <style scoped>
  /* Estilos del formulario */
  .register-form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    color: #ff7f50;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    color: #333;
    margin-bottom: 5px;
    font-size: 14px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #ff7f50;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #ff7f50;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #ff6347;
  }
  
  /* Estilo para los mensajes */
  p {
    text-align: center;
    color: green;
    margin-top: 10px;
  }
  </style>
  
  