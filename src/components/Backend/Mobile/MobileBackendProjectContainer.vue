<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'

import BackendLink from '../BackendLink.vue'
import type { AirtableProject } from '@/types'
import MobileBackendAPITool from './MobileBackendAPITool.vue'
import CRTLineWrapper from '../CRTLineWrapper.vue'
import { calculateAspectRatioUnitAgnostic } from '@/utils/calcs'
import { onMounted, ref, watchEffect } from 'vue'

const props = defineProps<{
  project?: AirtableProject
  isProjectSelected: boolean
}>()

const width = ref('0vh')
const height = ref('0vh')

const unit = ref('vw')

const descHeight = ref('10vh')
const stackHeight = ref('1.25rem')

watchEffect(() => {
  if (props.project?.Type === 'BackendDataEng' || props.project?.Type === 'BackendInfra') {
    descHeight.value = '18vh'
    stackHeight.value = '2rem'
  } else {
    descHeight.value = '10vh'
    stackHeight.value = '1.25rem'
  }
})

onMounted(() => {
  if (props.project?.Assets![0].width && props.project?.Assets![0].height) {
    const { newWidth, newHeight } = calculateAspectRatioUnitAgnostic(
      props.project?.Assets[0].width,
      props.project?.Assets[0].height,
      90,
      60
    )

    width.value = newWidth + unit.value
    height.value = newHeight + unit.value
  }
})
</script>

<template>
  <section class="projectInfoWrapper" v-if="isProjectSelected">
    <section class="projectInfo">
      <TypeFlow :char-delay="10"
        ><p class="projectDescription">
          [api] &lt;/project/description&#62; {{ props.project?.Description }}
        </p></TypeFlow
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
  <MobileBackendAPITool
    v-if="props.project?.Type === 'BackendAPI'"
    :isProjectSelected="isProjectSelected"
    :project="project!"
  ></MobileBackendAPITool>
  <CRTLineWrapper
    class="dataEngDiagram"
    v-if="
      (props.project?.Type === 'BackendDataEng' || props.project?.Type === 'BackendInfra') &&
      props.project?.Assets
    "
    :lineNum="5"
    :height="height"
    :width="width"
  >
    <img class="dataEngImg" :src="props.project?.Assets![0].url"
  /></CRTLineWrapper>
</template>

<style scoped>
.dataEngImg {
  height: v-bind(height);
  width: v-bind(width);
}

.dataEngDiagram {
  border: var(--BE-bg-border);
  box-shadow: var(--BE-bg-border-shadow);
  justify-self: center;
  align-self: center;
  height: v-bind(height);
  width: v-bind(width);
  overflow: hidden;
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
  font-size: 1rem;
  width: 100%;
  height: v-bind(descHeight);
}
.projectInfoWrapper {
  display: flex;
  margin-top: 1rem;
}

.stack {
  color: var(--BE-color);
  font-size: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 1.5rem;
  height: v-bind(stackHeight);
}
</style>
