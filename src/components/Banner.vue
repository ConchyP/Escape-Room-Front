

<template>
  <div class="jumbotron">
    <h1 class="title">Desafía tu mente,</h1>
    <h2>escapa en cualquier lugar</h2>
    <hr class="divider" />
    <h3 class="login-info">Dale a jugar y comienza tu aventura</h3>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.jumbotron {
  width: 100vw;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}


.jumbotron::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/candado.jpg.jpeg'),
                    url('../assets/images/escapeRoomBanner.jpg'),
                    url('../assets/images/Logo.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9;
  animation: backgroundFade 15s infinite;
  z-index: -1;
}


h1, h2, h3 {
  font-family: 'Orbitron', sans-serif;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 128, 0, 0.8),
               0 0 20px rgba(255, 128, 0, 0.6),
               0 0 30px rgba(255, 128, 0, 0.4),
               0 0 40px rgba(255, 100, 0, 0.2); 
  text-align: center;
  margin-top: 60px;
}

.title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 2.5rem;
  margin: 1rem 0;
}

h3 {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.divider {
  width: 50%;
  border: 1px solid white;
  margin: 1.5rem 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .login-info {
    font-size: 1rem;
  }

  .divider {
    width: 80%;
  }
}


@keyframes backgroundFade {
  0% { background-image: url('../assets/images/BackgroundEscape.png'); }
  33% { background-image: url('../assets/images/candado.jpg'); }
  66% { background-image: url('../assets/images/BackgroundGame.png'); }
  100% { background-image: url('../assets/images/escapeRoomBanner.jpg'); }
}
</style>
