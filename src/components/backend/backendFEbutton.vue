<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ beFeTrig: number }>()
</script>
<template>
  <button class="backend-FE-trigger" @click="$emit('beFEtriggered')">
    <span class="a1">&lt;</span><span class="a2">&lt;</span><span class="a3">&lt;</span
    ><span class="f">f</span><span class="r">r</span><span class="o">o</span><span class="n">n</span
    ><span class="t">t</span><span class="e">e</span><span class="n2">n</span
    ><span class="d">d</span>
  </button>
</template>
<style scoped>
@font-face {
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/terminal_copy.ttf);
  font-family: 'Terminal';
}
.backend-FE-trigger {
  position: absolute;
  bottom: 3%;
  left: 2%;
  opacity: v-bind(beFeTrig);
  background: none;
  border: none;
  color: -webkit-linear-gradient(green, pink);
  transition: opacity 2s ease;
  transition-delay: 1s;
}

@keyframes blinking {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.backend-FE-trigger > span {
  font-size: 2rem;
  font-family: 'Terminal';
  color: green;
  cursor: pointer;
  opacity: v-bind(beFeTrig);
  animation: textShadow 0.5s infinite;
}

.backend-FE-trigger:hover > span {
  animation: blinking 1s infinite;
  color: rgb(1, 182, 1);

  transition: color 1s ease;
}
.backend-FE-trigger:hover > .a1 {
  color: teal;
  animation-delay: 0.1s;
  transition-delay: 0.1s;
}

.backend-FE-trigger:hover > .a2 {
  color: aqua;
  animation-delay: 0.2s;
  transition-delay: 0.2s;
}
.backend-FE-trigger:hover > .a3 {
  color: white;
  transition-delay: 0.3s;
  animation-delay: 0.3s;
}
.backend-FE-trigger:hover > .f {
  color: white;
  transition-delay: 0.4s;
  animation-delay: 0.4s;
}
.backend-FE-trigger:hover > .r {
  color: rgb(0, 255, 249);
  transition-delay: 0.5s;
  animation-delay: 0.5s;
}
.backend-FE-trigger:hover > .o {
  color: rgb(0, 184, 255);
  transition-delay: 0.6s;
  animation-delay: 0.6s;
}
.backend-FE-trigger:hover > .n {
  color: rgb(73, 0, 255);
  transition-delay: 0.7s;
  animation-delay: 0.7s;
}
.backend-FE-trigger:hover > .t {
  color: rgb(150, 0, 255);
  transition-delay: 0.8s;
  animation-delay: 0.8s;
}
.backend-FE-trigger:hover > .e {
  color: rgb(255, 0, 193);
  transition-delay: 0.9s;
  animation-delay: 0.9s;
}
.backend-FE-trigger:hover > .n2 {
  color: rgb(251, 184, 248);
  transition-delay: 1s;
  animation-delay: 1s;
}
.backend-FE-trigger:hover > .d {
  color: white;
  transition-delay: 1.1s;
  animation-delay: 1.1s;
}
</style>
