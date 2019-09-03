<template>
  <div class="error">
    <div class="notification is-danger">Error. Oops, something went wrong!</div>
  </div>
</template>

<script lang="ts">
export default {
    name: 'Error'
};
</script>

<style scoped lang="scss">
  @import '../common/vue-telekom/styles/base/variables';

  .error {
    color: red;
    font-weight: bold;
    text-align: center;
    margin-left: 100px;
    margin-right: 100px;
  }

</style>
