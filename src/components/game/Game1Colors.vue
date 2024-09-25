<script setup>
import { ref } from 'vue'

const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8', '#33FFF5']
const rounds = [3, 4, 5] 

const maxRounds = 3

const gameStarted = ref(false)
const currentRound = ref(0)
const colorSequence = ref([])
const userSequence = ref([])
const userTurn = ref(false)
const checks = ref([false, false, false])
const showMessage = ref(false)
const message = ref('')
const link = ref('')

const startGame = () => {
  gameStarted.value = true
  currentRound.value = 0
  checks.value = [false, false, false]
  nextRound()
}

const nextRound = () => {
  if (currentRound.value >= maxRounds) {
    message.value = '¡Enhorabuena!'
    link.value = '/next-view' 
    showMessage.value = true
    return
  }

  userTurn.value = false
  userSequence.value = []
  colorSequence.value = []

  for (let i = 0; i < rounds[currentRound.value]; i++) {
    colorSequence.value.push(colors[Math.floor(Math.random() * colors.length)])
  }

  let index = 0
  const interval = setInterval(() => {
    if (index >= colorSequence.value.length) {
      clearInterval(interval)
      userTurn.value = true
      return
    }
    const button = document.querySelector(`.color-button:nth-child(${colors.indexOf(colorSequence.value[index]) + 1})`)
    button.classList.add('active')
    setTimeout(() => {
      button.classList.remove('active')
      index++
    }, 500)
  }, 1000)
}

const handleClick = (index) => {
  if (!userTurn.value) return

  const button = document.querySelector(`.color-button:nth-child(${index + 1})`)
  button.classList.add('active')

  setTimeout(() => {
    button.classList.remove('active')
  }, 300)

  userSequence.value.push(colors[index])

  if (userSequence.value.length === colorSequence.value.length) {
    if (JSON.stringify(userSequence.value) === JSON.stringify(colorSequence.value)) {
      checks.value[currentRound.value] = true
      console.log('Checks:', checks.value) 
      currentRound.value++
      nextRound()
    } else {
      message.value = '¡Inténtalo de nuevo!'
      showMessage.value = true
      setTimeout(() => {
        showMessage.value = false
        nextRound() 
      }, 2000) 
    }
  }
}
</script>

<template>
  <div class="game-container">
    <div class="background-image"></div>
    <div class="overlay">
      <div v-if="!gameStarted" class="start-button-container">
        <h1 class="game-intro">Vamos a poner a prueba tu memoria!</h1>
        <button @click="startGame" class="start-button">Comenzar</button>
      </div>
      <div v-else>
        <div class="color-buttons">
          <button v-for="(color, index) in colors" :key="index" :style="{ backgroundColor: color }"
            @click="handleClick(index)" class="color-button"></button>
        </div>
        <div class="status">
          <div class="checks">
            <span v-for="(check, index) in checks" :key="index" :class="{
              'check-filled': check,
              'check-empty': !check
            }">
              ✔
            </span>
          </div>
          <div v-if="showMessage" class="message">
            <p>{{ message }}</p>
            <a v-if="link" :href="link">Ir a otra vista</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.start-button-container {
  text-align: center;
}

.start-button {
  padding: 15px 30px;
  font-size: 20px;
  background-color: rgb(255, 200, 0); 
  color: #04213e; 
  border: 2px solid rgb(255, 251, 0); 
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold; 
  text-transform: uppercase; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  transition: background-color 0.3s, box-shadow 0.3s; 
}

.start-button:hover {
  background-color: #efb209; 
  box-shadow: 0 6px 12px rgba(186, 158, 5, 0.3); 
}

.game-intro {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.color-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.color-button {
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.color-button.active {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.status {
  text-align: center;
}

.checks {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}

.check-filled {
  background-color: green; /* CON ESTO DEBERIA DE CAMBIAR A VERDE AL COMPLETAR LA RONDA PERO NO LO HACE */
  font-size: 60px; 
  margin: 0 5px;
  transition: color 0.3s; 
}

.check-empty {
  color: gray; 
  font-size: 40px; 
  margin: 0 5px;
  transition: color 0.3s; 
}

.message {
  margin-top: 20px;
  font-size: 18px;
}
</style>
