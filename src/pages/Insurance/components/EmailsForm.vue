<template>
  <form @submit.prevent :class="$style.form">
    <div>Email addresses</div>
    <textarea
      v-model="emails"
      :class="$style.textarea"
      name="emails"
      cols="30"
      rows="5"
      @keydown.enter="onEnter"
    >
    </textarea>
    <div
      v-if="error.value"
      :class="$style.error"
    >
      {{ error.text }}
    </div>
    <div :class="$style.indications">
      <img src="@/assets/icons/info.svg" alt="info icon">
      <span>Indication that can wrap on multiple lines</span>
    </div>
    <Button
      background="blue"
      :disabled="!canSendInvites"
      @click="sendInvites"
    >
      Send invites
    </Button>
  </form>
</template>

<script>
import { Button } from '@/components/Button'
import { checkEmail, validateEmail } from '@/lib/mail-box-layer'

export default {
  name: 'EmailsForm',
  components: {
    Button,
  },
  data: () => ({
    emails: '',
    error: {
      value: false,
      text: '',
    },
    canSendInvites: false,
  }),
  methods: {
    async onEnter() {
      const emails = this.emails.split('\n')
      const areAllValid = emails.every((email) => validateEmail(email))

      if (!areAllValid) {
        this.error.value = true
        this.error.text = 'Email is invalid'
        this.canSendInvites = false
        return
      }

      try {
        await Promise.all(emails.map(email => checkEmail(email)))
        this.error.value = false
        this.canSendInvites = true
      } catch(error) {
        this.error.value = true
        this.error.text = error
        this.canSendInvites = false
      }
      
    },
    sendInvites() {
      this.emails = ''
    },
  },
}
</script>

<style lang="scss" module>
.form {
  margin-top: 2.4rem;
}
.textarea {
  margin-top: .8rem;
  resize: none;
  width: 100%;
  border: 2px solid $gray-lightest;
  outline: none;
  font-size: 1.6rem;
  color: $gray-lighter;
  padding: 1.2rem 1.6rem;
}

.indications {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: .8rem;
  color: $gray-light;
  margin: .8rem 0 2.4rem;
}

.error {
  margin-top: .8rem;
  color: $terracota;
}
</style>