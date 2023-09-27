<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'

const load = `LOAD   `
const ding = `   DING`
</script>

<template>
  <div class="loadingWrapper">
    <h2 class="loadingAnimFE">
      <TypeFlow :charDelay="500" :characterMultipliers="{ '?': 1, '!': 1, '.': 1, ',': 1, ' ': 1 }">
        <pre class="load">{{ load }}</pre>
      </TypeFlow>
    </h2>
    <h2 class="loadingAnimBE">
      <TypeFlow :charDelay="500" :characterMultipliers="{ '?': 1, '!': 1, '.': 1, ',': 1, ' ': 1 }">
        <pre class="ding">{{ ding }}</pre>
      </TypeFlow>
    </h2>
  </div>
</template>

<style scoped>
.loadingWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.load {
  padding-left: 1.5rem;
}

h2 {
  position: absolute;
  width: 10rem;
  height: 10rem;
  padding: 1.5rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.loadingAnimFE {
  font-family: 'Tourney';
  font-weight: 100;
  padding-left: 1px;
  color: white;
  text-shadow:
    0 0 2px rgba(255, 255, 255),
    0 0 10px rgba(255, 255, 255),
    0 0 20px rgba(255, 255, 255),
    0 0 40px rgba(255, 255, 255);
  border-bottom-left-radius: 5%;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation:
    gradient 20s infinite,
    loadShadow 20s infinite;
}

.loadingAnimBE {
  color: rgba(0, 255, 0, 0.491);
  border-radius: 0;
  box-shadow:
    3px -3px 5px 0.5px rgba(0, 128, 0, 0.668),
    50px -50px 50px 10px var(--BE-bg-color);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    black,
    black,
    black,
    black,
    black,
    black,
    black,
    black,
    black
  );
  animation: crtLines;
}
</style>
