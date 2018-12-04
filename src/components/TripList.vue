<template>
  <div class='TripList'>
    <table class="TripList__table">
      <thead>
        <tr>
          <th class='TripList__toggle-column'>
          </th>
          <th class='TripList__pickup-time-column'>
            Pickup
          </th>
          <th class='TripList__driver-column'>
            Driver
          </th>
          <th class='TripList__fare-column'>
            Fare
          </th>
          <th class='TripList__car-column'>
            Car
          </th>
          <th class='TripList__city-column'>
            City
          </th>
          <th class='TripList__payment-column'>
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
  </div>
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
  overflow-x: auto;

  &__table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 16px 8px;
      border-bottom: 1px solid #cccccc;
    }
  }

  &__toggle-column {
    width: 20px;
  }

  &__pickup-time-column {
    width: 100px;
  }

  // &__driver-column {
  //   width: 60px;
  // }

  &__fare-column {
    width: 100px;
  }

  &__car-column {
    width: 100px;
  }

  &__city-column {
    width: 120px;
  }

  &__payment-column {
    width: 140px;
  }
}
</style>
