<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ frontendBETrigger: number }>()

const buttonContent = ref('...')
</script>

<template>
  <button class="frontend-BE-trigger" @click="$emit('frontendBETriggergered')">Backend >>></button>
</template>

<style scoped>
.frontend-BE-trigger {
  position: absolute;
  bottom: 3%;
  right: 2%;
  opacity: v-bind(frontendBETrigger);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.149);
  text-shadow:
    0 0 2px rgba(1, 150, 1, 0.5),
    0 0 5px rgba(1, 150, 1, 0.5),
    0 0 7px rgba(1, 150, 1, 0.5),
    0 0 10px rgba(1, 150, 1, 0.5);
  font-size: 2rem;
  cursor: pointer;
  font-family: 'Tourney';
  font-weight: 100;
  transition: opacity 3s ease;
}

.frontend-BE-trigger:hover {
  color: white;
  text-shadow:
    0 0 2px rgb(0, 255, 0),
    0 0 10px rgb(0, 255, 0),
    0 0 20px rgb(0, 255, 0),
    0 0 40px rgb(0, 255, 0);
  animation: flickerLoad 15s infinite;
}
</style>
