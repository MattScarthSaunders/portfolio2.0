<script setup lang="ts"></script>

<template>
  <section>
    <img />
    <p>
      Welcome! Pick a side to see my portfolio work, or use one of the links below to see my github
      and other information
    </p>
    <ul>
      <li><a>linkedIn</a></li>
      <li><a>github</a></li>
      <li><a>CV</a></li>
      <li><a>email</a></li>
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
}
</style>
