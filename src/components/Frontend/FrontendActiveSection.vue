<script setup lang="ts">
import FrontendLinkImage from './FrontendLinkImage.vue'
import FrontendLinkButtons from './FrontendLinkButtons.vue'
import type { AirtableProject } from '@/types'
import FrontendDescriptionStack from './FrontendDescriptionStack.vue'

const props = defineProps<{
  isActive: string
  project: AirtableProject
}>()
</script>

<template>
  <section
    :class="{
      fullProject: true,
      isActive: isActive === project.Name,
      isDisabled: isActive !== project.Name
    }"
  >
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
  top: 20%;
  left: 33vw;
  font-size: 1rem;
  max-width: 50vw;
  display: flex;
  margin-top: -1vw;
  gap: 1rem;
  opacity: 0;
}
.isActive {
  opacity: 1;
  left: 20vw;
  translate: 10vw 0;
  transform: skew(15deg);
  transition:
    translate 1s ease,
    opacity 1s ease;
  transition-delay: 0.3s;
}

.isDisabled {
  opacity: 0;
  pointer-events: none;
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
