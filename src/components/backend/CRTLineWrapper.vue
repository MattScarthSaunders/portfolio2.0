<script setup lang="ts">
import CRTLine from './CRTLine.vue'

const props = defineProps<{ lineNum?: number }>()
</script>

<template>
  <div class="wrap">
    <slot></slot>
    <CRTLine v-for="x in lineNum"></CRTLine>
  </div>
</template>

<style scoped>
.wrap {
  position: relative;
  animation: flickerLoad 10s infinite;
}
</style>
