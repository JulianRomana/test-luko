<template>
  <span :class="[ $style.item, isActive && $style.isActive]">
    <img :src="getIcon" alt=""> 
    <span>
      <slot/>
    </span>
  </span>
</template>

<script>
export default {
  name: 'SideMenuItem',
  props: {
    icon: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    getIcon() {
      // @TODO refactor
      return require(`../../assets/icons/${this.icon}${isActive && '-blue'}.svg`)
    },
  },
}
</script>

<style lang='scss' module>
.item { 
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.6rem;
}

</style>