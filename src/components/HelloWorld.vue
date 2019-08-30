<template>
    <div class="posts">
      <p class="loading" v-if="loading">LOADING...</p>
      <h1 class="header">Request using Fetch</h1>
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
import { mapGetters } from 'vuex'
import {FETCH_POSTS} from '@/store/posts/action-types';
import {POSTS} from '@/store/posts/getter-types';

export default Vue.extend({
  data() {
    return {
      loading: true
    }
  },
  created () {
    this.$store.dispatch(FETCH_POSTS)
      .then(()=> {}
      )
  },
  computed: {
    ...mapGetters({
      posts: POSTS
    })
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
  .loading {
    text-align: center;
  }
</style>
