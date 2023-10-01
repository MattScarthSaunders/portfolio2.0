<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
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
  <section class="descriptionStack">
    <section class="description">
      <p v-if="project.Name !== 'info'" class="'projectData'">
        {{ project.Description }}
      </p>
      <p v-if="project.Name === 'info'" class="'infoData'">
        {{ project.Synopsis }}
      </p>
    </section>
    <div class="stackWrapper">
      <ul class="stack">
        <li v-for="(tech, index) in project.Tech" :key="tech + index + 'd'">{{ tech }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.descriptionStack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 20vw;
  flex-grow: 2;
  gap: 2vh;
}

.description,
.stackWrapper {
  padding: 2rem;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
}

.description {
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white;
}

.stackWrapper {
  padding: 1rem;
  width: 20vw;
  overflow: hidden;
  display: flex;
}
.stack {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white,
    0 0 20px white,
    0 0 40px white;
  background: none;
  gap: 1.25rem;
  animation:
    flickerLoad v-bind(flickerFrequencySeconds) infinite,
    scrollText v-bind(scrollTime) infinite linear;
  height: 100%;
  font-size: 1.25rem;
}
</style>
