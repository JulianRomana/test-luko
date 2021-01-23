<template>
  <div :class="$style.wrapper">
    <section :class="$style.insurance">
      <h2 :class="$style.insuranceTitle">Get free insurance</h2>
      <p :class="$style.insuranceParagraph">
        Invite friends and family to get better insurance, you will both get a nice discount. 
        Referees without an invite link will have to enter your email address on the payment page.
      </p>
      <CopyInput />
    </section>
    <section :class="$style.invitation">
      <h3 :class="$style.invitationTitle">Send invites to friends and family</h3>
      <p :class="$style.invitationParagraph">
        We won’t sell, share or use these addresses other than to invite them, we’d hate that too. 
        To invite multiple at once, input one address per line. 
      </p>
      <EmailsForm />
    </section>
    <section :class="$style.homeProtection">
      <div>
        <h4 :class="$style.homeProtectionTitle">Luko also protects your home</h4>
        <p :class="$style.homeProtectionParagraph">
          Non-occupying homeowners and PEV riders get 1 year of free PEV or 
          non-occupying homeowner insurance when insuring their main home with Luko! 
        </p>
        <Button background="blue-light">Get my home insured</Button>
      </div>
      <img 
        v-if="this.$mq === 'lg'"
        :class="$style.giftImage" 
        src="@/assets/illustrations/gift.svg" 
        alt="gift illustration"
      >
    </section>
  </div>
</template>

<script>
import { Button } from '@/components/Button'
import CopyInput from './components/CopyInput'
import EmailsForm from './components/EmailsForm'

export default {
  name: 'Referral',
  components: {
    Button,
    CopyInput,
    EmailsForm,
  },
}
</script>

<style lang="scss" module>
.wrapper {
  // @TODO maybe try to remove with 100%
  width: 100%;
  max-width: 744px;
  padding-bottom: 10.4rem;
}

.insurance {
  margin-bottom: 6.4rem;
}

.insuranceTitle {
  margin-bottom: .8rem;
}

.insuranceParagraph {
  color: $gray-dark;
}
.invitation {}

.invitationTitle {
  margin-bottom: .8rem;
}
.invitationParagraph {
  color: $gray-dark;
}

.homeProtection {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 4rem;
  background-color: $blueko;
  border-radius: 8px;
  margin-top: 8rem;

  @media (min-width: 1250px) {
    padding: 0 0 0 4rem;
  }
}

.homeProtectionTitle {
  color: $white;
}

.homeProtectionParagraph {
  color: $blueko-lightest;
  margin: .8rem 0 2.4rem;
}

.giftImage {
  margin-left: 7.6rem;
}

</style>