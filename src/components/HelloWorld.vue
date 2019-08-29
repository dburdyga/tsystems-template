<template>
    <div class="posts">
      <b-loading :active.sync="loading"/>
      <h1 class="header">Request using Axios</h1>
      <div class="card"
           v-for="post in posts"
           :key="post.id"
      >
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Title: {{ post.title }}</p>
            </div>
          </div>
          <div class="content">
            <p>Description: {{ post.body }}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex'
import {GET_LOADING_STATE} from '../loading/getter-types';

export default Vue.extend({
  props: {
    msg: String
  },
  mounted () {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState (['posts']),
    ...mapGetters({ loading: GET_LOADING_STATE })
  }
});
</script>

<style scoped lang="scss">
@import '../common/vue-telekom/styles/base/variables';

.card {
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  text-align: left;
}
.header {
  font-size: 28px;
  font-weight: bold;
  color: #41b883;
  margin-bottom: 15px;
  text-align: center;
  margin-top: 15px;
}
.title {
  font-weight: bold;
}
</style>
