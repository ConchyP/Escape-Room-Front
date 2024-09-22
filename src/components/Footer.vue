<script setup>
</script>

<template>
  <div>
    <footer class="footer">
      <div id="link">
        <p>
          <a href="https://github.com/ConchyP" target="_blank">© 2024 ConchyP</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>

.footer {
  background:linear-gradient(to top, #000000 , #393939,#686865f8, #ffffff); 
  widows: 0 4px 8px rgba(17, 17, 16, 0.56);
  transition: background-color 0.3s ease; 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
}

#link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer a {
  text-decoration: none;
  color: rgb(255, 254, 253);
  font-weight: bold;
  font-size: 20px;
}
</style>