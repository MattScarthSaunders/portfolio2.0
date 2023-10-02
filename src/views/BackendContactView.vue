<script setup lang="ts">
import ContactView from './ContactView.vue'

const instruction = `[admin] </guest/contact> Get in touch!`
</script>

<template>
  <main>
    <ContactView :instruction="instruction" :typing="true"></ContactView>
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
  background-color: var(--BE-bg-color);
}

::v-deep(.crt) {
  animation: textShadow 10.6s infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
::v-deep(.crt::after) {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
  box-shadow: inset 0 0 10rem black;
}
::v-deep(.crt::before) {
  content: ' ';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size:
    100% 2px,
    3px 100%;
  pointer-events: none;
}

::v-deep(form) {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
::v-deep(label) {
  color: var(--BE-color);
  font-size: 2rem;
}
::v-deep(input),
::v-deep(textarea),
::v-deep(button) {
  font-size: 2rem;
  color: var(--BE-color);
  border: 1px solid green;
  background-color: var(--BE-bg-color);
}
::v-deep(input:focus),
::v-deep(textarea:focus) {
  outline: none !important;
  border: 1px solid rgb(0, 255, 0);
  box-shadow: 0 0 10px green;
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
}
::v-deep(button:hover, button:focus) {
  cursor: pointer;
  background-color: rgb(23, 48, 9);
}
::v-deep(button:active) {
  border: 1px solid rgba(255, 255, 255, 0);
}
::v-deep(label) {
  width: 9vw;
  text-align: right;
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
  color: rgba(0, 128, 0, 0.527);
}
::v-deep(.error::placeholder) {
  font-size: 1.5rem;
  color: red;
  align-self: center;
  position: absolute;
}
::v-deep(.instruction) {
  color: green;
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
  color: rgb(0, 255, 0);
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
  position: absolute;
  bottom: 4vh;
}
::v-deep(ul) {
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
}

::v-deep(::-webkit-scrollbar) {
  width: 6px;
  height: 6px;
}
::v-deep(::-webkit-scrollbar-button) {
  width: 0px;
  height: 0px;
}
::v-deep(::-webkit-scrollbar-thumb) {
  background: #00940a;
  animation: textShadow 1.6s infinite;
}
::v-deep(::-webkit-scrollbar-thumb:hover) {
  background: #00b30c;
  animation: textShadow 1.6s infinite;
}
::v-deep(::-webkit-scrollbar-thumb:active) {
  background: #0ba300;
  animation: textShadow 1.6s infinite;
}
::v-deep(::-webkit-scrollbar-track) {
  background: #0a3305;
  animation: textShadow 1.6s infinite;
}
::v-deep(::-webkit-scrollbar-track:hover) {
  background: #0a3305;
  animation: textShadow 1.6s infinite;
}
::v-deep(::-webkit-scrollbar-track:active) {
  background: #0a3305;
  animation: textShadow 1.6s infinite;
}
::v-deep(::-webkit-scrollbar-corner) {
  background: transparent;
  animation: textShadow 1.6s infinite;
}
</style>
