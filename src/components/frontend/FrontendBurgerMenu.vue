<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import FrontendBEbutton from './FrontendBEButton.vue'
import { useControlStore } from '@/stores/appControl'
import { useFEProjStore } from '@/stores/frontendProjects'

const store = useControlStore()
const FEstore = useFEProjStore()

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
  <button class="burger" @click.stop="handleClick">
    <span>.</span><span>.</span><span>.</span>
  </button>
  <ul ref="burger" :class="{ showMenu: showMenu, hideMenu: !showMenu, list: true }">
    <li>CV</li>
    <li>
      <router-link
        to="/Frontend/Contact"
        @click="
          () => {
            store.chosen = ''
            FEstore.isActive = ''
          }
        "
        >Contact</router-link
      >
    </li>
    <li>
      <router-link
        to="/"
        @click="
          () => {
            store.chosen = ''
            FEstore.isActive = ''
          }
        "
        >Home</router-link
      >
    </li>
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

.burger > span {
  font-family: 'Tourney';
  font-size: 3rem;
}

.burger:hover > span {
  text-shadow:
    0 0 2px white,
    0 0 10px white,
    0 0 15px white,
    0 0 25px white;
  transition: text-shadow 0.25s ease;
}

.burger:hover > span:nth-child(1) {
  transition-delay: 0.25s;
}
.burger:hover > span:nth-child(2) {
  transition-delay: 0.5s;
}
.burger:hover > span:nth-child(3) {
  transition-delay: 1s;
}

.list {
  font-size: 2rem;
  font-family: 'Tourney';
  opacity: 0;
  transition: opacity 0.25s ease;
  position: absolute;
  display: flex;
  color: transparent;
}

a {
  text-shadow: none;
  text-decoration: none;
  color: transparent;
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
  transition: opacity 0.25s ease;
}

.hideMenu > li,
.hideMenu > li > a {
  opacity: 0;
  transition: opacity 1s ease;
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
.showMenu > li,
.showMenu > li > a {
  text-decoration: none;
  font-family: 'Tourney';
  font-size: 2rem;
  font-weight: 100;
  opacity: 1;
  width: 30%;
  color: rgba(255, 255, 255, 0.149);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 0.5),
    0 0 5px rgba(255, 255, 255, 0.5);
}

.showMenu > li:hover,
.showMenu > li > a:hover {
  color: white;
  text-shadow:
    0 0 2px white,
    0 0 10px white,
    0 0 20px white,
    0 0 40px white;
  cursor: pointer;
}
</style>
