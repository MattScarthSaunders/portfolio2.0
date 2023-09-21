<script setup lang="ts">
import BackendButton from '@/components/backendButton.vue'
import ProjectContainer, { type Project } from '@/components/projectContainer.vue'
import { TypeFlow } from 'typeflow-vue'
import { ref } from 'vue'

const buttonPressedId = ref(0)
const isProjectSelected = ref(false)

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
      <ProjectContainer
        v-if="!isProjectSelected"
        :isProjectSelected="isProjectSelected"
      ></ProjectContainer>
      <ProjectContainer
        v-else
        :project="portfolioProjects[buttonPressedId]"
        :isProjectSelected="isProjectSelected"
      ></ProjectContainer>
    </div>
  </section>
</template>

<style>
.backendBase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  background: rgb(6, 17, 1);
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100vw;
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
.crt {
  animation: textShadow 10.6s infinite;
}

.backendNav {
  display: flex;
  gap: 1rem;
}
</style>
