import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFEProjStore = defineStore('FEProj', () => {
  const isActive = ref('info')

  const dummyInfoProject = {
    Name: 'info',
    Description: '',
    Synopsis:
      'Hover over a card to see a synopsis of the project, and click on a card for full detail.',
    Tech: [''],
    Plurality: 'Solo',
    Status: 'Done',
    Type: 'info',
    Id: 999
  }

  function setActive(name: string) {
    isActive.value = name
  }

  return { isActive, setActive }
})
