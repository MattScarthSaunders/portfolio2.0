<script setup lang="ts"></script>

<template>
  <section>
    <a
      class="linkedin"
      href="https://www.linkedin.com/in/matthew-scarth-saunders/"
      target="_blank"
      rel="noreferrer"
      ><img src="../assets/icons/linkedin.png"
    /></a>
    <a class="github" href="https://github.com/MattScarthSaunders" target="_blank" rel="noreferrer"
      ><img src="../assets/icons/github.png"
    /></a>
    <a class="mail" href="mailto:m.scarsaund@gmail.com"><img src="../assets/icons/email.png" /></a>
    <a class="cv" href="">CV</a>

    <img src="../assets/images/profile.jpeg" />
    <p>Welcome! Pick a side to see my portfolio work. Use the links above to get in touch.</p>
  </section>
</template>

<style scoped>
section {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: skew(-15deg);
}

img {
  width: 8vw;
  height: 8vw;
  border-radius: 100%;
  border: 6px solid black;
  box-shadow: 0 0 5px black;
}

a {
  text-decoration: none;
  color: black;
  position: absolute;
  width: 1vw;
  height: 1vw;
  animation: linkScale 1s;
}

a > img {
  border: none;
  width: 2vw;
  height: 2vw;
  box-shadow: none;
}

a:hover {
  transform: scale(1.1);
  transition: transform 0.25s;
}

a:active {
  transform: scale(0.8);
  transition: transform 0.25s;
}

p {
  text-align: center;
  margin-left: 2rem;
}

.mail {
  bottom: 50%;
  left: 20%;
  animation-delay: 1s;
}

.linkedin {
  top: 10%;
  left: 19%;
  animation-delay: 1.1s;
}

.github {
  top: 10%;
  right: 24.5%;
  animation-delay: 1.2s;
}

.cv {
  bottom: 42%;
  right: 20%;
  border: 4px solid black;
  border-radius: 100%;
  width: 2vw;
  height: 2vw;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-delay: 1.3s;
}
</style>
