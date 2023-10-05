<script setup lang="ts">
import type { AirtableProject } from '@/types'
import FrontendProjectName from '@/components/Frontend/FrontendProjectName.vue'
import FrontendActiveSection from '@/components/Frontend/FrontendActiveSection.vue'
import { useFEProjStore } from '@/stores/frontendProjects'
import FrontendBurgerMenu from '@/components/Frontend/FrontendBurgerMenu.vue'

defineProps<{ projects: AirtableProject[]; FrontendChosen: boolean }>()
const store = useFEProjStore()

const handleClick = (name: string) => {
  if (store.isActive === name) {
    store.setActive('')
  } else {
    store.isActive = name
  }
}
</script>

<template>
  <main class="FrontendBase">
    <div class="activeCarousel">
      <FrontendActiveSection
        v-for="(project, index) in projects"
        :key="project.Name + index"
        @click="handleClick('')"
        :project="project"
        :isActive="store.isActive"
      ></FrontendActiveSection>
    </div>
    <div class="projectCarousel">
      <FrontendProjectName
        v-for="(project, index) in projects"
        :key="project.Name + index + 'n'"
        :Name="project.Name"
        :project="project"
        :index="index"
        :length="projects.length"
      ></FrontendProjectName>
    </div>
    <FrontendBurgerMenu></FrontendBurgerMenu>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tourney&display=swap');

.FrontendBase {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation:
    gradient 60s ease infinite,
    fade-in 1s ease;
  box-shadow: inset 0 -30vh 250px 0 black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.activeCarousel {
  position: relative;
  height: 60vh;
  width: 100vw;
}

.projectCarousel {
  rotate: 90deg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 40vh;
  width: 40vh;
  gap: 2vw;
  padding-bottom: 5rem;
}

@media screen and (max-width: 1550px) {
  .FrontendBase {
    box-shadow: inset 0 -10vh 150px 10px black;
  }
  .projectCarousel {
    padding-right: 45vh;
  }
}
</style>
