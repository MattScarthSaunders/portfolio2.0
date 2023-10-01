<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { computed, onMounted, ref } from 'vue'
import FrontendHighlightSection from './FrontendHighlightSection.vue'
import { useFEProjStore } from '@/stores/frontendProjects'
import { calculateLeftValue, calculateYValue } from '../../utils/calcs'

const props = defineProps<{
  Name: string
  project: AirtableProject
  index: number
  length: number
}>()
const transitionDelay = computed(() => (props.index + 1) * 0.5 * 100)
const rise = ref('99vh')

const store = useFEProjStore()

const flickerFrequency = ref(0)
const flickerFrequencySeconds = computed(() => flickerFrequency.value + 's')

const yValue = ref(0)
const yTranslate = computed(() => yValue.value + 'vw')

const leftNum = ref(0)

const isHovered = ref('')
const isOnGlass = ref(false)

const handleClick = (name: string) => {
  if (store.isActive === name) {
    store.setActive('')
    store.setSelectedProject(null)
  } else {
    store.isActive = name
    store.setSelectedProject(props.project)
  }
}

const handleMouseOver = (name: string) => {
  isHovered.value = name
}

const handleMouseLeave = () => {
  isHovered.value = ''
}

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5

  yValue.value = calculateYValue(props.length, props.index)
  leftNum.value = calculateLeftValue(props.length, props.index)

  console.log(transitionDelay.value)
  setTimeout(() => (rise.value = '0'), transitionDelay.value)
})
</script>

<template>
  <div v-if="props.project" class="FEprojectItem">
    <h2
      @mouseenter="handleMouseOver(Name)"
      @mouseleave="handleMouseLeave"
      @click="handleClick(Name)"
      :class="{
        FEprojectName: true,
        isActive: store.isActive === Name,
        isHovered: isHovered === Name
      }"
    >
      {{ props.Name }}
    </h2>
    <Transition name="highlights">
      <FrontendHighlightSection
        v-if="isHovered === Name && store.isActive !== Name"
        @mouseenter="
          () => {
            isOnGlass = true
            isHovered = Name
          }
        "
        @mouseleave="
          () => {
            isOnGlass = false
            isHovered = ''
          }
        "
        :isHovered="isHovered"
        :isActive="''"
        :project="project"
      ></FrontendHighlightSection>
    </Transition>
  </div>
</template>

<style scoped>
.highlights-enter-active {
  transition:
    opacity 1s ease,
    height 1s ease,
    transform 1s ease;
}

.highlights-leave-active {
  transition:
    opacity 0.25s ease,
    height 0.25s ease,
    transform 0.25s ease;
}
.highlights-enter-from,
.highlights-leave-to {
  opacity: 0;
  height: 0;
  transform: rotate(-90deg) skew(15deg) translateX(-6vh);
}
.FEprojectItem {
  position: relative;
  padding: 1rem;
  height: 4rem;
  width: 30rem;
}

.FEprojectName {
  position: relative;
  /* size+space */
  rotate: -15deg;
  padding: 1rem;
  height: 4rem;
  width: 30rem;
  /* font */
  font-family: 'Tourney';
  font-weight: 100;
  font-size: 2.5rem;
  /* color */
  color: rgba(255, 255, 255, 0.1);
  transform: skew(-15deg) translateX(v-bind(rise));
  text-shadow:
    0 0 2px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.5),
    0 0 40px rgba(255, 255, 255, 0.5);
  /* animation */
  transition:
    color 0.5s ease,
    opacity 0.5s ease,
    transform 0.5s ease;
  animation: flickerLoad v-bind(flickerFrequencySeconds) infinite;
  cursor: pointer;
}

.FEprojectName:hover,
.isHovered {
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 1),
    0 0 40px rgba(255, 255, 255, 1);
  transform: translateX(-10vh) skew(-15deg);
}

.isActive,
.isActive:hover {
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 1),
    0 0 40px rgba(255, 255, 255, 1);
  transform: translateX(-55vh) skew(-15deg) translateY(v-bind(yTranslate));
}
</style>
