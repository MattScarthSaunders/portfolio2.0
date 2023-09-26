<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'
</script>

<template>
  <main class="LoadingBase">
    <TypeFlow><h1 class="loadingAnim">LOADING</h1></TypeFlow>
  </main>
</template>

<style scoped>
.loadingAnim {
  width: 10rem;
  height: 10rem;
  padding: 2rem;
  font-size: 2rem;
  background-color: ivory;
  animation: loadingAnim 5s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
}
.LoadingBase {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 99;
  color: black;
}
</style>
