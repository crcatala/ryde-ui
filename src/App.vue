<template>
  <div id="App">
    <AppHeader />
    <router-view />
    <footer class='App__footer'>
    </footer>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style lang='scss' scoped>
@import "@/styles/variables.scss";

.App {
  &__footer {
    background-color: $bg-color-secondary;
    height: 10px;
    margin-top: 2em;
  }
}
</style>
