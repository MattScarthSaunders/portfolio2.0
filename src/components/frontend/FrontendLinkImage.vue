<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from 'vue'

const props = defineProps<{
  hostedLink?: string
  githubLink?: string
  imgSrc: string
  bgSrc: string
}>()

const urlString = computed(() => `url('${props.bgSrc}')`)
const loaded = ref(false)
const sourceValue = ref(props.bgSrc)

function checkImageLoad() {
  const imgElement = document.getElementById(props.imgSrc) as HTMLImageElement
  if (imgElement) {
    if (imgElement.complete) {
      loaded.value = true
      sourceValue.value = props.imgSrc
    } else {
      setTimeout(checkImageLoad, 100)
    }
  }
}

onMounted(() => {
  checkImageLoad()
})
</script>

<template>
  <a
    class="imageLink"
    @click.stop
    :href="props.hostedLink || props.githubLink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img :id="props.imgSrc" :class="{ loading: !loaded, projectImg: loaded }" :src="sourceValue" />
  </a>
</template>

<style scoped>
.imageLink {
  height: 80%;
  width: 100%;
  border-radius: 5%;
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
  max-width: 100%;
  max-height: 30vh;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -8px 8px 0px 1px rgba(0, 0, 0, 0.3),
    -16px 16px 0px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
}

.loading {
  max-width: 100%;
  max-height: 30vh;
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -8px 8px 0px 1px rgba(0, 0, 0, 0.3),
    -16px 16px 0px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  filter: blur(10px);
}
</style>
