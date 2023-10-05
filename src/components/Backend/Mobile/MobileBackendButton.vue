<script setup lang="ts">
const props = defineProps<{ name: string; projectIndex: number; height: string; width: string }>()
</script>

<template>
  <button :class="[`${props.name}-button`, 'projectButton']" @click="$emit('projName')">
    {{ props.name }}
  </button>
</template>

<style scoped>
.projectButton {
  color: var(--BE-color);
  background-color: var(--BE-bg-color);
  border: var(--BE-bg-border);
  box-shadow: var(--BE-bg-border-shadow);
  padding: 1rem;
  font-size: 1rem;
  animation: textShadow 10.6s infinite;
  height: v-bind(height);
  width: v-bind(width);
  display: flex;
  justify-content: center;
  align-items: center;
}

.projectButton:hover,
.projectButton:focus {
  cursor: pointer;
  background-color: rgb(23, 48, 9);
}

.projectButton:active {
  border: 1px solid rgba(255, 255, 255, 0);
}
</style>
