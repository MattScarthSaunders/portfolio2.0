<script setup lang="ts">
import BackendButton from '@/components/backendButton.vue'
import ProjectContainer, { type ProjectProps } from '@/components/projectContainer.vue'
import { TypeFlow } from 'typeflow-vue'
import { ref } from 'vue'

const buttonPressedId = ref(0)
const isProjectSelected = ref(false)

const portfolioProjects: { [key: string]: any }[] = [
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
  <main class="crt">
    <section class="description">
      <TypeFlow :charDelay="15"
        ><p class="description">
          To inspect an api, select one from the list below. You can either use the built-in
          explorer to interact with it, or use the link provided to visit the hosted versions.
        </p></TypeFlow
      >
    </section>
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
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5rem 20rem;
  background: rgb(6, 17, 1);
  height: 100%;
  overflow: hidden;
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
  box-shadow: inset 0 0 10rem 5rem black;
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
  animation: textShadow 1.6s infinite;
}

.backendNav {
  display: flex;
  gap: 1rem;
}

.description {
  font-size: 1.5rem;
  height: 5rem;
  color: green;
}
</style>
