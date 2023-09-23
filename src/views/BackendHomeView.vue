<script setup lang="ts">
import BackendButton from '@/components/backend/backendButton.vue'
import navDock from '../components/navDock.vue'
import ProjectContainer, { type Project } from '@/components/backend/projectContainer.vue'
import { TypeFlow } from 'typeflow-vue'
import { ref, watchEffect } from 'vue'
import { useNavStore } from '@/stores/nav'
import BackendNavDock from '@/components/backend/backendNavDock.vue'

const store = useNavStore()
const props = defineProps<{ backendChosen: boolean }>()

const buttonPressedId = ref(0)
const isProjectSelected = ref(false)
const navSelected = ref(false)

const portfolioProjects: Project[] = [
  {
    id: 1,
    name: 'BG-Reviews Backend',
    about: 'REST API backend for a boardgame reviews site.',
    aboutFull:
      'This was a project in which I built a REST API backend for a boardgame reviews site in order to later host data for the frontend component.',
    github: 'https://github.com/MattScarthSaunders/boardgame-reviews',
    hosted: 'https://boardgame-reviews.cyclic.app/api',
    img: 'BGBE.png',
    tech: ['Javascript', 'Express.js', 'Node.js', 'PostgreSQL', 'Jest']
  }
]

const date = new Date()
const date2 = new Date()
const date3 = new Date()
date2.setSeconds(date2.getSeconds() + 3)
date3.setSeconds(date3.getSeconds() + 6)

const greeting = `
${date.toLocaleString('en-GB')} [admin] </guest/greeting> Welcome to the backend section of my site!
${date2.toLocaleString(
  'en-GB'
)} [admin] </guest/explanation> If you want to view a particular project, click on one of the buttons at the top...
${date3.toLocaleString('en-GB')} [admin] </guest/signoff> Thanks for stopping by!
`

watchEffect(() => {
  if ((store.aboutSelected || store.cvSelected || store.contactSelected) && store.type === 'be') {
    isProjectSelected.value = false
    navSelected.value = true
  }
})
</script>

<template>
  <section class="backendBase">
    <div class="crt">
      <nav class="backendNav">
        <BackendButton
          v-for="(proj, i) in portfolioProjects"
          v-bind:key="proj.name"
          :name="proj.name"
          :projectIndex="i"
          @projName="
            () => {
              buttonPressedId = i
              isProjectSelected = true
            }
          "
        ></BackendButton>
      </nav>
      <TypeFlow v-if="!isProjectSelected && backendChosen && !navSelected" :char-delay="15">
        <pre class="greeting">{{ greeting }}</pre>
      </TypeFlow>
      <ProjectContainer
        v-if="isProjectSelected"
        :project="portfolioProjects[buttonPressedId]"
        :isProjectSelected="isProjectSelected"
      ></ProjectContainer>
    </div>
    <BackendNavDock></BackendNavDock>
  </section>
</template>

<style>
.greeting {
  color: green;
  font-size: 1.5rem;
}
.backendBase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(6, 17, 1);
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100vw;
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

.backendNav {
  display: flex;
  gap: 1rem;
}
</style>
