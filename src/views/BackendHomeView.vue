<script setup lang="ts">
import BackendButton from '@/components/backendButton.vue'
import ProjectContainer from '@/components/projectContainer.vue'
import { TypeFlow } from 'typeflow-vue'
import { ref } from 'vue'

const buttonPressedId = ref(0)

const portfolioProjects: { [key: string]: any }[] = [
  {
    name: 'proj1',
    commands: [
      ['GET', '/thing1'],
      ['POST', '/thing1/thingy1'],
      ['PATCH', '/thing1/thingy1']
    ],
    url: '/mssdevapi/'
  },
  {
    name: 'proj2',
    commands: [
      ['GET', '/thing2'],
      ['POST', '/thing2/thingy2'],
      ['PATCH', '/thing2/thingy2']
    ],
    url: '/anotherapi/'
  },
  {
    name: 'proj3',
    commands: [
      ['GET', '/thing3'],
      ['POST', '/thing3/thingy3'],
      ['PATCH', '/thing3/thingy3']
    ],
    url: '/yetanotherapi/'
  }
]
</script>

<template>
  <main>
    <section class="description">
      <TypeFlow :charDelay="20"
        ><p class="description">
          To inspect a backend project, please select one from the list below. You can either use
          this built-in explorer or use the links provided to visit the hosted versions and interact
          with them manually. When using the explorer, click on the request buttons to call the api,
          and the result will be shown in the section opposite.
        </p></TypeFlow
      >
    </section>
    <nav class="backendNav">
      <BackendButton
        v-for="(proj, i) in portfolioProjects"
        v-bind:key="proj.name"
        :name="proj.name"
        :projectIndex="i"
        @projName="
          () => {
            buttonPressedId = i
          }
        "
      ></BackendButton>
    </nav>
    <ProjectContainer :project="portfolioProjects[buttonPressedId]"></ProjectContainer>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20rem;
}

.backendNav {
  display: flex;
  gap: 1rem;
}

.description {
  font-size: 1.5rem;
  height: 10rem;
  color: green;
}
</style>
