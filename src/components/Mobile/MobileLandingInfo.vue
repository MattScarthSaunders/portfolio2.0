<script setup lang="ts"></script>

<template>
  <section>
    <img src="../../assets/images/profile.jpeg" />
    <p>
      Welcome! Use the menu to navigate to my portfolio projects, or tap a link to get in touch.
    </p>
    <div class="linkWrapper">
      <a
        class="linkedin"
        href="https://www.linkedin.com/in/matthew-scarth-saunders/"
        target="_blank"
        rel="noreferrer"
        ><img src="../../assets/icons/linkedin.png"
      /></a>
      <a
        class="github"
        href="https://github.com/MattScarthSaunders"
        target="_blank"
        rel="noreferrer"
        ><img src="../../assets/icons/github.png"
      /></a>
      <a class="mail" href="mailto:m.scarsaund@gmail.com"
        ><img src="../../assets/icons/email.png"
      /></a>
      <a class="cv" href=""><p>CV</p></a>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
}

img {
  width: 50vw;
  height: 50vw;
  border-radius: 100%;
  border: 6px solid black;
  box-shadow: 0 0 5px black;
}

p {
  text-align: center;
  padding: 0 2rem;
}

.linkWrapper {
  display: flex;
  gap: 10px;
}

a {
  text-decoration: none;
  color: black;
  width: 10vw;
  height: 10vw;
  animation: linkScale 1s;
}

a > img {
  border: none;
  width: 10vw;
  height: 10vw;
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

a > p {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
  margin: 0;
  text-shadow: 0 0 1px black;
}

.linkedin {
  top: 1vh;
  left: 3.75vw;
  animation-delay: 1.1s;
}

.github {
  top: 1vh;
  right: 4.75vw;
  animation-delay: 1.2s;
}

.mail {
  bottom: 12vh;
  left: 3.75vw;
  animation-delay: 1s;
}

.cv {
  bottom: 10vh;
  right: 3.75vw;
  border: 4px solid black;
  border-radius: 100%;
  width: 10vw;
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-delay: 1.3s;
}
</style>
