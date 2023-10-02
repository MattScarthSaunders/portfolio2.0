<script setup lang="ts">
import FrontendBEbutton from '@/components/Frontend/FrontendBEbutton.vue'
import ContactView from './ContactView.vue'
import FrontendBurgerMenu from '@/components/Frontend/FrontendBurgerMenu.vue'

const greeting = `Get in touch!`
</script>

<template>
  <main>
    <ContactView :greeting="greeting"></ContactView>
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
  justify-content: center;
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
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3);
  transform: skew(15deg);
  padding: 2rem;
  border-radius: 2%;
}

::v-deep(label) {
  color: var(--BE-color);
  font-size: 2rem;
}

::v-deep(input),
::v-deep(textarea),
::v-deep(button) {
  font-size: 2rem;
  border: none;
  background: transparent;
  color: white;
  text-shadow: 0 0 2px white;
}

::v-deep(input:focus),
::v-deep(textarea:focus) {
  outline: none !important;
}

::v-deep(.wrapper) {
  display: flex;
  gap: 1vw;
  position: relative;
}

::v-deep(button) {
  width: 10vw;
  height: 5vh;
  margin-left: 10vw;
  box-shadow:
    inset 0px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -6px 6px 0px 1px rgba(0, 0, 0, 0.3),
    -12px 12px 0px 1px rgba(0, 0, 0, 0.3);
}

::v-deep(button:hover, button:focus) {
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

::v-deep(button:active) {
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
::v-deep(label) {
  width: 9vw;
  text-align: right;
  color: white;
}
::v-deep(input) {
  width: 20vw;
}
::v-deep(textarea) {
  width: 20vw;
  height: 20vh;
}
::v-deep(input::placeholder),
::v-deep(textarea::placeholder) {
  color: white;
}
::v-deep(.error::placeholder) {
  font-size: 1.5rem;
  color: red;
  align-self: center;
  position: absolute;
}
::v-deep(.instruction) {
  color: white;

  padding-bottom: 3vh;
  font-size: 2rem;
}
::v-deep(.emailSent),
::v-deep(.sendingWrapper) {
  position: absolute;
  bottom: 20vh;
  width: 100%;
  text-align: center;
  margin-left: 1rem;
  color: white;
  font-size: 1.5rem;
}
::v-deep(.emailError) {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 20vh;
  color: red;
  font-size: 1.5rem;
  margin-left: 1rem;
}
::v-deep(nav) {
  display: none;
}
/* ::v-deep(ul) {
  display: flex;
  gap: 2rem;
  list-style: none;
}
::v-deep(li) {
  font-family: 'Terminal';
  font-size: 2rem;
  color: var(--BE-color);
  animation: textShadow 0.51s infinite;
}
::v-deep(li:hover),
::v-deep(a:hover) {
  color: rgb(0, 255, 0);
  animation: textShadow 0.51s infinite;
  cursor: pointer;
}
::v-deep(a) {
  text-decoration: none;
  font-family: 'Terminal';
  font-size: 2rem;
  color: var(--BE-color);
} */
</style>
