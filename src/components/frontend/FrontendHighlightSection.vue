<script setup lang="ts">
import type { AirtableProject } from '@/types'
import FrontendLinkButtons from './FrontendLinkButtons.vue'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  isHovered: string
  isActive: string
  project: AirtableProject
}>()

const flickerFrequency = ref(0)
const flickerFrequencySeconds = computed(() => flickerFrequency.value + 's')

const scrollTime = computed(() => props.project.Tech.length * 2 + 's')

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5
})
</script>

<template>
  <section class="highlights">
    <p class="Synopsis">{{ props.project.Synopsis }}</p>
    <ul class="techStackMini">
      <li v-for="tech in props.project.Tech">{{ tech }}</li>
    </ul>
  </section>
</template>

<style scoped>
.highlights {
  position: absolute;
  top: -3vw;
  left: -15vh;
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* size/spacing */
  padding: 1rem;
  width: 13vw;
  height: 10vh;
  border-radius: 4%;
  /* color */
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  transform: rotate(-90deg) skew(15deg) translateX(4vh);
  overflow: hidden;
}

.techStackMini {
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  justify-content: flex-start;
  list-style: none;
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white,
    0 0 20px white,
    0 0 40px white;
  animation:
    flickerLoad v-bind(flickerFrequencySeconds) infinite,
    scrollText v-bind(scrollTime) infinite linear;
  gap: 0.5rem;
}
</style>
