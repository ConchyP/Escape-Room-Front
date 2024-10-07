
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";


const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const isLoginActive = ref(true);
const username = ref("");
const password = ref(""); 
const showPass = ref(false); 
const textAlert = ref("");


const toggleShowPassword = () => {
  showPass.value = !showPass.value;
};


const handleLogin = async () => {
  if (username.value.trim() === "" || password.value.trim() === "") {
    textAlert.value = "Username or password cannot be empty!";
    return; 
  }

  try {
    const response = await authStore.login(username.value, password.value);

    if (response.message === "Logged") {
      authStore.user.isAuthenticated = true;
      authStore.user.id = response.id;
      authStore.user.username = response.username;
      authStore.user.role = response.roles;

     
      localStorage.setItem("id", response.id);
      localStorage.setItem("username", response.username);
      localStorage.setItem("role", response.roles);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("token", btoa(`${username.value}:${password.value}`));

      const userRole = response.roles;
      let redirectPath;
      if (userRole.includes('ROLE_ADMIN')) {
        redirectPath = '/admin'; // Cambia esto a la ruta de tu vista de admin
      } else if (userRole.includes('ROLE_USER')) {
        redirectPath = '/HomeView'; // Cambia esto a la ruta de tu vista de user
      } else {
        redirectPath = '/game'; // Ruta por defecto si el rol no se reconoce
      }

      await router.push(redirectPath);
    
    } else {
      textAlert.value = "Incorrect username or password!";
    }
  } catch (error) {
    textAlert.value = "Error trying to login, please try again.";
    console.error("Login error:", error); 
  }
};

</script>


<template>
  <div class="limit">
    <div class="login-container">
      <div class="bb-login">
        <form class="bb-form validate-form">
          <span class="bb-form-title p-b-26">Bienvenid@</span>
          <span class="bb-form-title p-b-48">
            <i class="mdi mdi-symfony"></i>
          </span>

         
          <div class="wrap-input100 validate-input" data-validate="Username is required">
            <input class="input100" type="text" v-model="username" />
            <span class="bbb-input" data-placeholder="Username"></span>
          </div>

          <div class="wrap-input100 validate-input" data-validate="Enter password">
            <span class="btn-show-pass" @click="toggleShowPassword">
              <i :class="showPass ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"></i>
            </span>
            <input class="input100" :type="showPass ? 'text' : 'password'" v-model="password" />
            <span class="bbb-input" data-placeholder="Password"></span>
          </div>

         
          <div class="login-container-form-btn">
            <div class="bb-login-form-btn">
              <div class="bb-form-bgbtn"></div>
              <button class="bb-form-btn" @click.prevent="handleLogin">Login</button>
            </div>
          </div>

        
          <div v-if="textAlert" class="text-alert">
            {{ textAlert }}
          </div>

          <div class="text-center p-t-115">
  <span class="txt1">¿No tienes cuenta?</span>
  <router-link class="txt2" to="/Register">Registrate</router-link>
</div>
        </form>
      </div>
    </div>
  </div>
</template>



