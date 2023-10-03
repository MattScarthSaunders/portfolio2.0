<script setup lang="ts">
import { useControlStore } from '@/stores/appControl'
import MobileDividerSection from '@/components/Mobile/MobileDividerSection.vue'
import MobileBurgerMenu from '@/components/Frontend/Mobile/MobileBurgerMenu.vue'

const store = useControlStore()
</script>

<template>
  <Transition name="main">
    <main v-if="!store.initialLoad && !store.chosen && store.disableLoadError" class="base">
      <header>
        <MobileBurgerMenu></MobileBurgerMenu>
      </header>
      <MobileDividerSection class="dividerSlide"></MobileDividerSection>
    </main>
  </Transition>
</template>

<style scoped>
header {
  height: 7vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
