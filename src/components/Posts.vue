<template>
    <div class="posts">
      <p class="loading" v-if="loading"></p>
      <h1 class="header">Request using Axios</h1>
      <Error v-if="error"></Error>
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
import { mapGetters } from 'vuex';
import {FETCH_POSTS} from '@/store/posts/action-types';
import {ERROR, POSTS} from '@/store/posts/getter-types';
import Error from './Error.vue';

export default Vue.extend({
  components: {
    Error
  },
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.loading = true;
    this.$store.dispatch(FETCH_POSTS)
      .then(() => this.loading = false)
      .catch(() => this.loading = false);
  },
  computed: {
    ...mapGetters({
      posts: POSTS,
      error: ERROR
    })
  }
});
</script>

<style scoped lang="scss">
@import '../common/vue-telekom/styles/base/variables';
.loading {
  display: inline-block;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 3px solid white;
  border-radius: 50%;
  border-top-color: grey;
  margin-bottom: 20px;
  margin-left: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
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
