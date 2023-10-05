<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'
import { onMounted, ref } from 'vue'
import { useControlStore } from '@/stores/appControl'
import BackendProjectContainer from '@/components/Backend/Mobile/MobileBackendProjectContainer.vue'
import MobileBackendBurgerMenu from '@/components/Backend/Mobile/MobileBackendBurgerMenu.vue'
import MobileBackendButton from '@/components/Backend/Mobile/MobileBackendButton.vue'

const controlStore = useControlStore()

const buttonPressedId = ref(0)
const isProjectSelected = ref(false)

const date = new Date()
const date2 = new Date()
const date3 = new Date()
date2.setSeconds(date2.getSeconds() + 3)
date3.setSeconds(date3.getSeconds() + 6)

const greeting = `
${date.toLocaleDateString(
  'en-GB'
)} [admin] </guest/greeting>\nWelcome to the Backend section of my site!\n
${date2.toLocaleDateString(
  'en-GB'
)} [admin] </guest/explanation>\nIf you want to view a particular project, click on one in the drawer below...\n
${date3.toLocaleDateString('en-GB')} [admin] </guest/signoff>\nThanks for stopping by!
`

onMounted(() => {
  if (controlStore.chosen !== 'Backend') controlStore.chosen = 'Backend'
})
</script>

<template>
  <main class="BackendBase">
    <div class="crt">
      <p class="swipe">&lt; swipe &gt;</p>
      <nav class="BackendNav">
        <TypeFlow v-if="!controlStore.BEProjects"><p>LOADING...</p></TypeFlow>
        <MobileBackendButton
          v-for="(proj, i) in controlStore.BEProjects"
          v-bind:key="proj.Name"
          :name="proj.Name"
          :projectIndex="i"
          @projName="
            () => {
              buttonPressedId = i
              isProjectSelected = true
            }
          "
          :height="'10vh'"
          :width="'12vh'"
        ></MobileBackendButton>
      </nav>
      <TypeFlow v-if="!isProjectSelected && controlStore.chosen === 'Backend'" :char-delay="15">
        <pre class="greeting">{{ greeting }}</pre>
      </TypeFlow>
      <BackendProjectContainer
        v-if="isProjectSelected"
        :project="controlStore.BEProjects[buttonPressedId]"
        :isProjectSelected="isProjectSelected"
      ></BackendProjectContainer>
    </div>
    <MobileBackendBurgerMenu></MobileBackendBurgerMenu>
  </main>
</template>

<style scoped>
.greeting {
  color: var(--BE-color);
  font-size: 1rem;
  width: 100vw;
  height: 10vw;
  position: absolute;
  text-wrap: wrap;
  padding-right: 5vh;
}

.BackendBase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--BE-bg-color);
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  animation: fade-in 1s ease;
}

.crt {
  animation: textShadow 10.6s infinite;
  width: 100%;
  height: 100%;
  padding: 4vh 3vh;
}

.crt::after {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
  box-shadow: inset 0 0 10rem black;
}
.crt::before {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size:
    100% 2px,
    3px 100%;
  pointer-events: none;
}

.BackendNav {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 88vw;
  height: 20vh;
  position: absolute;
  bottom: 6vh;
  overflow: scroll;
}

.swipe {
  position: absolute;
  font-family: 'Terminal';
  bottom: 25vh;
  font-size: 1.5rem;
  color: green;
  animation: fade-in 10s ease reverse;
  opacity: 0;
  width: 85vw;
  text-align: center;
}
</style>
