<template>
  <div class="TripsPage">
    <div class='TripsPage__header'>
      <div class='filter'>
        Filter
      </div>
      <h2>
        My Trips
      </h2>
    </div>
    <div class='TripsPage__content'>
      <TripList :items='items' />
    </div>
  </div>
</template>

<script>
import api from "@/api";
import TripList from "@/components/TripList";

export default {
  name: "TripsPage",
  components: {
    TripList
  },
  data() {
    return {
      loading: false,
      items: []
    };
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await api.getTrips();
      this.items = data;
      // console.log(response.data);
    } catch (e) {
      // TODO
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.TripsPage {
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
}
</style>
