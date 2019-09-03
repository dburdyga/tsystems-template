<template>
    <div class="posts">
      <b-loading :active.sync="loading" v-if="isLoading"/>
      <Error v-if="error"></Error>
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
import { mapGetters } from 'vuex';
import {GET_LOADING_STATE} from '@/store/loading/getter-types';
import {FETCH_POSTS} from '@/store/posts/action-types';
import {POSTS} from '@/store/posts/getter-types';
import Error from './Error.vue';

export default Vue.extend({
  components: {
    Error
  },
  data() {
    return {
      isLoading: false
    }
  },
  created() {
    this.isLoading = true;
    this.$store.dispatch(FETCH_POSTS)
      .then(() => this.isLoading = false)
      .catch(() => this.isLoading = false);
  },
  computed: {
    ...mapGetters({
      loading: GET_LOADING_STATE,
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
</style>
