<script setup lang="ts">
import { useControlStore } from '@/stores/appControl'
import { useFEProjStore } from '@/stores/frontendProjects'

const store = useControlStore()
const FEstore = useFEProjStore()
</script>

<template>
  <router-link
    class="Frontend-BE-trigger"
    to="/Backend"
    @click="
      () => {
        store.chosen = 'Backend'
        FEstore.isActive = ''
      }
    "
    >Backend</router-link
  >
</template>

<style scoped>
.Frontend-BE-trigger {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.149);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 0.5),
    0 0 5px rgba(255, 255, 255, 0.5);
  font-size: 2rem;
  cursor: pointer;
  font-family: 'Tourney';
  font-weight: 100;
  transition: opacity 3s ease;
  text-decoration: none;
}

.Frontend-BE-trigger:hover {
  color: white;
  text-shadow:
    0 0 2px rgb(0, 255, 0),
    0 0 10px rgb(0, 255, 0),
    0 0 20px rgb(0, 255, 0),
    0 0 40px rgb(0, 255, 0);
  animation: flickerLoad 15s infinite;
}
</style>
