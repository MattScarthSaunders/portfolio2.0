<script setup lang="ts">
import ContactView from '../ContactView.vue'
import FrontendBurgerMenu from '@/components/Frontend/FrontendBurgerMenu.vue'

const instruction = `Get in touch!`
</script>

<template>
  <main>
    <ContactView :instruction="instruction" :typing="false"></ContactView>
    <FrontendBurgerMenu></FrontendBurgerMenu>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation:
    gradient 60s ease infinite,
    fade-in 1s ease;
  box-shadow: inset 0 -30vh 250px 0 black;
}

/* disable these as they're backend-only */
::v-deep(.crt) {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: none;
}

::v-deep(.crt::after) {
  background: transparent;
  animation: none;
}

::v-deep(.crt::before) {
  background: transparent;
  animation: none;
}

/* end of backend-only */

::v-deep(form) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: skew(15deg);
  border-radius: 2%;
  width: 35vw;
  padding-top: 3vh;
}

::v-deep(label) {
  color: var(--BE-color);
  font-size: 1.5rem;
  text-align: left;
  color: white;
  text-shadow:
    0 0 4px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 1);
  width: 100%;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 60s infinite;
  padding: 0.5rem;
}

::v-deep(input),
::v-deep(textarea),
::v-deep(form > button) {
  font-size: 1.5rem;
  border: none;
  background: transparent;
  color: white;
  text-shadow: 0 0 2px white;
  border-radius: 2%;
}

::v-deep(input:focus),
::v-deep(textarea:focus) {
  outline: none !important;
  box-shadow: inset 0 0 10px white;
}

::v-deep(input:hover),
::v-deep(textarea:hover) {
  outline: none !important;
  box-shadow: inset 0 0 10px white;
}

::v-deep(.wrapper) {
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  border-radius: 2%;
}

::v-deep(form > button) {
  width: 10vw;
  height: 5vh;
  box-shadow:
    inset 0px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -6px 6px 0px 1px rgba(0, 0, 0, 0.3),
    -12px 12px 0px 1px rgba(0, 0, 0, 0.3);
  align-self: flex-end;
}

::v-deep(form > button:hover),
::v-deep(form > button:focus) {
  cursor: pointer;
  box-shadow:
    inset 0 0 2px 1px white,
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(79, 79, 79, 0.3),
    -6px 6px 0px 1px rgba(66, 66, 66, 0.3),
    -12px 12px 0px 1px rgba(53, 53, 53, 0.3);
  text-shadow:
    0 0 2px white,
    0 0 10px white;
}

::v-deep(form > button:active) {
  box-shadow:
    inset 0 0 2px 1px white,
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(79, 79, 79, 0.3),
    -4px 4px 0px 1px rgba(66, 66, 66, 0.3),
    -6px 6px 15px rgba(162, 162, 162, 0.3);
  transform: translateX(-0.5rem) translateY(0.5rem);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  animation: none;
  text-shadow:
    0 0 2px white,
    0 0 10px white;
}

::v-deep(input) {
  border-radius: 2%;
  text-shadow: 0 0 4px rgba(255, 255, 255, 1);
  width: 100%;
  height: 5vh;
  padding: 0.5rem 1rem;
}

::v-deep(textarea) {
  font-size: 1.2rem;
  border-radius: 2%;
  padding: 0.5rem 1rem;
  height: 20vh;
  text-shadow: 0 0 4px rgba(255, 255, 255, 1);

  width: 100%;
  resize: none;
  scrollbar-color: green rgb(11, 46, 22);
}

::v-deep(input::placeholder),
::v-deep(textarea::placeholder) {
  color: rgba(255, 255, 255, 0.567);
  text-shadow: none;
}

::v-deep(.error::placeholder) {
  font-size: 1.5rem;
  color: rgb(255, 104, 104);
  text-shadow: 0 0 4px rgb(255, 0, 0);
  align-self: center;
  position: absolute;
}
::v-deep(.instruction) {
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 2px rgba(255, 255, 255, 1),
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 255, 255, 1),
    0 0 40px rgba(255, 255, 255, 1);
  font-family: 'Tourney';
  transform: translateX(-15vw) skew(15deg);
  font-size: 2rem;
  font-weight: 100;
  animation: flickerLoad 10s infinite;
  margin-bottom: -2vh;
  margin-left: -2vw;
}
::v-deep(.emailSent),
::v-deep(.sendingWrapper) {
  position: absolute;
  bottom: 20vh;
  width: 100%;
  text-align: center;
  margin-left: 10vw;
  color: white;
  font-size: 1.5rem;
  transform: skew(15deg);
}
::v-deep(.emailError) {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 20vh;
  color: rgb(255, 104, 104);
  text-shadow: 0 0 4px rgb(255, 0, 0);
  font-size: 1.5rem;
  margin-left: 10vw;

  transform: skew(15deg);
}
::v-deep(nav) {
  display: none;
}
</style>
