<script setup lang="ts">
import CRTLine from './CRTLine.vue'

defineProps<{ lineNum?: number; height: string; width: string }>()
</script>

<template>
  <div class="wrap">
    <slot></slot>
    <CRTLine v-for="x in lineNum" :key="x + 'num'"></CRTLine>
  </div>
</template>

<style scoped>
.wrap {
  position: relative;
  animation: flickerLoad 10s infinite;
  height: v-bind(height);
}
</style>
