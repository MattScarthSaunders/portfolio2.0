<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import FrontendBEbutton from './FrontendBEButton.vue'

const showMenu = ref(false)
const burger = ref<HTMLElement | null>(null)

const handleClickOutside = (event: any) => {
  if (burger.value && !burger.value.contains(event.target)) {
    showMenu.value = false
    window.removeEventListener('click', handleClickOutside)
  }
}

const handleClick = () => {
  if (!showMenu.value) {
    window.addEventListener('click', handleClickOutside)
  }
  showMenu.value = !showMenu.value
}

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <button class="burger" @click.stop="handleClick">...</button>
  <ul ref="burger" :class="{ showMenu: showMenu, hideMenu: !showMenu }">
    <li>CV</li>
    <li>Contact</li>
    <li><FrontendBEbutton></FrontendBEbutton></li>
  </ul>
</template>

<style scoped>
.burger {
  position: absolute;
  bottom: 3%;
  right: 2%;
  background: none;
  border: none;
  border: none;
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white;
  font-family: 'Tourney';
  font-size: 3rem;
}

.hideMenu {
  position: absolute;
  list-style: none;
  right: 0;
  height: 100vh;
  width: 40vw;
  opacity: 0;
  box-shadow: inset -30vw 0 50vw -20vw black;
  pointer-events: none;
  transition: opacity 1s ease;
}

.hideMenu > li {
  opacity: 0;
  transition: opacity 1s ease;
}

.showMenu > li {
  font-family: 'Tourney';
  font-size: 2rem;
  font-weight: 100;
  width: 30%;
  color: rgba(255, 255, 255, 0.149);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 0.5),
    0 0 5px rgba(255, 255, 255, 0.5);
}

.showMenu > li:hover {
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white,
    0 0 20px white,
    0 0 40px white;
  cursor: pointer;
}

.showMenu {
  position: absolute;
  list-style: none;
  position: absolute;
  right: 0;
  height: 100vh;
  width: 40vw;
  bottom: 10vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: inset -30vw 0 50vw -20vw black;
  transition:
    box-shadow 1s ease,
    opacity 1s ease;
  opacity: 1;
}
</style>
