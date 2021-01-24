<template>
  <div id="app">
    <body>
      <Navbar />
      <main :class="$style.main">
        <SideMenu v-if="this.$mq === 'lg'" />
        <router-view />
      </main>
    </body>
  </div>
</template>

<script>
import { Navbar } from '@/components/Navbar'
import { SideMenu } from '@/modules/SideMenu'

export default {
  name: 'App',
  components: { Navbar, SideMenu },
}
</script>

<style lang="scss" module>
.main {
  display: grid;
  grid-gap: 18rem;
  grid-auto-flow: column;
  justify-content: center;
  padding: $navbar-height 2.4rem 0;

  @media (min-width: 1250px) {
    justify-content: unset;
    padding: $navbar-height 18rem 0;
  }
}
</style>
