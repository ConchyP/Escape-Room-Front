<script setup>

</script>

<template>
  <div>
    <footer class="footer">
      <div id="link">
        <div class="icon-links">
          <a href="https://github.com/ConchyP"  target="_blank">
            <img src="../assets/icons/github.png" alt="Icon Github" class="git" />
          </a>
          <a href="https://linkedin.com/in/conchy-pereira-trigal" target="_blank">
            <img src="../assets/icons/linkedIn.png" alt="Icon LinkedIn" class="linkedIn" />
          </a>
          <a href="mailto:xConchyx@gmail.com" target="_blank">
            <img src="../assets/icons/email.png" alt="Icon 3" class="email" />
          </a>
        </div>
      </div>
      <div class="copyright">
        <a a href="https://github.com/ConchyP" target="_blank">© 2024 Conchy Pereira</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.footer {
  background-color: black;
  widows: 0 4px 8px rgba(17, 17, 16, 0.56);
  transition: background-color 0.3s ease; 
  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 4px 8px rgba(17, 16, 16, 0.56);
  z-index: 2;
}

#link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer a {
  text-decoration: none;
  color: rgb(255, 254, 253);
  font-size: 18px;
}

.git{
  margin-top: 5px;
  width:28px;
  height: 28px;
  border-radius: 50%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.linkedIn{
  margin-top: 5px;
  width:28px;
  height: 28px;
  margin-left: 20px;
  margin-right:20px;
  border-radius: 50%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.email{
  margin-top: 5px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.git:hover, .linkedIn:hover, .email:hover {
  box-shadow: 0px 0px 10px 2px rgb(246, 123, 15); 
  transform: scale(1.1); 
}
</style>