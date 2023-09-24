<script setup lang="ts">
import LandingInfo from './LandingInfo.vue'

const props = defineProps<{
  dividerWidth: string
  dividerPosition: string
  dividerOffsetpx: string
}>()
</script>

<template>
  <div class="divider"><LandingInfo class="landingInfo" /></div>
</template>

<style scoped>
.divider {
  width: v-bind(dividerWidth);
  height: 200vh;
  z-index: 5;
  position: absolute;
  top: -50%;
  right: v-bind(dividerPosition);
  transform: skew(15deg);
  border: 10px solid black;
  box-shadow: 0 0 10px black;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 244);
}

.dividerSlideLeft {
  animation: dividerSlideLeft 1s forwards;
  transform: translateX(v-bind(dividerOffsetpx));
  transition: transform 3s ease-in;
}
.dividerSlideRight {
  animation: dividerSlideRight 1s forwards;
  transform: translateX(v-bind(dividerOffsetpx));
  transition: transform 3s ease-in;
}
</style>
