<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { useControlStore } from '@/stores/appControl'
import { useFEProjStore } from '@/stores/frontendProjects'
import { useBEProjStore } from '@/stores/backendProjects'

const store = useControlStore()
const FEstore = useFEProjStore()
const BEstore = useBEProjStore()

const showMenu = ref(false)
const burger = ref<HTMLElement | null>(null)

const handleClickOutside = () => {
  if (burger.value) {
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

const resetStores = () => {
  store.chosen = ''
  FEstore.isActive = ''
  BEstore.isActive = ''
}

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <button class="burger" @click.stop="handleClick"><span></span><span></span><span></span></button>
  <ul ref="burger" :class="{ showMenu: showMenu, hideMenu: !showMenu, list: true }">
    <li>
      <router-link to="/Frontend" @click.stop="resetStores">Frontend</router-link>
    </li>
    <li>
      <router-link to="/Backend" @click.stop="resetStores">Backend</router-link>
    </li>
  </ul>
</template>

<style scoped>
.burger {
  background: none;
  border: none;
  width: 10vh;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-right: 5px;
}

.burger > span {
  height: 1vh;
  width: 1vh;
  border: 1px solid white;
  background: white;
  border-radius: 100%;
  line-height: 2rem;
  box-shadow: 0 0 0.5vh white;
}

.burger:hover > span {
  box-shadow: 0 0 10px 5px white;
  transition: box-shadow 0.25s ease;
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
  top: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  box-shadow: none;
  pointer-events: none;
  transition:
    opacity 1s ease,
    box-shadow 1s ease;
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
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
  box-shadow: inset -20vw 35vh 60vw -20vw black;
  transition:
    box-shadow 1s ease,
    opacity 1s ease;
  opacity: 1;
  padding-top: 5vh;
  padding-right: 10vw;
}

.showMenu > li,
.showMenu > li > a {
  text-align: right;
  text-decoration: none;
  font-family: 'Tourney';
  font-size: 2rem;
  font-weight: 100;
  opacity: 1;
  width: max-content;
  color: white;
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
