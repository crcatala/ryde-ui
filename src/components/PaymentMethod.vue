<template>
  <div class="PaymentMethod">
    <PaymentCardType :type='item.card_type' />
    <span class='PaymentMethod__masked'>
      {{ maskedCardNumber }}
    </span>
    <span>
      {{ cardNumberEnding }}
    </span>
  </div>
</template>

<script>
import PaymentCardType from "@/components/PaymentCardType";

export default {
  name: "PaymentMethod",
  components: {
    PaymentCardType
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    maskedCardNumber() {
      return "••••";
    },
    cardNumberEnding() {
      return this.item.last_four;
    }
  }
};
</script>

<style lang="scss" scoped>
.PaymentMethod {
  display: flex;
  align-items: center;

  &__masked {
    margin: 0 4px;
  }
}
</style>
