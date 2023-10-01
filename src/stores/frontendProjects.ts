import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { AirtableProject } from '@/types'

export const useFEProjStore = defineStore('FEProj', () => {
  const isActive = ref('info')
  const project = ref<AirtableProject | null>(null)
  function setActive(name: string) {
    isActive.value = name
  }

  function setSelectedProject(selected: AirtableProject | null) {
    project.value = selected
  }

  return { isActive, project, setActive, setSelectedProject }
})
