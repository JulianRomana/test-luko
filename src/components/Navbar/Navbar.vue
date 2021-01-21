<template>
  <div :class="$style.wrapper">
    <img src="@/assets/luko-logo.svg" alt="luko logo">
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>


<style lang="scss" module>
.wrapper {
  width: 100%;
  padding: 2.4rem 8rem;
}
</style>
