<script setup lang="ts"></script>

<template>
  <section>
    <img />
    <p>Welcome! Pick a side to see my portfolio work. Use the links below to get in touch.</p>
    <ul>
      <li><a href="https://www.linkedin.com/in/matthew-scarth-saunders/">linkedIn</a></li>
      <li><a href="https://github.com/MattScarthSaunders">github</a></li>
      <li><a href="">CV</a></li>
      <li><a href="">email</a></li>
    </ul>
  </section>
</template>

<style scoped>
img {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
}
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
  transform: skew(-15deg);
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-left: 1rem;
  width: 100%;
  justify-content: center;
}
a {
  text-decoration: none;
}
p {
  text-align: center;
}
</style>
