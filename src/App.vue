<script setup lang="ts">
import BackendHomeView from './views/BackendHomeView.vue'
import FrontendHomeView from './views/FrontendHomeView.vue'
import { computed, onMounted, ref } from 'vue'

const offset = ref(0)
const screenWidth = ref(0)
const containerWidth = ref(0)
const offsetpx = computed(() => offset.value + 'px')
const feFeTrig = ref(1)
const feBeTrig = ref(0)
const beFeTrig = ref(0)
const beBeTrig = ref(1)
const overlayOpacity = ref(1)

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
      <div class="overlayFE"></div>
      <FrontendHomeView />
      <button
        class="frontend-FE-trigger"
        @click="
          () => {
            moveOneScreenWidth('forward')
            feFeTrig = 0
            beBeTrig = 0
            feBeTrig = 1
            overlayOpacity = 0
          }
        "
      >
        frontend
      </button>
      <button
        class="frontend-BE-trigger"
        @click="
          () => {
            moveOneScreenWidth('backward')
            feBeTrig = 0
            beFeTrig = 1
          }
        "
      >
        backend
      </button>
    </div>
    <div class="view-container">
      <div class="overlayBE"></div>
      <BackendHomeView />
      <button
        class="backend-BE-trigger"
        @click="
          () => {
            moveOneScreenWidth('backward')
            feFeTrig = 0
            beBeTrig = 0
            beFeTrig = 1
            overlayOpacity = 0
          }
        "
      >
        backend
      </button>
      <button
        class="backend-FE-trigger"
        @click="
          () => {
            moveOneScreenWidth('forward')
            beFeTrig = 0
            feBeTrig = 1
          }
        "
      >
        <span class="a1">&lt;</span><span class="a2">&lt;</span><span class="a3">&lt;</span
        ><span class="f">f</span><span class="r">r</span><span class="o">o</span
        ><span class="n">n</span><span class="t">t</span><span class="e">e</span
        ><span class="n2">n</span><span class="d">d</span>
      </button>
    </div>
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
  position: relative;
}

.overlayFE,
.overlayBE {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.557);
  pointer-events: none;
  opacity: v-bind(overlayOpacity);
  transition: opacity 1s ease;
}

.overlayBE {
  z-index: 2;
}

.frontend-FE-trigger {
  position: absolute;
  opacity: v-bind(feFeTrig);
  bottom: 10%;
  right: 30%;
  background: none;
  color: white;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  transition: opacity 1s ease;
}
.frontend-BE-trigger {
  position: absolute;
  top: 10%;
  right: 5%;
  opacity: v-bind(feBeTrig);
}

@font-face {
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/terminal_copy.ttf);
  font-family: 'Terminal';
}
.backend-FE-trigger {
  position: absolute;
  bottom: 3%;
  left: 2%;
  opacity: v-bind(beFeTrig);
  background: none;
  border: none;
  color: -webkit-linear-gradient(green, pink);
  transition: opacity 2s ease;
  transition-delay: 1s;
}

@keyframes blinking {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.backend-FE-trigger > span {
  font-size: 2rem;
  font-family: 'Terminal';
  color: green;
  cursor: pointer;
  opacity: var(beFeTrig);
}

.backend-FE-trigger:hover > span {
  animation: blinking 1s infinite;
  color: white;
  transition: color 1s ease;
}
.backend-FE-trigger:hover > .a1 {
  color: teal;
  animation-delay: 0.1s;
  transition-delay: 0.1s;
}

.backend-FE-trigger:hover > .a2 {
  color: aqua;
  animation-delay: 0.2s;
  transition-delay: 0.2s;
}
.backend-FE-trigger:hover > .a3 {
  color: white;
  transition-delay: 0.3s;
  animation-delay: 0.3s;
}
.backend-FE-trigger:hover > .f {
  color: white;
  transition-delay: 0.4s;
  animation-delay: 0.4s;
}
.backend-FE-trigger:hover > .r {
  color: rgb(0, 255, 249);
  transition-delay: 0.5s;
  animation-delay: 0.5s;
}
.backend-FE-trigger:hover > .o {
  color: rgb(0, 184, 255);
  transition-delay: 0.6s;
  animation-delay: 0.6s;
}
.backend-FE-trigger:hover > .n {
  color: rgb(73, 0, 255);
  transition-delay: 0.7s;
  animation-delay: 0.7s;
}
.backend-FE-trigger:hover > .t {
  color: rgb(150, 0, 255);
  transition-delay: 0.8s;
  animation-delay: 0.8s;
}
.backend-FE-trigger:hover > .e {
  color: rgb(255, 0, 193);
  transition-delay: 0.9s;
  animation-delay: 0.9s;
}
.backend-FE-trigger:hover > .n2 {
  color: rgb(251, 184, 248);
  transition-delay: 1s;
  animation-delay: 1s;
}
.backend-FE-trigger:hover > .d {
  color: white;
  transition-delay: 1.1s;
  animation-delay: 1.1s;
}
.backend-BE-trigger {
  position: absolute;
  opacity: v-bind(beBeTrig);
  top: 10%;
  left: 30%;
  background: none;
  color: white;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  transition: opacity 1s ease;
  z-index: 3;
}
</style>
