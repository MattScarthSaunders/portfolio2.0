<script setup lang="ts">
import axios from 'axios'
import { TypeFlow } from 'typeflow-vue'
import { ref, watch, watchEffect } from 'vue'
import MobileBackendButtonVue from './MobileBackendButton.vue'
import { handleBoardgameRequests } from '@/utils/api'
import type { AirtableProject } from '@/types'
import CRTLineWrapper from '../CRTLineWrapper.vue'

const props = defineProps<{
  isProjectSelected: boolean
  project: AirtableProject
}>()

const isAPIFetching = ref(false)
const fetchedData = ref<{ [key: string]: any } | string | null>(null)
const isInteractorFetching = ref(false)
const isInteractorErrored = ref(false)

const visualiserWidth = ref('0vw')
const visualiserHeight = ref('0vh')
const visualiserOverflow = ref('hidden')
const visualiserPadding = ref('0rem')
const visualiserBorder = ref('none')

const interactorWidth = ref('0vw')
const interactorHeight = ref('0vh')
const interactorOverflow = ref('hidden')
const interactorPadding = ref('0rem')
const interactorBorder = ref('none')

const commands = ref<string[][]>([['', '']])

const handleClick = async (command: string, endpoint: string) => {
  if (props.project) {
    const urlStub = props.project.Hosted || ''
    isAPIFetching.value = true

    visualiserWidth.value = '85vw'
    visualiserHeight.value = '30vh'
    visualiserOverflow.value = 'scroll'
    visualiserPadding.value = '1rem'
    visualiserBorder.value = 'var(--BE-bg-border)'

    await handleBoardgameRequests(command, endpoint, urlStub, fetchedData, isAPIFetching)
  }
}

watchEffect(async () => {
  isInteractorFetching.value = props.isProjectSelected
  if (props.project) {
    try {
      const res = await axios.get(props.project.Hosted || '')
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

watch(isInteractorFetching, (prev, current) => {
  if (current) {
    interactorWidth.value = '85vw'
    interactorHeight.value = '11vh'
    interactorOverflow.value = 'scroll'
    interactorBorder.value = 'var(--BE-bg-border)'
  }
})
</script>

<template>
  <section class="BackendContainer">
    <TypeFlow v-if="isInteractorFetching && props.isProjectSelected" :charDelay="100"
      ><p class="loading">LOADING...</p>
    </TypeFlow>
    <CRTLineWrapper :lineNum="5" :height="interactorHeight" :width="interactorWidth">
      <section class="apiInteractor">
        <TypeFlow v-if="isInteractorErrored && props.isProjectSelected" :charDelay="10">
          <p>ERROR: Could not retrieve API request data, please try again.</p>
        </TypeFlow>
        <ul v-else-if="props.isProjectSelected" class="apiCommandList">
          <li v-for="(command, i) in commands" v-bind:key="command[i]">
            <MobileBackendButtonVue
              :name="command[0]"
              :projectIndex="i"
              @click="handleClick(command[0], command[1])"
              :height="'7vh'"
              :width="'7vh'"
            ></MobileBackendButtonVue>
            <label class="apiButtonLabel">{{ command[1] }}</label>
          </li>
        </ul>
      </section></CRTLineWrapper
    >
    <CRTLineWrapper :lineNum="5" :height="visualiserHeight" :width="visualiserWidth">
      <section class="apiVisualiser">
        <TypeFlow v-if="isAPIFetching" :charDelay="100"><p>LOADING...</p></TypeFlow>
        <TypeFlow v-else :charDelay="2">
          <p class="visualisedApi">
            {{ fetchedData }}
          </p></TypeFlow
        >
      </section>
    </CRTLineWrapper>
  </section>
</template>

<style scoped>
.loading {
  color: var(--BE-color);
}

.apiInteractor,
.apiVisualiser {
  color: var(--BE-color);
  scrollbar-color: green rgb(11, 46, 22);
  transition-property: width, height, padding;
  transition-duration: 0.5s, 1s, 0s;
  transition-delay: 0s, 0.5s, 0.5s;
  box-shadow: var(--BE-bg-border-shadow);
}

.apiVisualiser {
  height: v-bind(visualiserHeight);
  overflow-y: v-bind(visualiserOverflow);
  padding: v-bind(visualiserPadding);
  border: v-bind(visualiserBorder);
}

.apiInteractor {
  height: v-bind(interactorHeight);
  overflow-y: v-bind(interactorOverflow);
  padding: v-bind(interactorPadding);
  border: v-bind(interactorBorder);
  position: relative;
}

.apiCommandList {
  list-style: none;
  display: flex;
}

.apiCommandList li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid green;
  border-right: 1px solid green;
  padding: 0.5rem 1rem;
}

.apiButtonLabel {
  color: var(--BE-color);
  font-size: 0.85rem;
  width: max-content;
}

.BackendContainer {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  font-size: 1.25rem;
}

.visualisedApi {
  white-space: pre-wrap;
  font-size: 0.85rem;
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
