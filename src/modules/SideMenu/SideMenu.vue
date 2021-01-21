<template>
  <div :class="$style.wrapper">
    <span :class="$style.item">
      <img src="@/assets/icons/house.svg" alt="house icon"> 
      <span>Welcome</span>
    </span>
    <span :class="[$style.item, $style.insurance]">
      <img src="@/assets/icons/gift.svg" alt="gift icon"> 
      <span :class="$style.insuranceText">Get free insurance</span>
    </span>
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

.item { 
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.6rem;
}

.insurance {
  color: $blueko;
  margin: 2.4rem 0 4rem;
}
</style>