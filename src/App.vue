<script setup lang="ts">
import BackendHomeView from './views/BackendHomeView.vue'
import FrontendHomeView from './views/FrontendHomeView.vue'
import backendFEbutton from './components/backend/BackendFEbutton.vue'
import { computed, onMounted, ref, watchEffect } from 'vue'
import FrontendBEbutton from './components/frontend/FrontendBEbutton.vue'
import { TypeFlow } from 'typeflow-vue'
import DividerSection from './components/DividerSection.vue'
import { getRecords } from './airtable'
import type { AirtableProject } from './types'
import SiteLoader from './components/SiteLoader.vue'

const initialLoad = ref(true)
const initialLoadError = ref('')
const disableLoadError = ref(true)
// projects
const FEProj = ref<AirtableProject[]>([])
const BEProj = ref<AirtableProject[]>([])
// sliding screen
const offset = ref(0)
const dividerOffset = ref(0)
const offsetpx = computed(() => offset.value + 'px')
const dividerOffsetpx = computed(() => dividerOffset.value + 'px')

const screenHeight = ref(0)
const screenWidth = ref(0)
const containerWidth = ref(0)

// section selection buttons
const frontendFETrigger = ref(1)
const frontendBETrigger = ref(0)
const frontendFETriggerPointer = ref('all')

const backendFETrigger = ref(0)
const backendBETrigger = ref(1)
const backendBETriggerPointer = ref('all')

// other css effects
const overlayOpacity = ref(1)
const crtVisibility = ref('block')

// control
const backendChosen = ref(false)
const frontendChosen = ref(false)
const sideChosen = ref(false)

const dividerPosition = ref('')
const dividerWidth = ref('')

watchEffect(() => {
  screenWidth.value = window.innerWidth
  screenHeight.value = window.innerHeight

  containerWidth.value = screenWidth.value * 2
  offset.value = (screenWidth.value - containerWidth.value) / 2

  const dividerWidthNumeric = screenWidth.value / 6
  dividerWidth.value = dividerWidthNumeric + 'px'
  dividerPosition.value = screenWidth.value / 2 - dividerWidthNumeric / 2 + 'px'
})

onMounted(async () => {
  try {
    const projects = await getRecords()
    if (projects) {
      initialLoad.value = true

      window.addEventListener('resize', onResize)

      FEProj.value = projects.filter((proj) => proj.Type === 'Frontend')
      BEProj.value = projects.filter((proj) => proj.Type.includes('Backend'))
    }
  } catch (err) {
    if (err) {
      initialLoad.value = false
      disableLoadError.value = false
      initialLoadError.value =
        'Unfortunately I was unable to fetch my portfolio projects at this time. Feel free to have a click around the site though! Refresh the page or Try again later to see my portfolio work.'
    }
  }
})

const onResize = () => {
  screenHeight.value = window.innerHeight
  screenWidth.value = window.innerWidth
}

const moveOneScreenWidth = (direction: string) => {
  if (direction === 'backward') {
    const maxOffset = screenWidth.value - containerWidth.value
    offset.value += screenWidth.value
    backendBETriggerPointer.value = 'none'

    if (offset.value > maxOffset) {
      offset.value = maxOffset
    }
    if (!sideChosen.value) {
      dividerOffset.value -= screenWidth.value * 4
      document.getElementsByClassName('divider')[0].classList.add('dividerSlideLeft')
    }
  } else if (direction === 'forward') {
    offset.value -= screenWidth.value
    frontendFETriggerPointer.value = 'none'

    if (offset.value < 0) {
      offset.value = 0
    }
    if (!sideChosen.value) {
      dividerOffset.value += screenWidth.value * 4
      document.getElementsByClassName('divider')[0].classList.add('dividerSlideRight')
    }
  }
}
</script>

