<template>
  <div class="TripsPage">
    <aside class='TripsPage__nav'>
      Placeholder
    </aside>
    <main class='TripsPage__main'>
      <div class='header'>
        <div class='filter'>
          Filter
        </div>
        <h2>
          My Trips
        </h2>
        <TripList :items='items' />
      </div>
    </main>
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
  display: flex;

  &__nav {
    width: 200px;
  }

  &__main {
    width: 100%;
  }
}
</style>
