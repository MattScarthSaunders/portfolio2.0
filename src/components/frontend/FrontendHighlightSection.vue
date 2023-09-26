<script setup lang="ts">
import type { AirtableProject } from '@/types'
import FrontendLinkButtons from './FrontendLinkButtons.vue'

const props = defineProps<{
  isHovered: string
  isActive: string
  project: AirtableProject
  neonColor: string
  neonGlowColor: string
  flickerFrequencySeconds: string
}>()
</script>

<template>
  <section
    :class="{
      highlights: 'highlights',
      hideHighlights: isHovered !== props.project.Name || isActive === props.project.Name,
      showHighlights: isHovered === props.project.Name && isActive !== props.project.Name
    }"
  >
    <p class="Synopsis">{{ props.project.Synopsis }}</p>
    <ul class="techStackMini">
      <li v-for="tech in props.project.Tech">{{ tech }}</li>
    </ul>
    <div v-if="isHovered && !isActive" class="projectLinksMini">
      <FrontendLinkButtons
        :githubLink="props.project.Github"
        :hostedLink="props.project.Hosted"
      ></FrontendLinkButtons>
    </div>
  </section>
</template>

<style scoped>
.projectLinksMini {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.highlights {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 1rem;
  transition: opacity 0.5s ease;
  padding-left: 1rem;
}

.showHighlights {
  width: 9vw;
  opacity: 1;
}

.hideHighlights {
  opacity: 0;
  width: 0;
  height: 0;
  font-size: 0;
}

.hideHighlights > a {
  width: 0;
  height: 0;
  opacity: 0;
}

.techStackMini {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  color: v-bind(neonColor);
  text-shadow:
    0 0 2px v-bind(neonGlowColor),
    0 0 10px v-bind(neonGlowColor),
    0 0 20px v-bind(neonGlowColor),
    0 0 40px v-bind(neonGlowColor);
  animation: flickerLoad v-bind(flickerFrequencySeconds) infinite;
  gap: 0.5rem;
}
</style>
