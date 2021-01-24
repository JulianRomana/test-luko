<template>
  <div :class="$style.wrapper">
    <router-link to="/">
      <img src="@/assets/luko-logo.svg" alt="luko logo">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
}
</script>


<style lang="scss" module>
.wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 2.4rem;

  @media (min-width: 1250px) {
    padding: 2.4rem 8rem;
  }
}
</style>
