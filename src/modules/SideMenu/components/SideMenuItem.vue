<template>
  <router-link 
    :to="to" 
    :class="[
      $style.item, 
      isActive && $style.isActive
    ]"
  >
    <img :class="$style.icon" :src="getIcon" alt="">
    <span :class="$style.text">
      <slot/>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'SideMenuItem',
  props: {
    to: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getIcon() {
      return this.isActive 
        ? require(`../../../assets/icons/${this.icon}-blue.svg`)
        : require(`../../../assets/icons/${this.icon}.svg`)
    },
  },
}
</script>

<style lang='scss' module>
.item { 
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  color: $gray-darker;
  padding: 1.2rem 2.4rem;
}

.icon {
  width: 2.4rem;
  height: 2.4rem;
}

.isActive {
  color: $blueko;
}

.text {
  white-space: nowrap;
}

</style>