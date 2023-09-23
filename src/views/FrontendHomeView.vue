<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref('')

const handleClick = (projectName: string) => {
  if (isActive.value === projectName) {
    isActive.value = ''
  } else {
    isActive.value = projectName
  }
}
</script>

<template>
  <section class="frontendBase">
    <div class="projectCarousel">
      <div
        :class="{
          glassSlider: 'glassSlider',
          showProject: isActive === 'project0' ? 'showProject' : ''
        }"
        @click="handleClick('project0')"
      >
        <h2 class="FEprojectTitle">Project title0</h2>
      </div>
      <div
        :class="{
          glassSlider: 'glassSlider',
          showProject: isActive === 'project1' ? 'showProject' : ''
        }"
        @click="handleClick('project1')"
      >
        <h2 class="FEprojectTitle">Project title1</h2>
      </div>
      <div
        :class="{
          glassSlider: 'glassSlider',
          showProject: isActive === 'project2' ? 'showProject' : ''
        }"
        @click="handleClick('project2')"
      >
        <h2 class="FEprojectTitle">Project title2</h2>
      </div>
      <div
        :class="{
          glassSlider: 'glassSlider',
          showProject: isActive === 'project3' ? 'showProject' : ''
        }"
        @click="handleClick('project3')"
      >
        <h2 class="FEprojectTitle">Project title3</h2>
      </div>
      <div
        :class="{
          glassSlider: 'glassSlider',
          showProject: isActive === 'project4' ? 'showProject' : ''
        }"
        @click="handleClick('project4')"
      >
        <h2 class="FEprojectTitle">Project title4</h2>
      </div>
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
.FEprojectTitle {
  rotate: 90deg;
  position: absolute;
  bottom: 15vh;
  left: -8.5vw;
  width: 20vw;
  pointer-events: none;
}
.glassSlider {
  width: 2vw;
  height: 40vh;
  z-index: 3;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  transform: skew(15deg);
  border-radius: 1%;
  padding: 2rem;
  animation: gradient 60s ease infinite;
  font-size: 2rem;
  text-shadow:
    0.5px 1px 0 rgba(0, 20, 20, 0.5),
    -0.5px -1px 1px rgba(255, 255, 255, 0.289);
  color: transparent;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  font-family: 'Inconsolata';
  position: relative;
  transition:
    width 0.75s ease,
    transform 0.25s ease,
    border-radius 0.25s ease;
}

.glassSlider:hover {
  width: 10vw;
  border-radius: 4%;
  transform: translateY(-20px) skew(15deg);
}

.showProject,
.showProject:hover {
  width: 20vw;
  border-radius: 15%;
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
