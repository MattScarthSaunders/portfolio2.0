<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { getProjects, getPersonalData } from './utils/api'
import SiteLoader from './components/SiteLoader.vue'
import { useControlStore } from '@/stores/appControl'
import type { RouterView } from 'vue-router'

const store = useControlStore()

const handleScreenSizeChange = () => {
  store.windowWidth = window.innerWidth
  store.windowHeight = window.innerHeight
}

onMounted(async () => {
  window.addEventListener('resize', handleScreenSizeChange)
  handleScreenSizeChange()

  try {
    const { FEProj, BEProj } = await getProjects()
    store.initialLoad = false

    store.FEProjects = FEProj
    store.BEProjects = BEProj
  } catch (err) {
    if (err) {
      store.initialLoad = false
      store.disableLoadError = false
      store.initialLoadError =
        'Unfortunately I was unable to retrieve my portfolio projects at this time. Refresh the page or Try again later to see my portfolio work.'
    }
  }

  try {
    const { CV, Bio } = await getPersonalData()
    store.cvUrl = CV.Downloads![0].url
    store.bio = Bio.Info!
  } catch (err) {
    if (err) {
      console.log('404: personal data not found')
    }
  }
})
</script>

<template>
  <Transition name="fade">
    <SiteLoader v-if="store.initialLoad" :loaded="!store.initialLoad"></SiteLoader>
  </Transition>
  <Transition name="error">
    <div
      v-if="!store.disableLoadError"
      class="noPortfolio"
      :disabled="store.disableLoadError"
      :display="store.disableLoadError ? 'none' : 'flex'"
      @click="
        () => {
          store.disableLoadError = true
        }
      "
    >
      <p
        @click="
          () => {
            store.disableLoadError = true
          }
        "
      >
        {{ store.initialLoadError }}
      </p>
      <p
        @click="
          () => {
            store.disableLoadError = true
          }
        "
      >
        click here to dismiss
      </p>
    </div>
  </Transition>
  <RouterView
    :FrontendChosen="store.chosen"
    :projects="store.chosen === 'Backend' ? store.BEProjects : store.FEProjects"
  ></RouterView>
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

.fade-enter-from,
.fade-leave-to,
.error-enter-from,
.error-leave-to {
  opacity: 0;
}

.error-enter-active,
.error-leave-active,
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}
</style>
