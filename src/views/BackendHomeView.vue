<script setup lang="ts">
import BackendButton from '@/components/Backend/BackendButton.vue'
import BackendProjectContainer from '@/components/Backend/BackendProjectContainer.vue'
import { TypeFlow } from 'typeflow-vue'
import { onMounted, ref, watchEffect } from 'vue'
import { useControlStore } from '@/stores/appControl'
import BackendNavDock from '@/components/Backend/BackendNavDock.vue'

const controlStore = useControlStore()

const buttonPressedId = ref(0)
const isProjectSelected = ref(false)

const date = new Date()
const date2 = new Date()
const date3 = new Date()
date2.setSeconds(date2.getSeconds() + 3)
date3.setSeconds(date3.getSeconds() + 6)

const greeting = `
${date.toLocaleString('en-GB')} [admin] </guest/greeting> Welcome to the Backend section of my site!
${date2.toLocaleString(
  'en-GB'
)} [admin] </guest/explanation> If you want to view a particular project, click on one of the buttons at the top...
${date3.toLocaleString('en-GB')} [admin] </guest/signoff> Thanks for stopping by!
`

onMounted(() => {
  if (controlStore.chosen !== 'Backend') controlStore.chosen = 'Backend'
})
</script>

<template>
  <main class="BackendBase">
    <div class="crt">
      <nav class="BackendNav">
        <TypeFlow v-if="!controlStore.BEProjects"><p>LOADING...</p></TypeFlow>
        <BackendButton
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
        ></BackendButton>
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
    <BackendNavDock></BackendNavDock>
  </main>
</template>

<style>
.greeting {
  color: var(--BE-color);
  font-size: 1.5rem;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;
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
  gap: 1rem;
}
</style>
