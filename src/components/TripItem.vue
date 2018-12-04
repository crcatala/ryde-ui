<template>
  <tr class="TripItem">
    <td>
      >
    </td>
    <td>
      {{ pickupDate }}
    </td>
    <td>
      hey
    </td>
    <td>
      hey
    </td>
    <td>
      hey
    </td>
    <td>
      hey
    </td>
    <td>
      hey
    </td>
  </tr>
</template>

<script>
import format from "date-fns/format";

export default {
  name: "TripItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    pickupDate() {
      return format(this.item.pickup_time, "MM/DD/YY");
    }
  }
};
</script>

<style lang="scss" scoped>
.TripItem {
  // Styles
}
</style>
