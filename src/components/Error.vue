<template>
  <div class="error">
    <p>Error</p>
  </div>
</template>

<script lang="ts">
    export default {
        name: "Error"
    }
</script>

<style scoped lang="scss">
  @import '../common/vue-telekom/styles/base/variables';

  .error {
    color: red;
    font-weight: bold;
    text-align: center;
  }

</style>
