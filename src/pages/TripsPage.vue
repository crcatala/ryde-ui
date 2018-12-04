<template>
  <div class="TripsPage">
    <div class='TripsPage__header'>
      <h2>
        My Trips
      </h2>
    </div>
    <div class='TripsPage__content'>
      <div v-if='loading'
           class='TripsPage__loading'>
        <Loading />
      </div>
      <div v-else-if='error'
           class='TripsPage__error'>
        {{ error }}
      </div>
      <TripList :items='items'
                v-else-if='items.length' />
      <div v-else
           class='TripsPage__no-results'>
        No Trips
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import TripList from "@/components/TripList";
import Loading from "@/components/Loading";

export default {
  name: "TripsPage",
  components: {
    TripList,
    Loading
  },
  data() {
    return {
      loading: false,
      error: "",
      items: []
    };
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await api.getTrips();
      this.items = data;
    } catch (e) {
      this.error = "Error fetching trips";
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

  &__header {
    display: flex;
    justify-content: center;
  }

  &__loading,
  &__error,
  &__no-results {
    text-align: center;
  }
}
</style>
