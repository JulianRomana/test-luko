<template>
  <div :class="$style.wrapper">
    <SideMenuItem 
      icon="home"
      :is-active="$route.name === 'home'"
    >
      Welcome
    </SideMenuItem>
    <SideMenuItem 
      icon="gift"
      :is-active="$route.name === 'insurance'"
    >
      Get free insurance
    </SideMenuItem>
    <Button 
      icon="add-document" 
      background="terracota"
    >
      File a claim
    </Button>
  </div>
</template>

<script>
// @TODO, AVEC ROUTER ET INSURANCE SELECTED
import { Button } from '@/components/Button'

export default {
  name: 'SideMenu',
  components: { Button },
}
</script>

<style lang="scss" module>
.wrapper {

}

.insurance {
  color: $blueko;
  margin: 2.4rem 0 4rem;
}
</style>