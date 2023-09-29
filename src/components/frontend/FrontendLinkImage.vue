<script setup lang="ts">
import type { AirtableProjectAsset } from '@/types'
import { computed, onMounted, ref } from 'vue'
import { calculateAspectRatioUnitAgnostic } from '../../utils/calcs'

const props = defineProps<{
  hostedLink?: string
  githubLink?: string
  img: AirtableProjectAsset
  smImg: AirtableProjectAsset
}>()

const imgUrl = new URL(`../../assets/images/${props.smImg.filename}`, import.meta.url).href

const bgSmUrl = computed(() => `url('${imgUrl}')`)

const height = ref('')
const width = ref('')

onMounted(() => {
  console.log(imgUrl)
  const { newWidth, newHeight } = calculateAspectRatioUnitAgnostic(
    props.img.width,
    props.img.height,
    40,
    30
  )

  width.value = newWidth + 'vh'
  height.value = newHeight + 'vh'
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
    <div class="bg"></div>
    <img class="projectImg" :src="props.img.url" />
  </a>
</template>

<style scoped>
.imageLink {
  position: relative;
  border-radius: 5%;
  height: v-bind(height);
  width: v-bind(width);
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: v-bind(height);
  width: v-bind(width);
  background-image: v-bind(bgSmUrl);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(5px);
  border-radius: 5%;
}
.projectImg {
  position: absolute;
  top: 0;
  left: 0;
  height: v-bind(height);
  width: v-bind(width);
  box-shadow:
    inset 00px 0px 75px rgba(0, 20, 20, 0.5),
    -2px 2px 0px 1px rgba(0, 0, 0, 0.3),
    -8px 8px 0px 1px rgba(0, 0, 0, 0.3),
    -16px 16px 0px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5%;
  object-fit: contain;
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
</style>
