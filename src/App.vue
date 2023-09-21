<script setup lang="ts">
import BackendHomeView from './views/BackendHomeView.vue'
import FrontendHomeView from './views/FrontendHomeView.vue'
import { computed, onMounted, ref } from 'vue'

const offset = ref(0)
const screenWidth = ref(0)
const containerWidth = ref(0)
const offsetpx = computed(() => offset.value + 'px')

onMounted(() => {
  screenWidth.value = window.innerWidth
  containerWidth.value = screenWidth.value * 2
  offset.value = (screenWidth.value - containerWidth.value) / 2
})

const moveOneScreenWidth = (direction: string) => {
  if (direction === 'backward') {
    const maxOffset = screenWidth.value - containerWidth.value
    offset.value += screenWidth.value
    if (offset.value > maxOffset) {
      offset.value = maxOffset
    }
  } else if (direction === 'forward') {
    offset.value -= screenWidth.value
    if (offset.value < 0) {
      offset.value = 0
    }
  }
}
</script>

<template>
  <main class="base">
    <div class="view-container">
      <FrontendHomeView />
    </div>
    <div class="view-container">
      <BackendHomeView />
    </div>
    <button class="frontend-trigger" @click="moveOneScreenWidth('forward')">frontend</button>
    <button class="backend-trigger" @click="moveOneScreenWidth('backward')">backend</button>
  </main>
</template>

<style scoped>
.base {
  width: 100vw; /* Adjust as needed */
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
}

.view-container {
  flex: 1;
  display: inline-block;
  width: 100%;
  transform: translateX(v-bind(offsetpx));
  transition: transform 1s ease;
}

.frontend-trigger {
  position: absolute;
  bottom: 0;
  left: 0;
}

.backend-trigger {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
