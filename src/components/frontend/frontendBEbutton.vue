<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ feBeTrig: number }>()
</script>

<template>
  <button class="frontend-BE-trigger" @click="$emit('feBEtriggered')">Backend</button>
</template>

<style scoped>
.frontend-BE-trigger {
  content: '...';
  position: absolute;
  top: 10%;
  right: 5%;
  opacity: v-bind(feBeTrig);
  background: none;
  border: none;
  color: green;
  font-size: 2rem;
  cursor: pointer;
}
</style>
