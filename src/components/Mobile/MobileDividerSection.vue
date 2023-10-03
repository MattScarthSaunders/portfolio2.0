<script setup lang="ts">
import LandingInfo from './MobileLandingInfo.vue'
</script>

<template>
  <div class="divider"><LandingInfo class="landingInfo" /></div>
</template>

<style scoped>
.divider {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 244);
  box-shadow: inset 0 0 50px black;
}
</style>
