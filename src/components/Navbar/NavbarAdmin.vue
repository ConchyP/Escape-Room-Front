
<script setup>
import { ref } from "vue";


const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
                        
</script>

<template>
  <nav class="navbar navbar-expand-lg custom-navbar fixed-top w-100">
    <div class="container-fluid">
  
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="../../assets/images/Logo.png" alt="Logo" class="logo-image" />

        <div class="slogan-container ms-3">
          <span class="slogan-line"></span>
        </div>
      </router-link>

      <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarNav" aria-expanded="isMenuOpen" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

   
      <div :class="['collapse', 'navbar-collapse', { show: isMenuOpen }]" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/Admin">
              <img  class="icons"src="../../assets/icons/home.png">
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Dashboard">
              <img src="../../assets/icons/setting.png">
            </router-link>
          </li>
          <li class="nav-item">
            <router-link img class="nav-link" to="/">
              <img src="../../assets/icons/logout.png">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  /* background: linear-gradient(to bottom, #000000 , #393939, #000000);  */
  background:rgb(0, 0, 0.888);
  box-shadow: 0 5px 8px rgba(17, 17, 16, 0.56);
  transition: background-color 0.3s ease; 
  position:fixed;
}

.logo-image {
  height: 50px;
  width: auto;
}


.navbar-toggler {
  border-color:  rgba(156, 96, 7, 0.961);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.navbar-collapse{
  justify-content: center;
  align-items: center;
  margin-left: 50%;
}

.nav-link {
  font-size: 15px;
  color: white;
  font-weight: bold;
  transition: transform 0.2s, color 0.2s, orange;
  margin-right: 40px; 
  margin:none;
}

.nav-link:hover {
  color: orange; 
  transform: scale(1.2);
}
.nav-link:active {
  color: #d26e0a; 
}
img{
  width:40px;
  height:auto;
}

@media (max-width: 768px) {
  .nav-link {
    font-size: 16px; 
    margin-right: 10px; 
  }

  .logo-image {
    height: 70px; 
  }

  .name-image {
    height: 40px; 
  }
}
.admin-icon {
  height: 30px; 
  width: auto;
  margin-left: 5px; 
}
.nav-link img {
  transition: filter 0.2s; 
}

.nav-link:hover img {
  filter: brightness(0) saturate(100%) invert(53%) sepia(93%) saturate(1558%) hue-rotate(354deg) brightness(105%) contrast(101%); /* Ajusta el color del ícono aquí */
}

</style>

