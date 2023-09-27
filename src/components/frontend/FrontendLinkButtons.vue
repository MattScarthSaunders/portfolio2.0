<script setup lang="ts">
const props = defineProps<{ hostedLink?: string; githubLink?: string }>()
</script>

<template>
  <a
    @click.stop
    class="projectLink"
    :href="props.githubLink"
    target="_blank"
    rel="noopener noreferrer"
    v-if="props.githubLink"
    >Github</a
  >
  <a
    @click.stop
    class="projectLink"
    :href="props.hostedLink"
    target="_blank"
    rel="noopener noreferrer"
    v-if="props.hostedLink"
    >Hosted</a
  >
</template>

<style scoped>
.projectLink {
  text-decoration: none;
  box-shadow:
    inset 0px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -6px 6px 0px 1px rgba(0, 0, 0, 0.3),
    -12px 12px 0px 1px rgba(0, 0, 0, 0.3);
  color: white;
  width: max-content;
  padding: 0.5rem;
  border-radius: 5%;
}

.projectLink:hover {
  box-shadow:
    inset 0 0 2px 1px white,
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(79, 79, 79, 0.3),
    -6px 6px 0px 1px rgba(66, 66, 66, 0.3),
    -12px 12px 0px 1px rgba(53, 53, 53, 0.3);
}

.projectLink:active {
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
}
</style>
