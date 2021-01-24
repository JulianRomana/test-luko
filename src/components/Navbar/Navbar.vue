<template>
  <div :class="$style.wrapper">
    <router-link to="/">
      <img src="@/assets/luko-logo.svg" alt="luko logo">
    </router-link>
    <div
      v-if="['sm', 'md'].includes($mq)"
      :class="$style.icons"
    >
      <router-link to="/">
        <img
          src="@/assets/icons/house.svg"
          alt=""
        >
      </router-link>
      <router-link to="/insurance">
        <img src="@/assets/icons/gift.svg" alt="">
      </router-link>
    </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.4rem;

  @media (min-width: 1250px) {
    padding: 2.4rem 8rem;
  }
}

.icons {
  display: grid;
  gap: 2.4rem;
  grid-auto-flow: column;
  align-items: center;
}
</style>
