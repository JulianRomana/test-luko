<template>
  <button 
    :class="[$style.wrapper, background]"
    :disabled="disabled"
    @click="$emit('click')" 
  >
    <img :src="getIcon" :class="$style.icon" alt="">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      required: false,
    },
    background: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getIcon() {
      // @TODO refactor
      return require(`../../assets/icons/${this.icon}.svg`)
    },
  },
}
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  color: $white;
  border-radius: 8px;
}

.icon {
  margin-right: 2rem;
}
</style>