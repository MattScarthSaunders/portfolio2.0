<script setup lang="ts"></script>

<template>
  <main>
    <div class="fade-overlay"></div>
    <div>frontend!</div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 60s ease infinite;
  height: 100vh;
  box-shadow: inset 0 -30vh 250px 0 black;
}

.fade-overlay {
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0;
  transition: opacity 4s ease;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
