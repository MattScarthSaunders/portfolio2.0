<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { computed, onMounted, ref, watchEffect } from 'vue'

import FrontendHighlightSection from './FrontendHighlightSection.vue'
import FrontendActiveSection from './FrontendActiveSection.vue'
import FrontendProjectName from './FrontendProjectName.vue'

const props = defineProps<{ project: AirtableProject; isActive: string; isHovered: string }>()

const flickerFrequency = ref(0)
const flickerFrequencySeconds = computed(() => flickerFrequency.value + 's')

// const handleMouseOver = () => {
//   isHovered.value = props.project.Name
// }

// const handleMouseLeave = () => {
//   isHovered.value = ''
// }

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5
})
</script>

<template>
  <div
    :class="{
      info: props.project.Name === 'info' && isActive === 'info',
      projectSlider: 'projectSlider',
      showProject: props.isActive === props.project.Name,
      showHighlights: isHovered === props.project.Name && isActive !== props.project.Name
    }"
    @click="$emit('projectSelected', props.project.Name)"
  ></div>
</template>

<style scoped>
.projectSlider {
  /* size+space */
  width: 2vw;
  max-height: 50vh;
  z-index: 3;
  transform: skew(15deg);
  border-radius: 1%;
  padding: 3rem;
  overflow: hidden;
  /* animation */
  animation: gradient 60s ease infinite;
  transition:
    width 0.75s ease,
    transform 0.55s ease,
    border-radius 0.25s ease;
  /* font */
  font-size: 2rem;
  font-family: 'Inconsolata';
  /* color */
  color: black;
  opacity: 1;
}

.projectSlider:hover {
  width: 13vw;
  border-radius: 4%;
  transform: translateY(-20px) skew(15deg);
}

.showProject,
.showProject:hover {
  width: 40vw;
  border-radius: 4%;
  transform: translateY(-22rem) skew(15deg);
  padding-right: 1rem;
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
