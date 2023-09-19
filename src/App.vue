<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="base">
    <header>
      <nav>
        <RouterLink to="/Frontend">Frontend</RouterLink>
        <RouterLink to="/Backend">Backend</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.base {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  background: rgb(6, 17, 1);
}

header {
  display: flex;
  max-height: 10vh;
  position: absolute;
  top: 0;
}

nav {
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
}
</style>
