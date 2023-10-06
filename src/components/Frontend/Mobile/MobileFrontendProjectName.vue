<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { computed, onMounted, ref } from 'vue'
import { useFEProjStore } from '@/stores/frontendProjects'

const props = defineProps<{
  Name: string
  project: AirtableProject
  index: number
  length: number
}>()

const store = useFEProjStore()

const flickerFrequency = ref(0)
const flickerFrequencySeconds = computed(() => flickerFrequency.value + 's')

const handleClick = (name: string) => {
  if (store.isActive === name) {
    store.setActive('')
    store.setSelectedProject(null)
  } else {
    store.isActive = name
    store.setSelectedProject(props.project)
  }
}

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5
})
</script>

<template>
  <button
    v-if="props.project"
    @click="handleClick(Name)"
    :class="{
      FEprojectName: true,
      isActive: store.isActive === Name
    }"
  >
    {{ props.Name }}
  </button>
</template>

<style scoped>
.FEprojectName {
  -webkit-tap-highlight-color: transparent;
  background: none;
  border: none;
  text-align: left;
  margin: 0.5rem 0;
  /* font */
  font-family: 'Tourney';
  font-weight: 100;
  font-size: 2.5rem;
  height: 2.5rem;
  width: 80vw;
  /* color */
  color: rgba(255, 255, 255, 0.1);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.5),
    0 0 40px rgba(255, 255, 255, 0.5);
  /* animation */
  transition:
    color 0.5s ease,
    opacity 0.5s ease,
    transform 0.5s ease;
  animation: flickerLoad v-bind(flickerFrequencySeconds) infinite;
  cursor: pointer;
}

.FEprojectName:hover {
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 1),
    0 0 40px rgba(255, 255, 255, 1);
}

.isActive,
.isActive:hover {
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 1),
    0 0 40px rgba(255, 255, 255, 1);
}
</style>
