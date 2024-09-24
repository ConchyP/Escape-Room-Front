
<script setup>

                        
</script>

<template>
  <nav class="navbar navbar-expand-lg custom-navbar fixed-top w-100">
    <div class="container-fluid">
  
      <a class="navbar-brand d-flex align-items-center" href="../views/HomeView.vue">
        <img src="../assets/images/LogoEscapeRoom.png" alt="Logo" class="logo-image" />
        <img src="../assets/images/EscapeRoomOnline.png" alt="Logo" class="name-image" />

        <div class="slogan-container ms-3">
          <span class="slogan-line"></span>
        </div>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/Home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Game">Game</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/CountDownTimer">Timer</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  background: linear-gradient(to bottom, #000000 , #393939,#686865f8, #ffffff); 
  box-shadow: 0 4px 8px rgba(17, 17, 16, 0.56);
  transition: background-color 0.3s ease; 
}

.logo-image {
  height: 90px;
  width: auto;
}

.name-image{
  height: 50px;
  width: 350px;
}

.navbar-toggler {
  border-color: rgba(15, 13, 13, 0.5);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.nav-link {
  font-size: 20px;
  color: white;
  font-weight: bold;
  transition: transform 0.2s, color 0.2s;
  margin-right: 40px; 
}

.nav-link:hover {
  color: #d26e0a; 
  transform: scale(1.2);
}
.nav-link:active {
  color: #d26e0a; 
}

</style>
