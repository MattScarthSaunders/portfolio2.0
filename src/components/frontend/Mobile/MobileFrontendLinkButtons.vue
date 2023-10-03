<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { handleDownloadFile } from '@/utils/api'
import { ref } from 'vue'

const props = defineProps<{ project: AirtableProject }>()

const isDownloading = ref(false)
const isErrored = ref(false)

const handleClick = async () => {
  isErrored.value = false
  isDownloading.value = true
  const isDownloaded = await handleDownloadFile(props.project.Downloadables![0].url)

  isDownloaded ? (isErrored.value = false) : (isErrored.value = true)
}
</script>

<template>
  <div class="projectLinks">
    <a
      @click.stop
      class="projectLink"
      :href="props.project.Github"
      target="_blank"
      rel="noopener noreferrer"
      v-if="props.project.Github"
      >Github</a
    >
    <a
      @click.stop
      class="projectLink"
      :href="props.project.Hosted"
      target="_blank"
      rel="noopener noreferrer"
      v-if="props.project.Hosted"
      >Hosted</a
    >
    <a v-if="props.project.Downloadables?.length" @click.stop="handleClick" class="projectLink"
      >Download</a
    >
    <div v-if="isDownloading">Fetching download...</div>
  </div>
</template>

<style scoped>
.projectLinks {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-left: 10vw;
  transform: skew(8deg);
}
.projectLink {
  text-decoration: none;
  box-shadow:
    inset 0px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -6px 6px 0px 1px rgba(0, 0, 0, 0.3),
    -12px 12px 0px 1px rgba(0, 0, 0, 0.3);
  color: white;
  width: max-content;
  padding: 0.5rem;
  border-radius: 5%;
}

.projectLink:hover {
  box-shadow:
    inset 0 0 2px 1px white,
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(79, 79, 79, 0.3),
    -6px 6px 0px 1px rgba(66, 66, 66, 0.3),
    -12px 12px 0px 1px rgba(53, 53, 53, 0.3);

  text-shadow:
    0 0 2px white,
    0 0 10px white;
}

.projectLink:active {
  box-shadow:
    inset 0 0 2px 1px white,
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(79, 79, 79, 0.3),
    -4px 4px 0px 1px rgba(66, 66, 66, 0.3),
    -6px 6px 15px rgba(162, 162, 162, 0.3);
  transform: translateX(-0.5rem) translateY(0.5rem);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  animation: none;
  text-shadow:
    0 0 2px white,
    0 0 10px white;
}
</style>
