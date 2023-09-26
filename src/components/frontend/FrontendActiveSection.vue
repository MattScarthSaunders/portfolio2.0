<script setup lang="ts">
import FrontendLinkImage from './FrontendLinkImage.vue'
import FrontendLinkButtons from './FrontendLinkButtons.vue'
import type { AirtableProject } from '@/types'

const props = defineProps<{
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
      fullProject: 'fullProject',
      hideProjectData: props.isActive !== props.project.Name,
      showProjectData: props.isActive === props.project.Name
    }"
  >
    <div class="imgDesc">
      <FrontendLinkImage
        v-if="props.project?.Assets"
        :imgSrc="props.project?.Assets![0].url"
        :githubLink="props.project.Github"
        :hostedLink="props.project.Hosted"
      ></FrontendLinkImage>
      <p
        v-if="props.project.Name !== 'info'"
        :class="{
          projectData: 'projectData'
        }"
      >
        {{ props.project.Description }}
      </p>
      <p
        v-if="props.project.Name === 'info'"
        :class="{
          infoData: 'infoData'
        }"
      >
        {{ props.project.Synopsis }}
      </p>
    </div>
    <div class="detailWrapper">
      <ul class="techStack">
        <li v-for="tech in props.project.Tech">{{ tech }}</li>
      </ul>
      <div class="projectLinks">
        <FrontendLinkButtons
          :githubLink="props.project.Github"
          :hostedLink="props.project.Hosted"
        ></FrontendLinkButtons>
      </div>
    </div>
  </section>
  <section></section>
</template>

<style scoped>
.projectData {
  max-width: 50%;
  max-height: 70%;
}
.showProjectData > a {
  pointer-events: all;
}
.hideProjectData > a {
  pointer-events: none;
}

.projectLinks {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
}

.techStack {
  align-self: flex-end;
  display: flex;
  max-width: 50%;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: '|';
  color: v-bind(neonColor);
  text-shadow:
    0 0 2px v-bind(neonGlowColor),
    0 0 10px v-bind(neonGlowColor),
    0 0 20px v-bind(neonGlowColor),
    0 0 40px v-bind(neonGlowColor);
  animation: flickerLoad v-bind(flickerFrequencySeconds) infinite;
  padding-right: 0;
}

.techStack > li {
  padding: 0 0.5rem;
}

.detailWrapper {
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  gap: 1rem;
  height: 30%;
}

.fullProject {
  font-size: 1rem;
  max-height: 100%;
  width: 26.5vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 1.5rem;
  padding-right: 0.75rem;
}

.imgDesc {
  display: flex;
  height: 70%;
  gap: 1rem;
}

.hideProjectData {
  opacity: 0;
  pointer-events: none;
}

.showProjectData {
  opacity: 1;
  height: 100%;
}

.infoData {
  width: 8vw;
}
</style>
