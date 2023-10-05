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
      <li>
        <router-link
          to="/Backend/Contact"
          @click="
            () => {
              controlStore.chosen = ''
              BEstore.isActive = ''
            }
          "
          >Contact</router-link
        >
      </li>
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

a:hover,
li:hover {
  color: rgb(0, 255, 0);
  animation: textShadow 0.51s infinite;
  cursor: pointer;
}
</style>
