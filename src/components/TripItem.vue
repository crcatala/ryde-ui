<template>
  <tr class="TripItem">
    <td>
      <img src='@/assets/images/chevron-right.png'
           class='TripItem__toggle'>
    </td>
    <td>
      {{ pickupDate }}
    </td>
    <td>
      {{ driverName }}
    </td>
    <td>
      {{ fare }}
    </td>
    <td>
      {{ carType }}
    </td>
    <td>
      {{ city }}
    </td>
    <td>
      <PaymentMethod :item='item.payment_method' />
    </td>
  </tr>
</template>

<script>
import format from "date-fns/format";
import get from "lodash/get";
import PaymentMethod from "@/components/PaymentMethod";

export default {
  name: "TripItem",
  components: {
    PaymentMethod
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    pickupDate() {
      return format(this.item.pickup_time, "MM/DD/YY");
    },
    driverName() {
      return get(this.item, "driver.name", "");
    },
    fare() {
      return `$${Number(this.item.fare).toFixed(2)}`;
    },
    carType() {
      return get(this.item, "car.type", "");
    },
    city() {
      return this.item.city;
    },
    paymentType() {
      return get(this.item, "payment_type");
    }
  }
};
</script>

<style lang="scss" scoped>
.TripItem {
  & > td {
    padding: 16px 8px;
    border-bottom: 1px solid #cccccc;
  }

  &__toggle {
    height: 10px;
  }
}
</style>
