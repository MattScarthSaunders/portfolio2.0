<script setup lang="ts">
import { ref } from 'vue'

export interface FrontendProjectProps {
  projectDescription: string
  title: string
}

const props = defineProps<{ project: FrontendProjectProps; isActive: string }>()

const isHovered = ref('')

const handleMouseOver = () => {
  isHovered.value = props.project.title
}

const handleMouseLeave = () => {
  isHovered.value = ''
}
</script>

<template>
  <div
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    :class="{
      glassSlider: 'glassSlider',
      showProject: props.isActive === props.project.title,
      showHighlights: isHovered === props.project.title
    }"
    @click="$emit('projectSelected', props.project.title)"
  >
    <h2 class="FEprojectTitle">{{ props.project.title }}</h2>
    <section
      :class="{
        highlights: 'highlights',
        hideHighlights: isHovered !== props.project.title || isActive === props.project.title,
        showHighlights: isHovered === props.project.title
      }"
    >
      <p>some useful succint info about the project</p>
      <ul>
        <li>tech</li>
        <li>stack</li>
        <li>list</li>
      </ul>
    </section>
    <p
      :class="{
        projectData: 'projectData',
        hideProjectData: props.isActive !== props.project.title || isActive === props.project.title,
        showProjectData: props.isActive === props.project.title
      }"
    >
      {{ props.project.projectDescription }}
    </p>
  </div>
</template>

<style scoped>
.highlights {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  gap: 1rem;
  transition: opacity 0.5s ease;
}

.showHighlights {
  opacity: 1;
}

.hideHighlights {
  opacity: 0;
  width: 0;
  height: 0;
  font-size: 0;
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
  padding: 3rem;
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
  opacity: 1;
  transition:
    width 0.75s ease,
    transform 0.25s ease,
    border-radius 0.25s ease;
  overflow: hidden;
}

.glassSlider:hover {
  width: 10vw;
  border-radius: 4%;
  transform: translateY(-20px) skew(15deg);
}

.showProject,
.showProject:hover {
  width: 20vw;
  border-radius: 4%;
  opacity: 1;
  transform: translateY(-20px) skew(15deg);
}

.hideProjectData {
  opacity: 0;
  transition: opacity 0.75s ease;
}

.showProjectData {
  opacity: 1;
  transition: opacity 0.75s ease;
}

.FEprojectTitle {
  rotate: 90deg;
  position: absolute;
  bottom: 15vh;
  left: -8.5vw;
  width: 20vw;
  pointer-events: none;
}
</style>
