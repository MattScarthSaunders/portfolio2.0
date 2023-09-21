<script setup lang="ts">
import backendNavDock from './backend/backendNavDock.vue'
const props = defineProps<{ backendChosen?: boolean; frontendChosen?: boolean }>()
</script>

<template>
  <backendNavDock v-if="backendChosen"></backendNavDock>
</template>

<style scoped></style>
