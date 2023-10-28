<script setup lang="ts">
import type { AirtableProject } from '@/types'
import MobileFrontendProjectName from '@/components/Frontend/Mobile/MobileFrontendProjectName.vue'
import MobileFrontendActiveSection from '@/components/Frontend/Mobile/MobileFrontendActiveSection.vue'
import { useFEProjStore } from '@/stores/frontendProjects'
import MobileFrontendBurgerMenu from '@/components/Frontend/Mobile/MobileFrontendBurgerMenu.vue'
import ImageModal from '@/components/imageModal.vue'

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
    <MobileFrontendBurgerMenu></MobileFrontendBurgerMenu>
    <div class="activeCarousel">
      <MobileFrontendActiveSection
        v-for="(project, index) in projects"
        :key="project.Name + index"
        @click="handleClick('')"
        :project="project"
        :isActive="store.isActive"
      ></MobileFrontendActiveSection>
    </div>
    <div class="projectCarousel">
      <MobileFrontendProjectName
        v-for="(project, index) in projects"
        :key="project.Name + index + 'n'"
        :Name="project.Name"
        :project="project"
        :index="index"
        :length="projects.length"
      ></MobileFrontendProjectName>
    </div>
    <ImageModal></ImageModal>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tourney&display=swap');

.FrontendBase {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 200%;
  animation: fade-in 1s ease;
  box-shadow: inset 0 -10vh 150px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.activeCarousel {
  justify-self: flex-start;
  margin-top: 5vh;
  height: 60vh;
  width: 100%;
}

.projectCarousel {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  height: 20vh;
  width: 100vw;
  overflow-y: scroll;
  margin-bottom: 10vh;
  border-radius: 5%;
  box-shadow:
    inset 0 0 10px white,
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
}
</style>
