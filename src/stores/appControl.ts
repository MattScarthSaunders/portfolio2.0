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

  return { chosen, FEProjects, BEProjects, initialLoad, initialLoadError, disableLoadError }
})
