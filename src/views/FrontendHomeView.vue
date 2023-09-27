<script setup lang="ts">
import type { AirtableProject } from '@/types'
import FrontendProjectName from '@/components/frontend/FrontendProjectName.vue'

const props = defineProps<{ projects: AirtableProject[] }>()
</script>

<template>
  <section class="frontendBase">
    <div class="projectCarousel">
      <FrontendProjectName
        v-for="(project, index) in projects"
        :Name="project.Name"
        :project="project"
        :index="index"
        :length="projects.length"
      ></FrontendProjectName>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arizonia&family=Cormorant+Unicase:wght@300&family=Faustina:wght@300&family=Jacques+Francois+Shadow&family=Montserrat:wght@100;300;500;800&family=Raleway:wght@200;800&family=Tourney&display=swap');

.frontendBase {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 60s ease infinite;
  box-shadow: inset 0 -30vh 250px 0 black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
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
</style>
