<script setup lang="ts">
const props = defineProps<{ hostedLink?: string; githubLink?: string; imgSrc: string }>()
</script>

<template>
  <a
    class="imageLink"
    @click.stop
    :href="props.hostedLink || props.githubLink"
    target="_blank"
    rel="noopener noreferrer"
    ><img class="projectImg" :src="props.imgSrc"
  /></a>
</template>

<style scoped>
.imageLink {
  height: max-content;
}

.imageLink:active > img {
  box-shadow:
    inset 0px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -4px 4px 0px 1px rgba(0, 0, 0, 0.3);
  transform: translateX(-0.5rem) translateY(0.5rem);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}
.projectImg {
  height: 20vh;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -8px 8px 0px 1px rgba(0, 0, 0, 0.3),
    -16px 16px 0px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  position: relative;
}
</style>
