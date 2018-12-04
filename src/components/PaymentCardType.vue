<template>
  <div class="PaymentCardType">
    <img :src='"@/assets/images/visa.png"'
         v-if='type === "Visa"'
         class='PaymentCardType__image PaymentCardType__image--visa'>
    <img src='@/assets/images/mastercard.png'
         v-else-if='type === "Mastercard"'
         class='PaymentCardType__image PaymentCardType__image--mastercard'>
    <img src='@/assets/images/discover.png'
         v-else-if='type === "Discover"'
         class='PaymentCardType__image PaymentCardType__image--discover'>
    <img src='@/assets/images/amex.png'
         v-else-if='type === "AMEX"'
         class='PaymentCardType__image PaymentCardType__image--amex'>
    <img src='@/assets/images/unknown-card-type.png'
         v-else
         class='PaymentCardType__image PaymentCardType__image--unknown'>
  </div>
</template>

<script>
export default {
  name: "PaymentCardType",
  props: {
    type: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.PaymentCardType {
  display: inline-block;
  &__image {
    height: 20px;
  }
}
</style>
