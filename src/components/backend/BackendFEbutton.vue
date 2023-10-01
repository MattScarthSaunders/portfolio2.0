<script setup lang="ts">
import { useControlStore } from '@/stores/appControl'

const store = useControlStore()
</script>

<template>
  <router-link class="Backend-FE-trigger" to="/Frontend" @click="store.chosen = 'Frontend'"
    ><span class="a1">&lt;</span><span class="a2">&lt;</span><span class="a3">&lt;</span
    ><span class="f">f</span><span class="r">r</span><span class="o">o</span><span class="n">n</span
    ><span class="t">t</span><span class="e">e</span><span class="n2">n</span
    ><span class="d">d</span>
  </router-link>
</template>
<style scoped>
.Backend-FE-trigger {
  position: absolute;
  bottom: 3%;
  left: 2%;
  background: none;
  border: none;
  color: -webkit-linear-gradient(green, pink);
  transition: opacity 2s ease;
  transition-delay: 1s;
  text-decoration: none;
}

@keyframes blinking {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.Backend-FE-trigger > span {
  font-size: 2rem;
  font-family: 'Terminal';
  color: var(--BE-color);
  cursor: pointer;
  animation: textShadow 0.5s infinite;
}

.Backend-FE-trigger:hover > span {
  animation: blinking 1s infinite;
  color: rgb(1, 182, 1);

  transition: color 1s ease;
}
.Backend-FE-trigger:hover > .a1 {
  color: teal;
  animation-delay: 0.1s;
  transition-delay: 0.1s;
}

.Backend-FE-trigger:hover > .a2 {
  color: aqua;
  animation-delay: 0.2s;
  transition-delay: 0.2s;
}
.Backend-FE-trigger:hover > .a3 {
  color: white;
  transition-delay: 0.3s;
  animation-delay: 0.3s;
}
.Backend-FE-trigger:hover > .f {
  color: white;
  transition-delay: 0.4s;
  animation-delay: 0.4s;
}
.Backend-FE-trigger:hover > .r {
  color: rgb(0, 255, 249);
  transition-delay: 0.5s;
  animation-delay: 0.5s;
}
.Backend-FE-trigger:hover > .o {
  color: rgb(0, 184, 255);
  transition-delay: 0.6s;
  animation-delay: 0.6s;
}
.Backend-FE-trigger:hover > .n {
  color: rgb(73, 0, 255);
  transition-delay: 0.7s;
  animation-delay: 0.7s;
}
.Backend-FE-trigger:hover > .t {
  color: rgb(150, 0, 255);
  transition-delay: 0.8s;
  animation-delay: 0.8s;
}
.Backend-FE-trigger:hover > .e {
  color: rgb(255, 0, 193);
  transition-delay: 0.9s;
  animation-delay: 0.9s;
}
.Backend-FE-trigger:hover > .n2 {
  color: rgb(251, 184, 248);
  transition-delay: 1s;
  animation-delay: 1s;
}
.Backend-FE-trigger:hover > .d {
  color: white;
  transition-delay: 1.1s;
  animation-delay: 1.1s;
}
</style>
