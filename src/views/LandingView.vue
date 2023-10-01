<script setup lang="ts">
// import BackendHomeView from './views/BackendHomeView.vue'
import { ref } from 'vue'
import { useControlStore } from '@/stores/appControl'
import DividerSection from '@/components/DividerSection.vue'

const store = useControlStore()

// other css effects
const overlayOpacity = ref(1)
const crtVisibility = ref('block')
</script>

<template>
  <Transition name="main">
    <main v-if="!store.initialLoad && !store.chosen && store.disableLoadError" class="base">
      <div class="view-container overlayFE">
        <router-link class="FrontendTrigger" to="/Frontend" @click="store.chosen = 'Frontend'"
          >Frontend</router-link
        >
      </div>
      <DividerSection class="dividerSlide"></DividerSection>
      <div class="view-container">
        <div class="crt1"></div>
        <div class="overlayBE">
          <div class="usefulwrapper">
            <router-link class="BackendTrigger" to="/Backend" @click="store.chosen = 'Backend'"
              >Backend...</router-link
            >
            <p class="label-be">APIs/Data/Cloud</p>
          </div>
        </div>
      </div>
    </main>
  </Transition>
</template>

<style scoped>
#app {
  position: relative;
  display: flex;
}

.main-enter-active {
  transition: opacity 3s ease-in;
}

.main-leave-to,
.main-enter-from {
  opacity: 0;
}

.main-leave-active {
  transition: opacity 0.25s ease-in;
}

.base {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: black;
}

.view-container {
  height: 100%;
  width: 100%;
  transition: transform 1s ease;
  position: relative;
  overflow: hidden;
}

.overlayBE {
  height: 100%;
  width: 100%;
  opacity: v-bind(overlayOpacity);
  transition: opacity 1s ease;
  background-color: var(--BE-bg-color);
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
}

.overlayFE {
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 60s ease infinite;
  box-shadow: inset 0 -30vh 250px 0 black;
  overflow: hidden;
  display: flex;
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
  animation: flicker 0.15s infinite;
  box-shadow: inset 0 0 10rem black;
  overflow: hidden;
  pointer-events: none;
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
  overflow: hidden;
  pointer-events: none;
}

.FrontendTrigger {
  align-self: flex-end;
  background: none;
  color: white;
  border: none;
  font-size: 5rem;
  font-family: Tourney;
  transition:
    color 0.5s ease,
    opacity 1s ease;
  z-index: 5;
  text-decoration: none;
  margin-left: 5rem;
  margin-bottom: 5rem;
  cursor: pointer;
}

.FrontendTrigger:hover {
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 20px white,
    0 0 200px white;
  transition:
    color 0.5s ease,
    opacity 0.5s ease;
  animation: flickerLoad 10s infinite;
  cursor: pointer;
}

.BackendTrigger {
  background: none;
  color: white;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  transition: opacity 1s ease;
  color: var(--BE-color);
  animation: textShadow 1.6s infinite;
  transition:
    color 0.75s ease,
    opacity 0.5s ease;
  text-decoration: none;
}

.label-be {
  font-size: 1rem;
  top: 20vh;
  left: 25vw;
  z-index: 3;
  animation: textShadow 1.6s infinite;
  color: var(--BE-color);
}
.BackendTrigger:hover {
  color: rgb(30, 255, 0);
  transition:
    color 0.75s ease,
    opacity 0.5s ease;
}

.usefulwrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 3rem;
  margin-top: 3rem;
}
</style>
