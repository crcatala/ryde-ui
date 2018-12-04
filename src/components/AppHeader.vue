<template>
  <div class="AppHeader">
    <div class='AppHeader__brand-title'>
      Ryde
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.AppHeader {
  background-color: $bg-color-secondary;
  color: $text-color-secondary;
  padding: 16px 0;
  display: flex;
  justify-content: center;

  &__brand-title {
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
}
</style>
