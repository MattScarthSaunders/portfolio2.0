<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'
import { ref, watchEffect } from 'vue'

const props = defineProps<{ loaded: boolean }>()

const speed = ref(1)

const load = `LOA    `
const ding = `   DING`

watchEffect(() => {
  speed.value = props.loaded ? 1 : 500
})
</script>

<template>
  <div class="loadingWrapper">
    <h2 class="loadingAnimFE">
      <TypeFlow
        :charDelay="speed"
        :characterMultipliers="{ '?': 1, '!': 1, '.': 1, ',': 1, ' ': 1 }"
      >
        <pre class="load">{{ load }}</pre>
      </TypeFlow>
    </h2>
    <h2 class="loadingAnimBE">
      <TypeFlow
        :charDelay="speed"
        :characterMultipliers="{ '?': 1, '!': 1, '.': 1, ',': 1, ' ': 1 }"
      >
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
.load {
  padding-left: 1.05rem;
  font-family: 'Tourney';
  font-weight: 100;
  font-size: 1.8rem;
}
.loadingAnimFE {
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
  border-right: 1px solid green;
  border-top: 1px solid green;

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
    var(--BE-bg-color),
    var(--BE-bg-color),
    var(--BE-bg-color),
    var(--BE-bg-color),
    var(--BE-bg-color),
    var(--BE-bg-color),
    var(--BE-bg-color),
    var(--BE-bg-color),
    var(--BE-bg-color)
  );
  animation: beglow 5s infinite;
}
</style>
