<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const lineTime = ref(15)
const lineTimeSeconds = computed(() => lineTime.value + 's')

const delay = ref(5)
const delaySeconds = computed(() => delay.value + 's')
const boxAValue = ref(1)

onMounted(() => {
  lineTime.value += Math.ceil(Math.random() * 10)
  delay.value += Math.ceil(Math.random() * 10 * 3)

  boxAValue.value = Math.random()
  if (boxAValue.value > 1) boxAValue.value = 1
})
</script>

<template>
  <div class="crtline"></div>
</template>

<style scoped>
.crtline {
  content: '';
  position: absolute;
  width: 100%;
  animation:
    crtLine v-bind(lineTimeSeconds) infinite linear,
    flickerLoad 2s infinite;
  animation-delay: v-bind(delaySeconds);
  top: 0;
  box-shadow: 0 0 5px 0.5px rgba(0, 128, 0, v-bind(boxAValue));
}
</style>
