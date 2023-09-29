<script setup lang="ts">
import FrontendLinkImage from './FrontendLinkImage.vue'
import FrontendLinkButtons from './FrontendLinkButtons.vue'
import type { AirtableProject } from '@/types'
import { computed } from 'vue'
import FrontendDescriptionStack from './FrontendDescriptionStack.vue'

const props = defineProps<{
  isActive: string
  project: AirtableProject
  yValue: number
  leftValue: string
}>()

const yTranslate = computed(() => -props.yValue - 1 + 'vw')
const xTranslate = computed(() => props.yValue + 'vw')
</script>

<template>
  <section class="fullProject">
    <section class="imageLinks">
      <FrontendLinkImage
        v-if="props.project?.Assets"
        :img="props.project?.Assets![0]"
        :smImg="props.project?.Assets![1]"
        :githubLink="props.project.Github"
        :hostedLink="props.project.Hosted"
      ></FrontendLinkImage>
      <FrontendLinkButtons :project="project"></FrontendLinkButtons>
    </section>
    <FrontendDescriptionStack :project="project"></FrontendDescriptionStack>
  </section>
</template>

<style scoped>
.fullProject {
  position: absolute;
  top: v-bind(leftValue);
  left: -80vh;
  font-size: 1rem;
  width: 50vw;
  display: flex;
  margin-top: -1vw;
  gap: 1rem;
  transform: translateX(v-bind(xTranslate)) rotate(-90deg) skew(15deg)
    translateY(v-bind(yTranslate));
}

.imageLinks {
  padding: 1rem 2rem;
  padding-right: 1rem;
  opacity: 1;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 60s infinite;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 4%;
  gap: 2rem;
  flex-shrink: 4;
}
</style>