<style scoped>
 
 
 .bb-login {

     position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 390px; 
    min-height: 150px; 
    background: #ffffff4c; 
    border-radius: 10px;
    padding: 26px 23px 35px 21px; 
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
 }

 input {
     outline: none;
     border: none
 }

 textarea {
     outline: none;
     border: none
 }

 textarea:focus,
 input:focus {
     border-color: transparent !important
 }

 input:focus::-webkit-input-placeholder {
     color: transparent
 }

 input:focus:-moz-placeholder {
     color: transparent
 }

 input:focus::-moz-placeholder {
     color: transparent
 }

 input:focus:-ms-input-placeholder {
     color: transparent
 }

 textarea:focus::-webkit-input-placeholder {
     color: transparent,
 }

 textarea:focus:-moz-placeholder {
     color: transparent
 }

 textarea:focus::-moz-placeholder {
     color: transparent
 }

 textarea:focus:-ms-input-placeholder {
     color: transparent
 }

 input::-webkit-input-placeholder {
     color: #adadad
 }

 input:-moz-placeholder {
     color: #adadad
 }

 input::-moz-placeholder {
     color: #adadad
 }

 input:-ms-input-placeholder {
     color: #adadad
 }

 textarea::-webkit-input-placeholder {
     color: #adadad
 }

 textarea:-moz-placeholder {
     color: #adadad
 }

 textarea::-moz-placeholder {
     color: #adadad
 }

 textarea:-ms-input-placeholder {
     color: #adadad
 }

 button {
     outline: none !important;
     border: none;
     background: transparent
 }

 button:hover {
     cursor: pointer
 }

 iframe {
     border: none !important
 }

 .txt1 {
     font-family: Poppins-Regular;
     font-size: 13px;
     color: #666666;
     line-height: 1.5
 }

 .txt2 {
     font-family: Poppins-Regular;
     font-size: 13px;
     color: #e58414;
     line-height: 1.5
 }

 .p-t-115 {
     padding-top: 40px
 }

 .p-b-48 {
     padding-bottom: 35px
 }

 .limit {
     width: 100%;
     margin: 0 auto
 }


 .bb-login {
     width: 390px;
     background: #ffffffde;
     border-radius: 10px;
     overflow: hidden;
     padding: 26px 23px 35px 21px;
     box-shadow: 
        0 10px 30px 10px rgba(229, 132, 20, 0.4), 
        0 20px 50px 15px rgba(229, 132, 20, 0.3), 
        0 30px 70px 20px rgba(229, 132, 20, 0.2);
     margin: auto;
 }

 .bb-form {
     width: 100%
 }

 .bb-form-title {
     display: block;
     font-family: Poppins-Bold;
     font-size: 30px;
     color: #333333;
     line-height: 1.2;
     text-align: center
 }

 .bb-form-title i {
     font-size: 60px
 }

 .wrap-input100 {
     width: 100%;
     position: relative;
     border-bottom: 2px solid #adadad;
     margin-bottom: 37px
 }

 .input100 {
     font-family: Poppins-Regular;
     font-size: 15px;
     color: #555555;
     line-height: 1.2;
     display: block;
     width: 100%;
     height: 45px;
     background: transparent;
     padding: 0 5px
 }

 .bbb-input {
     position: absolute;
     display: block;
     width: 100%;
     height: 100%;
     top: 0;
     left: 0;
     pointer-events: none
 }

 .bbb-input::before {
     content: "";
     display: block;
     position: absolute;
     bottom: -2px;
     left: 0;
     width: 0;
     height: 2px;
     -webkit-transition: all 0.4s;
     -o-transition: all 0.4s;
     -moz-transition: all 0.4s;
     transition: all 0.4s;
     background: #e58414;
     background: -webkit-linear-gradient(left, #e58414,  #73878b);
     background: -o-linear-gradient(left, #e58414,  #73878b);
     background: -moz-linear-gradient(left,#e58414,  #73878b);
     background: linear-gradient(left, #e58414,  #73878b)
 }

 .bbb-input::after {
     font-family: Poppins-Regular;
     font-size: 15px;
     color: #999999;
     line-height: 1.2;
     content: attr(data-placeholder);
     display: block;
     width: 100%;
     position: absolute;
     top: 16px;
     left: 0px;
     padding-left: 5px;
     -webkit-transition: all 0.4s;
     -o-transition: all 0.4s;
     -moz-transition: all 0.4s;
     transition: all 0.4s
 }

 .input100:focus+.bbb-input::after {
     top: -15px
 }

 .input100:focus+.bbb-input::before {
     width: 100%
 }

 .has-val.input100+.bbb-input::after {
     top: -15px
 }

 .has-val.input100+.bbb-input::before {
     width: 100%
 }

 .btn-show-pass {
     font-size: 15px;
     color: #999999;
     display: -webkit-box;
     display: -webkit-flex;
     display: -moz-box;
     display: -ms-flexbox;
     display: flex;
     align-items: center;
     position: absolute;
     height: 100%;
     top: 0;
     right: 0;
     padding-right: 5px;
     cursor: pointer;
     -webkit-transition: all 0.4s;
     -o-transition: all 0.4s;
     -moz-transition: all 0.4s;
     transition: all 0.4s
 }

 .btn-show-pass:hover {
     color: #e58414;
     color: -webkit-linear-gradient(left, #73878b, #e58414);
     color: -o-linear-gradient(left, #73878b, #e58414);
     color: -moz-linear-gradient(left, #73878b, #e58414);
     color: linear-gradient(left, #73878b, #e58414)
 }

 .btn-show-pass.active {
     color: #ca711e;
     color: -webkit-linear-gradient(left, #73878b, #e58414);
     color: -o-linear-gradient(left, #73878b, #e58414);
     color: -moz-linear-gradient(left, #73878b, #e58414);
     color: linear-gradient(left, #73878b, #e58414)
 }

 .login-container-form-btn {
     display: -webkit-box;
     display: -webkit-flex;
     display: -moz-box;
     display: -ms-flexbox;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     padding-top: 13px
 }

 .bb-login-form-btn {
     width: 100%;
     display: block;
     position: relative;
     z-index: 1;
     border-radius: 25px;
     overflow: hidden;
     margin: 0 auto
 }

 .bb-form-bgbtn {
     position: absolute;
     z-index: -1;
     width: 300%;
     height: 100%;
     background: #a64bf4;
     background: -webkit-linear-gradient(right, #fda121, #FF9800, #FFC107, #665958);
     background: -o-linear-gradient(right, #083e4a, #b721ff, #21d4fd, #b721ff);
     background: -moz-linear-gradient(right, #fdb021, #b721ff, #21d4fd, #b721ff);
     background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
     top: 0;
     left: -100%;
     -webkit-transition: all 0.4s;
     -o-transition: all 0.4s;
     -moz-transition: all 0.4s;
     transition: all 0.4s
 }

 .bb-form-btn {
     font-family: Poppins-Medium;
     font-size: 15px;
     color: #fff;
     line-height: 1.2;
     text-transform: uppercase;
     display: -webkit-box;
     display: -webkit-flex;
     display: -moz-box;
     display: -ms-flexbox;
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0 20px;
     width: 100%;
     height: 50px
 }

 .bb-login-form-btn:hover .bb-form-bgbtn {
     left: 0
 }

 @media (max-width: 576px) {
     .bb-login {
         padding: 77px 15px 33px 15px
     }
 }

 .validate-input {
     position: relative
 }

 .alert-validate::before {
     content: attr(data-validate);
     position: absolute;
     max-width: 70%;
     background-color: #fff;
     border: 1px solid #706e6e;
     border-radius: 2px;
     padding: 4px 25px 4px 10px;
     top: 50%;
     -webkit-transform: translateY(-50%);
     -moz-transform: translateY(-50%);
     -ms-transform: translateY(-50%);
     -o-transform: translateY(-50%);
     transform: translateY(-50%);
     right: 0px;
     pointer-events: none;
     font-family: Poppins-Regular;
     color: #c87f00;
     font-size: 13px;
     line-height: 1.4;
     text-align: left;
     visibility: hidden;
     opacity: 0;
     -webkit-transition: opacity 0.4s;
     -o-transition: opacity 0.4s;
     -moz-transition: opacity 0.4s;
     transition: opacity 0.4s
 }

 .alert-validate::after {
     content: "\f06a";
     font-family: FontAwesome;
     font-size: 16px;
     color: #cb8503;
     display: block;
     position: absolute;
     background-color: #fff;
     top: 50%;
     -webkit-transform: translateY(-50%);
     -moz-transform: translateY(-50%);
     -ms-transform: translateY(-50%);
     -o-transform: translateY(-50%);
     transform: translateY(-50%);
     right: 5px
 }

 .alert-validate:hover:before {
     visibility: visible;
     opacity: 1
 }

 @media (max-width: 992px) {
     .alert-validate::before {
         visibility: visible;
         opacity: 1
     }
 }

 a {
     text-decoration: none !important
 }

 .mdi {
     color: #f2f2f2 !important
 }

 .show_password {
     color: black !important;
     margin-right: 8px
 }

</style>