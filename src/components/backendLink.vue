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
  background-color: rgb(3, 12, 3);
  border: 1px solid green;
  padding: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
  height: max-content;
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
