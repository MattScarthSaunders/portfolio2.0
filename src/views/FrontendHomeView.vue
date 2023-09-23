<script setup lang="ts">
import { ref } from 'vue'
import FrontendProjectContainer from '../components/frontend/FrontendProjectContainer.vue'

const isActive = ref('')

const handleClick = (projectTitle: string) => {
  console.log('in the click', projectTitle)
  if (isActive.value === projectTitle) {
    isActive.value = ''
  } else {
    isActive.value = projectTitle
  }
}
</script>

<template>
  <section class="frontendBase">
    <div class="projectCarousel">
      <FrontendProjectContainer
        :project="{
          title: 'proj1',
          projectDescription: 'This is a beautiful project isnt it just amazing'
        }"
        :isActive="isActive"
        @projectSelected="handleClick"
      ></FrontendProjectContainer>
      <FrontendProjectContainer
        :project="{
          title: 'info',
          projectDescription: 'Congrats you made it this far, click on some shit and get to it'
        }"
        :isActive="isActive"
        @projectSelected="handleClick"
      ></FrontendProjectContainer>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arizonia&family=Cormorant+Unicase:wght@300&family=Faustina:wght@300&family=Jacques+Francois+Shadow&family=Montserrat:wght@100;300;500;800&family=Raleway:wght@200;800&family=Tourney&display=swap');

.projectCarousel {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.frontendBase {
  width: 100vw;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 60s ease infinite;
  height: 100vh;
  box-shadow: inset 0 -30vh 250px 0 black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
