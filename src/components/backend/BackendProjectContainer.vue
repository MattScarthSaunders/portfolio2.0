<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'

import BackendLink from './BackendLink.vue'
import type { AirtableProject } from '@/types'
import BackendAPITool from './BackendAPITool.vue'
import CRTLineWrapper from './CRTLineWrapper.vue'

const props = defineProps<{
  project?: AirtableProject
  isProjectSelected: boolean
}>()
</script>

<template>
  <section class="projectInfoWrapper" v-if="isProjectSelected">
    <section class="projectInfo">
      <TypeFlow :char-delay="10" class="projectDescription"
        ><p>[api] &lt;/project/description&#62; {{ props.project?.Description }}</p></TypeFlow
      >
      <TypeFlow :char-delay="10"
        ><p class="stack">
          [api] &lt;/project/stack&#62; {{ props.project ? props.project.Tech.join(' | ') : '' }}
        </p></TypeFlow
      >
      <div class="linkWrapper">
        <BackendLink v-if="props.project?.Hosted" :link="props.project ? props.project.Hosted : ''"
          >Hosted</BackendLink
        >
        <BackendLink v-if="props.project?.Github" :link="props.project ? props.project.Github : ''"
          >Github</BackendLink
        >
      </div>
    </section>
  </section>
  <BackendAPITool
    v-if="props.project?.Type === 'BackendAPI'"
    :isProjectSelected="isProjectSelected"
    :project="project!"
  ></BackendAPITool>
  <CRTLineWrapper v-if="props.project?.Type === 'BackendDataEng'" :lineNum="5">
    <img class="dataEngDiagram" :src="props.project?.Assets![0].url"
  /></CRTLineWrapper>
</template>

<style scoped>
.dataEngDiagram {
  border: var(--BE-bg-border);
  box-shadow: var(--BE-bg-border-shadow);
  justify-self: center;
  align-self: center;
  height: 60vh;
}

.linkWrapper {
  display: flex;
  gap: 1rem;
  height: 2rem;
}
.projectInfo {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
}
.projectDescription {
  color: green;
  font-size: 1.25rem;
  width: 100%;
  height: 2.5rem;
}
.projectInfoWrapper {
  display: flex;
  margin-top: 1rem;
}

.stack {
  color: green;
  font-size: 1.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  height: 1.25rem;
}
</style>