<template>
  <Transition name="fade">
    <SiteLoader v-if="initialLoad"></SiteLoader>
  </Transition>
  <Transition name="error">
    <div
      class="noPortfolio"
      v-if="!disableLoadError"
      :disabled="disableLoadError"
      :display="disableLoadError ? 'none' : 'flex'"
      @click="
        () => {
          disableLoadError = true
        }
      "
    >
      <p
        @click="
          () => {
            disableLoadError = true
          }
        "
      >
        {{ initialLoadError }}
      </p>
      <p
        @click="
          () => {
            disableLoadError = true
          }
        "
      >
        click here to dismiss
      </p>
    </div>
  </Transition>
  <Transition name="main">
    <main v-if="!initialLoad" class="base">
      <div class="view-container">
        <div class="overlayFE"></div>
        <FrontendHomeView :projects="FEProj" />
        <button
          class="frontend-FE-trigger"
          @click="
            () => {
              moveOneScreenWidth('forward')
              frontendFETrigger = 0
              backendBETrigger = 0
              frontendBETrigger = 1
              overlayOpacity = 0
              sideChosen = true
            }
          "
        >
          frontend
        </button>
        <FrontendBEbutton
          :frontendBETrigger="frontendBETrigger"
          @frontendBETriggergered="
            () => {
              moveOneScreenWidth('backward')
              frontendBETrigger = 0
              backendFETrigger = 1
              sideChosen = true
              backendChosen = true
            }
          "
        ></FrontendBEbutton>
      </div>
      <DividerSection
        :dividerWidth="dividerWidth"
        :dividerPosition="dividerPosition"
        :dividerOffsetpx="dividerOffsetpx"
      ></DividerSection>
      <div class="view-container">
        <div class="crt1"></div>
        <div class="overlayBE"></div>
        <BackendHomeView :backendChosen="backendChosen" :projects="BEProj" />
        <TypeFlow
          ><button
            class="backend-BE-trigger"
            @click="
              () => {
                moveOneScreenWidth('backward')
                frontendFETrigger = 0
                backendBETrigger = 0
                backendFETrigger = 1
                overlayOpacity = 0
                crtVisibility = 'none'
                backendChosen = true
                sideChosen = true
              }
            "
          >
            backend...
          </button>
        </TypeFlow>
        <TypeFlow>
          <p class="label-be">APIs/Data/Cloud</p>
        </TypeFlow>
        <backendFEbutton
          @backendFETriggergered="
            () => {
              moveOneScreenWidth('forward')
              backendFETrigger = 0
              frontendBETrigger = 1
              sideChosen = true
            }
          "
          :backendFETrigger="backendFETrigger"
        ></backendFEbutton>
      </div>
    </main>
  </Transition>
</template>

<style scoped>
#app {
  position: relative;
  display: flex;
}
.noPortfolio {
  width: 20vw;
  height: 20vh;
  overflow: hidden;
  position: absolute;
  top: 45%;
  left: 40vw;
  justify-self: center;
  align-self: center;
  z-index: 999;
  background: white;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.error-enter-active,
.error-leave-active {
  transition: opacity 1s ease-in;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
}

.main-enter-active,
.main-leave-active {
  transition: opacity 3s ease-in;
}

.main-enter-from,
.main-leave-to {
  opacity: 0;
}

.dividerSlideLeft {
  animation: dividerSlideLeft 1s forwards;
  transform: translateX(v-bind(dividerOffsetpx));
  transition: transform 3s ease-in;
}
.dividerSlideRight {
  animation: dividerSlideRight 1s forwards;
  transform: translateX(v-bind(dividerOffsetpx));
  transition: transform 3s ease-in;
}
.base {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
}

.view-container {
  flex: 1;
  display: inline-block;
  width: 100%;
  transform: translateX(v-bind(offsetpx));
  transition: transform 1s ease;
  position: relative;
}

.overlayFE,
.overlayBE {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: v-bind(overlayOpacity);
  transition: opacity 1s ease;
}
.overlayFE {
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 60s ease infinite;
  height: 100vh;
  box-shadow: inset 0 -30vh 250px 0 black;
  z-index: 4;
}

.overlayBE {
  background-color: var(--BE-bg-color);
  z-index: 2;
}

.crt1::after {
  content: ' ';
  display: v-bind(crtVisibility);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 4;
  pointer-events: none;
  animation: flicker 0.15s infinite;
  box-shadow: inset 0 0 10rem black;
}
.crt1::before {
  content: ' ';
  display: v-bind(crtVisibility);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 4;
  background-size:
    100% 2px,
    3px 100%;
  pointer-events: none;
}

.frontend-FE-trigger {
  position: absolute;
  opacity: v-bind(frontendFETrigger);
  pointer-events: v-bind(frontendFETriggerPointer);
  bottom: 10%;
  right: 27%;
  background: none;
  color: white;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  font-family: Tourney;
  transition:
    color 0.5s ease,
    opacity 1s ease;
  z-index: 5;
}

.frontend-FE-trigger:hover {
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 20px white,
    0 0 200px white;
  transition:
    color 0.5s ease,
    opacity 0.5s ease;
  animation: flickerLoad 10s infinite;
}

.backend-BE-trigger {
  position: absolute;
  opacity: v-bind(backendBETrigger);
  pointer-events: v-bind(backendBETriggerPointer);
  top: 10%;
  left: 28%;
  background: none;
  color: white;
  border: none;
  font-size: 5rem;
  cursor: pointer;
  transition: opacity 1s ease;
  z-index: 3;
  color: var(--BE-color);
  animation: textShadow 1.6s infinite;
  transition:
    color 0.75s ease,
    opacity 0.5s ease;
}

.label-be {
  font-size: 1rem;
  opacity: v-bind(backendBETrigger);
  position: absolute;
  top: 18%;
  left: 28%;
  z-index: 3;
  animation: textShadow 1.6s infinite;
  color: var(--BE-color);
}
.backend-BE-trigger:hover {
  color: rgb(0, 211, 0);
  transition:
    color 0.75s ease,
    opacity 0.5s ease;
}
</style>
