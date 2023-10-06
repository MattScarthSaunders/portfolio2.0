<script setup lang="ts">
import { useControlStore } from '@/stores/appControl'

const controlStore = useControlStore()
</script>

<template>
  <transition name="fade">
    <div
      v-if="controlStore.modalActive"
      @click.stop="controlStore.modalActive = false"
      class="modal"
    >
      <img
        class="projectImgModal"
        :src="controlStore.modalSource"
        @click.stop="controlStore.modalActive = false"
      />
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.666);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vh;
  z-index: 999;
}

.projectImgModal {
  max-height: 100%;
  max-width: 100%;
}

@media screen and (max-width: 900px) {
  .modal {
    padding: 0;
  }
  .projectImgModal {
    max-height: 90%;
    padding-bottom: 5vh;
  }
}
</style>
