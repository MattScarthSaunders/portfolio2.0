<script setup lang="ts">
import { useControlStore } from '@/stores/appControl'
import { useFEProjStore } from '@/stores/frontendProjects'

const store = useControlStore()
const FEstore = useFEProjStore()
</script>

<template>
  <router-link
    class="Frontend-BE-trigger"
    to="/Backend"
    @click.stop="
      () => {
        store.chosen = 'Backend'
        FEstore.isActive = ''
      }
    "
    >Backend</router-link
  >
</template>

<style scoped></style>
