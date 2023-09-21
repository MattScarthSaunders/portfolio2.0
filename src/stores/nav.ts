import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', () => {
  const aboutSelected = ref(false)
  const cvSelected = ref(false)
  const contactSelected = ref(false)
  const type = ref('')

  function setSelected(selection: string, version: string) {
    type.value = version
    if (selection === 'about') {
      aboutSelected.value = true
      cvSelected.value = false
      contactSelected.value = false
    }
    if (selection === 'cv') {
      aboutSelected.value = true
      cvSelected.value = true
      contactSelected.value = false
    }
    if (selection === 'contact') {
      aboutSelected.value = false
      cvSelected.value = false
      contactSelected.value = true
    }
  }

  return { aboutSelected, cvSelected, contactSelected, type, setSelected }
})
