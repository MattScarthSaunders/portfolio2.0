<script setup lang="ts">
import FrontendLinkImage from './FrontendLinkImage.vue'
import FrontendLinkButtons from './FrontendLinkButtons.vue'
import type { AirtableProject } from '@/types'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  isActive: string
  project: AirtableProject
  yValue: number
  leftValue: string
}>()

const flickerFrequency = ref(0)
const flickerFrequencySeconds = computed(() => flickerFrequency.value + 's')

const yTranslate = computed(() => -props.yValue - 1 + 'vw')
const xTranslate = computed(() => props.yValue + 'vw')
const scrollTime = computed(() => props.project.Tech.length * 2 + 's')

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5
})
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
      <div class="projectLinks">
        <FrontendLinkButtons
          :githubLink="props.project.Github"
          :hostedLink="props.project.Hosted"
        ></FrontendLinkButtons>
      </div>
    </section>
    <section class="descriptionStack">
      <section class="description">
        <p v-if="props.project.Name !== 'info'" class="'projectData'">
          {{ props.project.Description }}
        </p>
        <p v-if="props.project.Name === 'info'" class="'infoData'">
          {{ props.project.Synopsis }}
        </p>
      </section>
      <div class="stackWrapper">
        <ul class="stack">
          <li v-for="tech in props.project.Tech">{{ tech }}</li>
        </ul>
      </div>
    </section>
  </section>
</template>

<style scoped>
.projectData {
  max-width: 50%;
  max-height: 70%;
}

.projectLinks {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
}

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

.infoData {
  width: 8vw;
}

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
