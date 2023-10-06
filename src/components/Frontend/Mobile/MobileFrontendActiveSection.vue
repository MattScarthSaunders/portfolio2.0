<script setup lang="ts">
import MobileFrontendLinkImage from './MobileFrontendLinkImage.vue'
import MobileFrontendLinkButtons from './MobileFrontendLinkButtons.vue'
import type { AirtableProject } from '@/types'
import MobileFrontendDescriptionStack from './MobileFrontendDescriptionStack.vue'

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
      <MobileFrontendLinkImage
        v-if="props.project?.Assets"
        :img="props.project?.Assets![0]"
        :smImg="props.project?.Assets![1]"
        :githubLink="props.project.Github"
        :hostedLink="props.project.Hosted"
      ></MobileFrontendLinkImage>
      <div class="rightwrapper">
        <MobileFrontendLinkButtons :project="project"></MobileFrontendLinkButtons>
        <div class="stackWrapper">
          <ul class="stack">
            <li v-for="(tech, index) in project.Tech" :key="tech + index + 'd'">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </section>

    <MobileFrontendDescriptionStack :project="project"></MobileFrontendDescriptionStack>
  </section>
</template>

<style scoped>
.rightWrapper {
  display: flex;
  flex-direction: column;
}
.stackWrapper {
  padding: 2rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  transform: skew(8deg);
}
.stack {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: 0.8rem;
  list-style: none;
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white,
    0 0 20px white,
    0 0 40px white;
  background: none;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
}

.fullProject {
  position: absolute;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  margin-top: 2vh;
}

.isActive {
  opacity: 1;
  transition: opacity 1s ease;
  width: 100vw;
  height: 35vh;
}

.isDisabled {
  opacity: 0;
  pointer-events: none;
}

.imageLinks {
  padding: 1rem 1rem;
  margin-right: 2vw;
  opacity: 1;
  display: flex;
  justify-content: center;
  border-radius: 4%;
  width: 100%;
}
</style>
