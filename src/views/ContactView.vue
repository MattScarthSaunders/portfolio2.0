<script setup lang="ts">
import axios from 'axios'
import { TypeFlow } from 'typeflow-vue'
import { reactive, ref } from 'vue'
import { useControlStore } from '@/stores/appControl'
import { useBEProjStore } from '@/stores/backendProjects'
import { useFEProjStore } from '@/stores/frontendProjects'

defineProps<{ instruction: string; typing: boolean }>()

const controlStore = useControlStore()
const BEstore = useBEProjStore()
const FEstore = useFEProjStore()

const name = ref('')
const namePlaceholder = ref('e.g Bob Smith')

const email = ref('')
const emailPlaceholder = ref('e.g human@gmail.com')

const subject = ref('')
const subjectPlaceholder = ref('e.g Work Enquiry')

const message = ref('')
const messagePlaceholder = ref('Your message here...')

const validationErrors = reactive({ name: false, email: false, message: false })

const sending = ref(false)
const emailSent = ref(false)
const emailError = ref(false)

const initialiseValues = () => {
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}

const formHandler = async () => {
  if (!name.value) {
    validationErrors.name = true
    namePlaceholder.value = 'Please input your name.'
  } else {
    validationErrors.name = false
    namePlaceholder.value = 'e.g Bob Smith'
  }

  if (!email.value) {
    validationErrors.email = true
    emailPlaceholder.value = 'Please input your email address.'
  } else {
    validationErrors.email = false
    emailPlaceholder.value = 'e.g human@gmail.com'
  }

  if (!message.value) {
    validationErrors.message = true
    messagePlaceholder.value = 'Please input a message.'
  } else {
    validationErrors.message = false
    messagePlaceholder.value = 'Your message here...'
  }

  if (message.value && name.value && email.value) {
    sending.value = true
    const endpoint = import.meta.env.VITE_FORMSPREE_URL

    const data = {
      from: email.value,
      _subject: subject.value,
      name: name.value,
      message: message.value
    }

    try {
      await axios.post(endpoint, data)
      sending.value = false
      emailSent.value = true
      initialiseValues()
    } catch (err) {
      if (err) {
        sending.value = false
        emailError.value = true
      }
    }
  }
}
</script>

<template>
  <main>
    <div class="crt">
      <TypeFlow :charDelay="50" v-if="typing">
        <pre class="instruction">{{ instruction }}</pre>
      </TypeFlow>
      <pre v-else class="instruction">{{ instruction }}</pre>
      <form @submit.prevent="formHandler">
        <div class="wrapper">
          <label htmlFor="nameInput">Full Name:</label>
          <input
            :class="{ error: validationErrors.name }"
            id="nameInput"
            type="text"
            name="name"
            :placeholder="namePlaceholder"
            v-model="name"
          />
        </div>
        <div class="wrapper">
          <label htmlFor="emailInput">Email:</label>
          <input
            :class="{ error: validationErrors.email }"
            id="emailInput"
            type="text"
            name="email"
            :placeholder="emailPlaceholder"
            v-model="email"
          />
        </div>
        <div class="wrapper">
          <label htmlFor="subjectInput">Subject:</label>
          <input
            id="subjectInput"
            type="text"
            name="subject"
            :placeholder="subjectPlaceholder"
            v-model="subject"
          />
        </div>
        <div class="wrapper">
          <label htmlFor="messageInput">Message:</label>
          <textarea
            :class="{ error: validationErrors.message }"
            id="messageInput"
            name="message"
            :placeholder="messagePlaceholder"
            v-model="message"
          ></textarea>
        </div>
        <button type="submit" name="submit">Send Mail</button>
      </form>
      <TypeFlow v-if="sending" class="sendingWrapper">
        <p class="sending">Sending...</p>
      </TypeFlow>
      <p class="emailSent" v-else-if="emailSent && !sending">
        Thanks for the email! I'll respond as soon as I can.
      </p>
      <p class="emailError" v-else-if="emailError && !sending">
        Unfortunately your email couldn't be sent right now. Please try again!
      </p>
      <nav>
        <ul>
          <li>
            <router-link
              to="/Frontend"
              @click="
                () => {
                  controlStore.chosen = 'FE'
                  FEstore.isActive = ''
                  BEstore.isActive = ''
                }
              "
              >Frontend</router-link
            >
          </li>
          <li>
            <router-link
              to="/"
              @click="
                () => {
                  controlStore.chosen = ''
                  FEstore.isActive = ''
                  BEstore.isActive = ''
                }
              "
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/Backend"
              @click="
                () => {
                  controlStore.chosen = ''
                  FEstore.isActive = ''
                  BEstore.isActive = ''
                }
              "
              >Backend</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </main>
</template>
