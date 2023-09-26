<script setup lang="ts">
import { useNavStore } from '@/stores/nav'
const store = useNavStore()
</script>

<template>
  <nav>
    <ul>
      <li
        @click="
          () => {
            store.setSelected('about', 'be')
          }
        "
      >
        About
      </li>
      <li
        @click="
          () => {
            store.setSelected('cv', 'be')
          }
        "
      >
        CV
      </li>
      <li
        @click="
          () => {
            store.setSelected('contact', 'be')
          }
        "
      >
        Contact
      </li>
    </ul>
  </nav>
</template>

<style scoped>
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
