<script setup lang="ts">
import BackendHomeView from './views/BackendHomeView.vue'
import FrontendHomeView from './views/FrontendHomeView.vue'
import backendFEbutton from './components/backend/backendFEbutton.vue'
import { computed, onMounted, ref } from 'vue'
import FrontendBEbutton from './components/frontend/frontendBEbutton.vue'
import { TypeFlow } from 'typeflow-vue'

const offset = ref(0)
const screenWidth = ref(0)
const containerWidth = ref(0)
const offsetpx = computed(() => offset.value + 'px')
const feFeTrig = ref(1)
const feBeTrig = ref(0)
const beFeTrig = ref(0)
const beBeTrig = ref(1)
const overlayOpacity = ref(1)
const crtVisibility = ref('block')
const backendChosen = ref(false)

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
      <FrontendBEbutton
        :feBeTrig="feBeTrig"
        @feBEtriggered="
          () => {
            moveOneScreenWidth('backward')
            feBeTrig = 0
            beFeTrig = 1
          }
        "
      ></FrontendBEbutton>
    </div>
    <div class="view-container">
      <div class="crt1"></div>
      <div class="overlayBE"></div>
      <BackendHomeView :backendChosen="backendChosen" />
      <TypeFlow
        ><button
          class="backend-BE-trigger"
          @click="
            () => {
              moveOneScreenWidth('backward')
              feFeTrig = 0
              beBeTrig = 0
              beFeTrig = 1
              overlayOpacity = 0
              crtVisibility = 'none'
              backendChosen = true
            }
          "
        >
          backend...
        </button>
      </TypeFlow>
      <TypeFlow>
        <p class="label-be">APIs/Data/Cloud</p>
      </TypeFlow>
      <backendFEbutton
        @beFEtriggered="
          () => {
            moveOneScreenWidth('forward')
            beFeTrig = 0
            feBeTrig = 1
          }
        "
        :beFeTrig="beFeTrig"
      ></backendFEbutton>
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
  background-color: rgb(7, 14, 5);
  z-index: 2;
}

.crt1::after {
  content: ' ';
  display: v-bind(crtVisibility);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 4;
  pointer-events: none;
  animation: flicker 0.15s infinite;
  box-shadow: inset 0 0 10rem black;
}
.crt1::before {
  content: ' ';
  display: v-bind(crtVisibility);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 4;
  background-size:
    100% 2px,
    3px 100%;
  pointer-events: none;
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

.backend-BE-trigger {
  position: absolute;
  opacity: v-bind(beBeTrig);
  top: 10%;
  left: 28%;
  background: none;
  color: white;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  transition: opacity 1s ease;
  z-index: 3;
  color: green;
  animation: textShadow 1.6s infinite;
}

.label-be {
  font-size: 1rem;
  opacity: v-bind(beBeTrig);
  position: absolute;
  top: 18%;
  left: 28%;
  z-index: 3;
  animation: textShadow 1.6s infinite;
  color: green;
}
</style>
