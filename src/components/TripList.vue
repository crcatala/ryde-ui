<template>
  <table class="TripList">
    <thead>
      <tr>
        <th>
        </th>
        <th>
          Pickup
        </th>
        <th>
          Driver
        </th>
        <th>
          Fare
        </th>
        <th>
          Car
        </th>
        <th>
          City
        </th>
        <th>
          Payment Method
        </th>
      </tr>
    </thead>
    <tbody>
      <TripItem v-for='item in items'
                :item='item'
                :key='item.id' />
    </tbody>
  </table>
</template>

<script>
import TripItem from "@/components/TripItem";

export default {
  name: "TripList",
  components: {
    TripItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.TripList {
  // Styles
}
</style>
