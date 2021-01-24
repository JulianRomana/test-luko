<template>
  <form @submit.prevent :class="$style.form">
    <div>Email addresses</div>
    <textarea :class="$style.textarea" name="" id="" cols="30" rows="10">
    </textarea>
    <div :class="$style.indications">
      <img src="@/assets/icons/info.svg" alt="">
      <span>Indication that can wrap on multiple lines</span>
    </div>
    <Button disabled>
      Send invites
    </Button>
  </form>
</template>

<script>
import { Button } from '@/components/Button'

export default {
  name: 'EmailsForm',
  components: {
    Button,
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
}

.indications {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: .8rem;
  color: $gray-light;
  margin: .8rem 0 2.4rem;
}
</style>