<template>
  <div class="home">
    <Posts msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Posts from '@/components/Posts.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Posts
  }
});
</script>
