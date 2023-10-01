<script setup lang="ts">
import LandingInfo from './LandingInfo.vue'
</script>

<template>
  <div class="divider"><LandingInfo class="landingInfo" /></div>
</template>

<style scoped>
.divider {
  width: 20%;
  min-width: 250px;
  height: 100vh;
  z-index: 5;
  position: absolute;
  left: 40%;
  transform: skew(15deg);
  border-right: 10px solid black;
  border-left: 10px solid black;
  box-shadow: 0 0 10px black;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 244);
}
</style>
