<script setup lang="ts">
import type { AirtableProject } from '@/types'
import { computed, onMounted, ref, watchEffect } from 'vue'

const props = defineProps<{ project: AirtableProject; isActive: string }>()

const isHovered = ref('')
const flickerFrequency = ref(0)
const flickerFrequencySeconds = computed(() => flickerFrequency.value + 's')

const neonColor = ref('rgb(213, 152, 200)')

const handleMouseOver = () => {
  isHovered.value = props.project.Name
}

const handleMouseLeave = () => {
  isHovered.value = ''
}

onMounted(() => {
  flickerFrequency.value = Math.random() * 10 + 5
})

watchEffect(() => {
  if (isHovered.value === props.project.Name || props.isActive === props.project.Name) {
    neonColor.value = 'rgb(224, 212, 255)'
  } else {
    neonColor.value = 'rgb(213, 152, 200)'
  }
})
</script>

<template>
  <div
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    :class="{
      info: props.project.Name === 'info' && isActive === 'info',
      projectSlider: 'projectSlider',
      showProject: props.isActive === props.project.Name,
      showHighlights: isHovered === props.project.Name
    }"
    @click="$emit('projectSelected', props.project.Name)"
  >
    <h2 class="FEprojectName">{{ props.project.Name }}</h2>
    <section
      :class="{
        highlights: 'highlights',
        hideHighlights: isHovered !== props.project.Name || isActive === props.project.Name,
        showHighlights: isHovered === props.project.Name && isActive !== props.project.Name
      }"
    >
      <p class="Synopsis">{{ props.project.Synopsis }}</p>
      <ul class="techStackMini">
        <li v-for="tech in props.project.Tech">{{ tech }}</li>
      </ul>
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
    </section>
    <section
      :class="{
        fullProject: 'fullProject',
        hideProjectData: props.isActive !== props.project.Name,
        showProjectData: props.isActive === props.project.Name
      }"
    >
      <a
        class="imageLink"
        @click.stop
        :href="props.project.Hosted"
        target="_blank"
        rel="noopener noreferrer"
        ><img v-if="props.project?.Assets" class="projectImg" :src="props.project?.Assets![0].url"
      /></a>

      <div class="detailWrapper">
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
        <ul class="techStack">
          <li v-for="tech in props.project.Tech">{{ tech }}</li>
        </ul>
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
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.showProjectData > a {
  pointer-events: all;
}
.hideProjectData > a {
  pointer-events: none;
}
.imageLink {
  height: max-content;
}

.imageLink:active > img {
  box-shadow:
    inset 0px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -4px 4px 0px 1px rgba(0, 0, 0, 0.3);
  transform: translateX(-0.5rem) translateY(0.5rem);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.projectLinks {
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
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
  padding: 0.25rem;
  border-radius: 5%;
}

.projectLink:hover {
  box-shadow:
    inset 0 0 2px 1px white,
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(79, 79, 79, 0.3),
    -6px 6px 0px 1px rgba(66, 66, 66, 0.3),
    -12px 12px 0px 1px rgba(53, 53, 53, 0.3);
}

.projectLink:active {
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -4px 4px 0px 1px rgba(0, 0, 0, 0.3);
  transform: translateX(-0.5rem) translateY(0.5rem);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  animation: none;
}

.techStack,
.techStackMini {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  color: v-bind(neonColor);
  text-shadow:
    0 0 2px #ff4ad8,
    0 0 10px #ff4ad8,
    0 0 20px #ff4ad8,
    0 0 40px #ff4ad8;
}

.techStackMini {
  gap: 0.5rem;
}

.detailWrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.projectImg {
  height: 20vh;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -8px 8px 0px 1px rgba(0, 0, 0, 0.3),
    -16px 16px 0px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  position: relative;
}

.fullProject {
  font-size: 1rem;
  display: flex;
  gap: 20px;
  padding-left: 1.5rem;
  width: 26.5vw;
  padding-right: 0.75rem;
}

.highlights {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  gap: 1rem;
  transition: opacity 0.5s ease;
  padding-left: 1rem;
}

.showHighlights {
  width: 9vw;
  opacity: 1;
}

.hideHighlights {
  opacity: 0;
  width: 0;
  height: 0;
  font-size: 0;
}

.hideHighlights > a {
  width: 0;
  height: 0;
  opacity: 0;
}

.projectSlider {
  width: 2vw;
  height: 40vh;
  z-index: 3;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  transform: skew(15deg);
  border-radius: 1%;
  padding: 3rem;
  animation: gradient 60s ease infinite;
  font-size: 2rem;
  color: black;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  font-family: 'Inconsolata';
  position: relative;
  opacity: 1;
  transition:
    width 0.75s ease,
    transform 0.25s ease,
    border-radius 0.25s ease;
  overflow: hidden;
}

.projectSlider:hover {
  width: 13vw;
  border-radius: 4%;
  transform: translateY(-20px) skew(15deg);
}

.showProject,
.showProject:hover {
  width: 30vw;
  border-radius: 4%;
  opacity: 1;
  transform: translateY(-20px) skew(15deg);
  padding-right: 1rem;
}

.hideProjectData {
  opacity: 0;
}

.showProjectData {
  opacity: 1;
}

.FEprojectName {
  rotate: 90deg;
  position: absolute;
  bottom: 15vh;
  left: -8.5vw;
  width: 20vw;
  pointer-events: none;
  font-family: 'Tourney';
  font-weight: 100;
  font-size: 2.5rem;
  color: v-bind(neonColor);
  text-shadow:
    0 0 2px #ff4ad8,
    0 0 10px #ff4ad8,
    0 0 20px #ff4ad8,
    0 0 40px #ff4ad8;
  transition:
    color 0.5s ease,
    opacity 0.5s ease;
  animation: flickerLoad v-bind(flickerFrequencySeconds) infinite;
}

.info,
.info:hover {
  width: 13vw;
  border-radius: 4%;
  transform: translateY(-20px) skew(15deg);
  padding-left: 1.3rem;
  padding-right: 2rem;
}

.infoData {
  width: 8vw;
}
</style>
