<template>
  <Referral />
</template>

<script>
import { Referral } from '@/modules/Referral'

export default {
  name: 'Insurance',
  components: {
    Referral,
  },
  mounted() {
    console.log('mounted')
  },
}
</script>

<style lang="scss" module>

</style>