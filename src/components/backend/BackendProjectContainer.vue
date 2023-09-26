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
  <CRTLineWrapper
    class="dataEngDiagram"
    v-if="
      (props.project?.Type === 'BackendDataEng' || props.project?.Type === 'BackendInfra') &&
      props.project?.Assets
    "
    :lineNum="5"
  >
    <img class="dataEngImg" :src="props.project?.Assets![0].url"
  /></CRTLineWrapper>
</template>

<style scoped>
.dataEngImg {
  height: 60vh;
}
.dataEngDiagram {
  border: var(--BE-bg-border);
  box-shadow: var(--BE-bg-border-shadow);
  justify-self: center;
  align-self: center;
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
  color: var(--BE-color);
  font-size: 1.25rem;
  width: 100%;
  height: 2.5rem;
}
.projectInfoWrapper {
  display: flex;
  margin-top: 1rem;
}

.stack {
  color: var(--BE-color);
  font-size: 1.25rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  height: 1.25rem;
}
</style>
