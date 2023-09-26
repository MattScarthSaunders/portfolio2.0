<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { computed, onMounted, ref, watchEffect } from 'vue'

import FrontendHighlightSection from './FrontendHighlightSection.vue'
import FrontendActiveSection from './FrontendActiveSection.vue'

const props = defineProps<{ project: AirtableProject; isActive: string }>()

const isHovered = ref('')
const flickerFrequency = ref(0)
const flickerFrequencySeconds = computed(() => flickerFrequency.value + 's')

const neonColor = ref('rgba(255, 255, 255, 0.1)')
const neonGlowColor = ref('rgba(255, 255, 255, 0.5)')

const handleMouseOver = () => {
  isHovered.value = props.project.Name
}

const handleMouseLeave = () => {
  isHovered.value = ''
}

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5
})

watchEffect(() => {
  if (isHovered.value === props.project.Name || props.isActive === props.project.Name) {
    neonColor.value = 'rgba(255, 255, 255, 1)'
    neonGlowColor.value = 'rgba(255, 255, 255, 1)'
  } else {
    neonColor.value = 'rgba(255, 255, 255, 0.1)'
    neonGlowColor.value = 'rgba(255, 255, 255, 0.5)'
  }
})
</script>

<template>
  <div
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    :class="{
      info: props.project.Name === 'info' && isActive === 'info',
      projectSlider: 'projectSlider',
      showProject: props.isActive === props.project.Name,
      showHighlights: isHovered === props.project.Name
    }"
    @click="$emit('projectSelected', props.project.Name)"
  >
    <h2 class="FEprojectName">{{ props.project.Name }}</h2>
    <FrontendHighlightSection
      :project="project"
      :isActive="isActive"
      :isHovered="isHovered"
      :flickerFrequencySeconds="flickerFrequencySeconds"
      :neonColor="neonColor"
      :neonGlowColor="neonGlowColor"
    ></FrontendHighlightSection>
    <FrontendActiveSection
      :project="project"
      :isActive="isActive"
      :isHovered="isHovered"
      :flickerFrequencySeconds="flickerFrequencySeconds"
      :neonColor="neonColor"
      :neonGlowColor="neonGlowColor"
    ></FrontendActiveSection>
  </div>
</template>

<style scoped>
.projectSlider {
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
  color: black;
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

.projectSlider:hover {
  width: 13vw;
  border-radius: 4%;
  transform: translateY(-20px) skew(15deg);
}

.showProject,
.showProject:hover {
  width: 30vw;
  border-radius: 4%;
  opacity: 1;
  transform: translateY(-20px) skew(15deg);
  padding-right: 1rem;
}

.FEprojectName {
  rotate: 90deg;
  position: absolute;
  bottom: 15vh;
  left: -8.5vw;
  width: 20vw;
  pointer-events: none;
  font-family: 'Tourney';
  font-weight: 100;
  font-size: 2.5rem;
  color: v-bind(neonColor);
  text-shadow:
    0 0 2px v-bind(neonGlowColor),
    0 0 10px v-bind(neonGlowColor),
    0 0 20px v-bind(neonGlowColor),
    0 0 40px v-bind(neonGlowColor);

  transition:
    color 0.5s ease,
    opacity 0.5s ease;
  animation: flickerLoad v-bind(flickerFrequencySeconds) infinite;
}

.info,
.info:hover {
  width: 13vw;
  border-radius: 4%;
  transform: translateY(-20px) skew(15deg);
  padding-left: 1.3rem;
  padding-right: 2rem;
}
</style>
