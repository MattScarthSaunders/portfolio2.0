<script setup lang="ts">
import { TypeFlow } from 'typeflow-vue'
import backendButtonVue from './backendButton.vue'

const props = defineProps<{ project: { [key: string]: any } }>()
// let str = JSON.stringify(
//   {
//     content:
//       'This is some placeholder content. Imagine its a big impressive paragraph that has a load of interesting data about something cool.',
//     img: 'ducksinarow.jpg',
//     votes: 0,
//     timestamp: new Date()
//   },
//   ['content', 'img', 'votes', 'timestamp'],
//   4
// )

let str = [
  {
    content:
      'This is some placeholder content. Imagine its a big impressive paragraph that has a load of interesting data about something cool.',
    img: 'ducksinarow.jpg',
    votes: '0',
    timestamp: String(new Date())
  }
]

console.log(JSON.stringify(str[0], Object.keys(str[0]), 4))
</script>

<template>
  <section class="backendContainer">
    <section class="apiInteractor">
      <ul class="apiCommandList">
        <li v-for="(command, i) in props.project.commands" v-bind:key="command[i]">
          <backendButtonVue :name="command[0]" :projectIndex="i"></backendButtonVue>
          <label class="apiButtonLabel">{{ command[1] }}</label>
        </li>
      </ul>
    </section>
    <section class="apiVisualiser">
      <div v-for="item in str" v-bind:key="item.timestamp">
        <TypeFlow :charDelay="10"
          ><p>{{ JSON.stringify(item, Object.keys(item), 4) }}</p></TypeFlow
        >
      </div>
      <br />
    </section>
  </section>
</template>

<style scoped>
.apiInteractor,
.apiVisualiser {
  min-width: 45vw;
  border: 1px solid green;
  color: green;
  padding: 1rem;
}

.apiInteractor {
  height: max-content;
}

.apiVisualiser {
  font-size: 1.5rem;
}

.apiCommandList {
  list-style: none;
}

.apiCommandList li {
  margin: 1rem 0;
}

.apiButtonLabel {
  color: green;
  padding-left: 1rem;
}

.backendContainer {
  padding-top: 2rem;
  display: flex;
  gap: 2rem;
  overflow: visible;
  font-size: 2rem;
}
</style>
