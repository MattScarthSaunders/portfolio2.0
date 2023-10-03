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

const handleClickOutside = (event: any) => {
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

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <button class="burger" @click.stop="handleClick"><span></span><span></span><span></span></button>
  <ul ref="burger" :class="{ showMenu: showMenu, hideMenu: !showMenu, list: true }">
    <li>
      <router-link
        to="/"
        @click.stop="
          () => {
            store.chosen = ''
            FEstore.isActive = ''
            BEstore.isActive = ''
          }
        "
        >Home</router-link
      >
    </li>
    <li>
      <router-link
        to="/Frontend"
        @click.stop="
          () => {
            store.chosen = ''
            FEstore.isActive = ''
            BEstore.isActive = ''
          }
        "
        >Frontend</router-link
      >
    </li>
    <li>
      <router-link
        to="/Contact"
        @click.stop="
          () => {
            store.chosen = ''
            FEstore.isActive = ''
            BEstore.isActive = ''
          }
        "
        >Contact</router-link
      >
    </li>
  </ul>
</template>

<style scoped>
.burger {
  position: absolute;
  top: 0;
  right: 0;
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
  border: 1px solid rgb(0, 255, 0);
  background: rgb(0, 255, 0);
  border-radius: 100%;
  line-height: 2rem;
  box-shadow: 0 0 0.5vh rgb(0, 255, 0);
}

.burger:hover > span {
  box-shadow: 0 0 10px 5px rgb(0, 255, 0);
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
  padding-right: 15vw;
}

.showMenu > li,
.showMenu > li > a {
  text-align: right;
  text-decoration: none;
  font-family: 'Terminal';
  font-size: 2rem;
  font-weight: 100;
  opacity: 1;
  width: 30%;
  color: rgba(38, 255, 0, 0.149);
  text-shadow:
    0 0 2px rgba(119, 255, 0, 0.5),
    0 0 5px rgba(89, 255, 0, 0.5);
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
