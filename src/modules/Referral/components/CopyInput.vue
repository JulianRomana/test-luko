<template>
  <div :class="$style.wrapper">
    <input 
      v-model="link"
      :class="$style.input"
      ref="input"
      type="text"
      readonly
    >
    <div :class="$style.buttonWrapper">
      <Button 
        background="blue" 
        @click="copyLink"
      >
        Copy invite link
      </Button>
      <transition name="fade-in">
        <div 
          v-if="notification.showNotification"
          :class="[
            $style.notification,
            notification.error && $style.error
          ]"
        >
          {{ notification.content }}
        </div>
      </transition>
    </div>
    <template v-if="$mq === 'md'">
      <a
        :class="$style.socialMediaIcon" 
        target="_blank"
        href="https://web.whatsapp.com/"
      >
        <img 
          src="@/assets/icons/whatsapp.svg" 
          alt="whatsapp icon"
      >
      </a>
      <a
        :class="$style.socialMediaIcon" 
        target="_blank"
        href="https://messenger.com/"
      >
        <img 
          src="@/assets/icons/messenger.svg" 
          alt="messenger icon"
        >
      </a>
      <a
        :class="$style.socialMediaIcon" 
        target="_blank"
        href="https://facebook.com/"
      >
        <img 
          src="@/assets/icons/facebook.svg" 
          alt="facebook icon"
        >
      </a>
    </template>
  </div>
</template>

<script>
import { Button } from '@/components/Button'

export default {
  name: 'CopyInput',
  components: { Button },
  data: () => ({ 
    link: 'https://luko.eu/join/luko@email.com',
    notification: {
      showNotification: false,
      content: '',
      error: false,
    },
  }),
  methods: {
    async copyLink() {
      try {
        await navigator.clipboard.writeText(this.link)

        this.notification.showNotification = true
        this.notification.content = 'Copied to clipboard !'
      } catch (e) {
        this.notification.showNotification = true
        this.notification.content = 'Failed to copy to clipboard'
        this.error = true
      } finally {
        setTimeout(() => { this.notification.showNotification = false }, 2000)
      }
    },
  },
}
</script>

<style lang="scss" module>

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;
  margin-top: 3.2rem;
  
  @media (min-width: 1250px) {
    flex-direction: row;
    align-items: center;
  }
}

.input {
  max-width: 405px;
  width: 100%;
  padding: 1.2rem 1.6rem;
  color: $blueko;
  font-size: 1.6rem;
  border: 2px solid $gray-lightest;
  border-radius: 8px;
  outline: none;
}

.buttonWrapper {
  position: relative;
  margin-left: .8rem;
}

.notification {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 10%);
  padding: .8rem;
  color: $white;
  background-color: #2CC1A5;
  font-size: 1rem;
  white-space: nowrap;
}

.notification.error {
  background: $terracota;
}

.socialMediaIcon {
  margin-left: .8rem;
}
</style>