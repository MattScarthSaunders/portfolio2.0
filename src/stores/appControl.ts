import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { AirtableProject } from '@/types'

export const useControlStore = defineStore('control', () => {
  const chosen = ref('')
  const FEProjects = ref<AirtableProject[]>([])
  const BEProjects = ref<AirtableProject[]>([])
  const initialLoad = ref(true)
  const initialLoadError = ref('')
  const disableLoadError = ref(true)
  const windowWidth = ref(0)
  const windowHeight = ref(0)

  return {
    chosen,
    FEProjects,
    BEProjects,
    initialLoad,
    initialLoadError,
    disableLoadError,
    windowWidth,
    windowHeight
  }
})
