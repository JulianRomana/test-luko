<template>
  <div :class="$style.wrapper">
    <SideMenuItem
      icon="house"
      to="/"
      :is-active="$route.name === 'landing'"
    >
      Welcome
    </SideMenuItem>
    <SideMenuItem
      icon="gift"
      to="/insurance"
      :is-active="$route.name === 'insurance'"
    >
      Get free insurance
    </SideMenuItem>
    <Button
      :class="$style.button"
      icon="add-document"
      background="terracota"
    >
      File a claim
    </Button>
  </div>
</template>

<script>
import { Button } from '@/components/Button'
import SideMenuItem from './components/SideMenuItem'

export default {
  name: 'SideMenu',
  components: {
    Button,
    SideMenuItem,
  },
}
</script>

<style lang="scss" module>
.wrapper {
  padding-right: 3.2rem;
}

.button {
  margin-top: 4rem;
}
</style>