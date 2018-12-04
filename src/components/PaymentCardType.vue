<template>
  <div class="PaymentCardType">
    <img :src='imageSrc'
         v-if='imageSrc'
         class='PaymentCardType__image'>
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
  },
  computed: {
    imageSrc() {
      switch (this.type) {
        case "Visa":
          return require("@/assets/images/visa.png");
        case "Mastercard":
          return require("@/assets/images/mastercard.png");
        case "AMEX":
          return require("@/assets/images/amex.png");
        case "Discover":
          return require("@/assets/images/discover.png");
        default:
          return require("@/assets/images/unknown-card-type.png");
      }
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
