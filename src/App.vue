<template>
  <div id="app">
    <body>
      <Navbar />
      <main :class="$style.main">
        <SideMenu />
        <Referral />
      </main>
    </body>
  </div>
</template>

<script>
import { Referral } from '@/modules/Referral'
import { Navbar } from '@/components/Navbar'
import { SideMenu } from '@/modules/SideMenu'

export default {
  name: 'App',
  components: {
    SideMenu,
    Referral,
    Navbar,
  },
}
</script>

<style lang="scss" module>
.main {
  display: flex;
}
</style>
