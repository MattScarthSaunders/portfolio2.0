<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'
import axios from 'axios'
import backendButtonVue from './backendButton.vue'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { handleBoardgameRequests } from '../utils/api'
import BackendLink from './backendLink.vue'

export interface Project {
  id: number
  name: string
  about: string
  aboutFull: string
  github: string
  hosted: string
  img: string
  tech: string[]
}
const props = defineProps<{
  project?: Project
  isProjectSelected: Boolean
}>()

const commands = ref<string[][]>([['', '']])
const fetchedData = ref<{ [key: string]: any } | string | null>(null)
const isInteractorFetching = ref(props.isProjectSelected)
const isInteractorErrored = ref(false)
const isAPIFetching = ref(false)

watchEffect(async () => {
  if (props.project) {
    try {
      const res = await axios.get(props.project.hosted)
      isInteractorFetching.value = false
      commands.value = Object.keys(res.data).map((key) => {
        return key.split(' ')
      })
    } catch (err) {
      isInteractorFetching.value = false
      isInteractorErrored.value = true
    }
  }
})

const handleClick = async (command: string, endpoint: string) => {
  if (props.project) {
    const urlStub = props.project.hosted
    isAPIFetching.value = true
    await handleBoardgameRequests(command, endpoint, urlStub, fetchedData, isAPIFetching)
  }
}
</script>

<template>
  <section class="projectInfoWrapper" v-if="isProjectSelected">
    <section class="projectInfo">
      <p class="projectDescription">{{ props.project?.aboutFull }}</p>
      <p class="stack">Stack: {{ props.project ? props.project.tech.join(', ') : '' }}</p>
      <BackendLink :link="props.project ? props.project.hosted : ''">Visit Hosted</BackendLink>
    </section>
  </section>
  <section class="backendContainer">
    <section class="apiInteractor">
      <TypeFlow v-if="isInteractorFetching && props.isProjectSelected" :charDelay="100"
        ><p>LOADING...</p>
      </TypeFlow>
      <TypeFlow v-else-if="isInteractorErrored && props.isProjectSelected" :charDelay="10">
        <p>ERROR: Could not retrieve API request data, please try again.</p>
      </TypeFlow>
      <ul v-else-if="props.isProjectSelected" class="apiCommandList">
        <li v-for="(command, i) in commands" v-bind:key="command[i]">
          <backendButtonVue
            :name="command[0]"
            :projectIndex="i"
            @click="handleClick(command[0], command[1])"
          ></backendButtonVue>
          <label class="apiButtonLabel">{{ command[1] }}</label>
        </li>
      </ul>
    </section>
    <section class="apiVisualiser">
      <TypeFlow v-if="isAPIFetching" :charDelay="100"><p>LOADING...</p></TypeFlow>
      <TypeFlow v-else :charDelay="2">
        <p class="visualisedApi">
          {{ fetchedData }}
        </p></TypeFlow
      >
    </section>
  </section>
</template>

<style scoped>
.projectInfo {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
}
.projectDescription {
  color: green;
  font-size: 1.25rem;
}
.projectInfoWrapper {
  display: flex;
  margin-top: 1rem;
}

.stack {
  color: green;
  font-size: 1.25rem;
  margin-top: 0.25rem;
}

.apiInteractor,
.apiVisualiser {
  width: 45vw;
  border: 1px solid green;
  color: green;
  padding: 1rem;
  height: 60vh;
  overflow-y: scroll;
  scrollbar-color: green rgb(11, 46, 22);
}

.apiVisualiser {
  font-size: 1.25rem;
}

.apiCommandList {
  list-style: none;
}

.apiCommandList li {
  margin: 1rem 0;
}

.apiButtonLabel {
  color: green;
  padding-left: 1rem;
}

.backendContainer {
  padding-top: 1rem;
  display: flex;
  gap: 2rem;
  font-size: 1.25rem;
}

.visualisedApi {
  white-space: pre-wrap;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #00940a;
  animation: textShadow 1.6s infinite;
}
::-webkit-scrollbar-thumb:hover {
  background: #00b30c;
  animation: textShadow 1.6s infinite;
}
::-webkit-scrollbar-thumb:active {
  background: #0ba300;
  animation: textShadow 1.6s infinite;
}
::-webkit-scrollbar-track {
  background: #0a3305;
  animation: textShadow 1.6s infinite;
}
::-webkit-scrollbar-track:hover {
  background: #0a3305;
  animation: textShadow 1.6s infinite;
}
::-webkit-scrollbar-track:active {
  background: #0a3305;
  animation: textShadow 1.6s infinite;
}
::-webkit-scrollbar-corner {
  background: transparent;
  animation: textShadow 1.6s infinite;
}
</style>
