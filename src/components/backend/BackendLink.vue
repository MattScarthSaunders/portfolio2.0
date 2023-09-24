<script setup lang="ts">
const props = defineProps<{ link: string }>()
</script>

<template>
  <a class="projectLink" :href="props.link" target="_blank">
    <slot></slot>
  </a>
</template>

<style scoped>
.projectLink {
  color: green;
  background-color: var(--BE-bg-color);
  border: var(--BE-bg-border);
  box-shadow: var(--BE-bg-border-shadow);
  font-size: 1.25rem;
  padding: 0.25rem;
  text-decoration: none;
  height: max-content;
  width: max-content;
}

.projectLink:hover,
.projectLink:focus {
  cursor: pointer;
  background-color: rgb(23, 48, 9);
}

.projectLink:active {
  border: 1px solid rgba(255, 255, 255, 0);
}
</style>
