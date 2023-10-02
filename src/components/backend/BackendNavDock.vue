<script setup lang="ts">
import { useControlStore } from '@/stores/appControl'
import { useBEProjStore } from '@/stores/backendProjects'

const controlStore = useControlStore()
const BEstore = useBEProjStore()
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link
          to="/Frontend"
          @click="
            () => {
              controlStore.chosen = 'FE'
              BEstore.isActive = ''
            }
          "
          >Frontend</router-link
        >
      </li>
      <li>
        <router-link
          to="/"
          @click="
            () => {
              controlStore.chosen = ''
              BEstore.isActive = ''
            }
          "
          >Home</router-link
        >
      </li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  font-family: 'Terminal';
  font-size: 2rem;
  color: var(--BE-color);
}
ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}

li {
  font-family: 'Terminal';
  font-size: 2rem;
  color: var(--BE-color);
  animation: textShadow 0.51s infinite;
}

li:hover {
  color: rgb(1, 182, 1);
  animation: textShadow 0.51s infinite;
  cursor: pointer;
}
</style>
@/stores/nav
