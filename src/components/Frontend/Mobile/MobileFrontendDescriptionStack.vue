<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { onMounted, ref } from 'vue'
defineProps<{
  project: AirtableProject
}>()
const flickerFrequency = ref(0)

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5
})
</script>

<template>
  <section class="description">
    <p v-if="project.Name !== 'info'" class="'projectData'">
      {{ project.Description }}
    </p>
    <p v-if="project.Name === 'info'" class="'infoData'">
      {{ project.Synopsis }}
    </p>
  </section>
</template>

<style scoped>
.description {
  padding: 1rem;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  transform: skew(8deg);
  margin-left: 1vw;
  width: 100vw;
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white;
  padding-left: 8vw;
  padding-right: 5vw;
}
</style>
