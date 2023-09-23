<script setup lang="ts">
const props = defineProps<{ frontendBETrigger: number }>()
</script>

<template>
  <button class="frontend-BE-trigger" @click="$emit('frontendBETriggergered')">Backend</button>
</template>

<style scoped>
.frontend-BE-trigger {
  content: '...';
  position: absolute;
  top: 10%;
  right: 5%;
  opacity: v-bind(frontendBETrigger);
  background: none;
  border: none;
  color: green;
  font-size: 2rem;
  cursor: pointer;
}
</style>
