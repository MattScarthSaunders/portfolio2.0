<script setup lang="ts">
import { typingEffect } from '../utils/typing'
import { onMounted } from 'vue'

const props = defineProps<{ input: string; speed: number; typerkey: number; iscode: boolean }>()

onMounted(() => {
  const elem = document.getElementById(`codescript${props.typerkey}`)
  typingEffect(elem, props.input, props.speed, props.iscode)
})
</script>

<template>
  <section class="codescript-container">
    <p :id="`codescript${props.typerkey}`" class="codescript"></p>
  </section>
</template>

<style scoped>
.codescript-container {
  width: 75vw;
  max-width: 100%;
}
.codescript {
  color: green;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  max-width: 100%;
}
</style>
