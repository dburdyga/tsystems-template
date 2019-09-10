<template>
    <div class="posts">
      <p class="loading" v-if="loading"></p>
      <h1 class="title is-3" style="margin-bottom: 10px;">Environment info page</h1 class="title is-3">
      <div class="tile"
           v-for="post in posts"
           :key="post.id"
      >
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification has-background-grey-lighter">
                  <p class="title is-4">{{ post.name }}</p>
                  <p class="subtitle is-6">Environment name</p>
                </article>
                <article
                  class="tile is-child notification has-background-grey-light"
                  v-if="post.versions">
                  <div class="content" style="margin-bottom: -20px;">
                    <p class="title is-4">{{ post.versions.versionStaxd }}</p>
                    <p class="title is-4">{{ post.versions.versionMCC }}</p>
                    <p class="title is-4">{{ post.versions.versionUI}}</p>
                  </div>
                  <p class="subtitle is-6">List of versions for main components</p>
                </article>
                <article
                  class="tile is-child notification has-background-grey-lighter"
                  v-if="post.credentials">
                  <div class="content" style="margin-bottom: -20px;">
                    <p class="title is-4">Username: {{ post.credentials.username }}</p>
                    <p class="title is-4">Password: {{ post.credentials.password }}</p>
                  </div>
                  <p class="subtitle is-6">Credentials for read only account for Docker registry</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification has-background-grey-light">
                  <code class="subtitle is-7">{{ post.codeSnippets }}</code>
                  <br></br>
                  <code class="subtitle is-7">{{ post.codeSnippets }}</code>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article
                class="tile is-child notification has-background-grey-light"
                v-if="post.images">
                  <p class="title is-4" >{{ post.images.image1 }}</p>
                  <p class="title is-4">{{ post.images.image2 }}</p>
                  <p class="title is-4">{{ post.images.image3 }}</p>
                <p class="subtitle is-6">List of images uploaded to Docker registry</p>
              </article>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification has-background-grey-lighter">
              <p class="title is-4">{{ post.addressDocker }}</p>
              <p class="subtitle is-6">Address of Docker registry</p>
            </article>
            <article class="tile is-child notification has-background-grey-light">
              <p class="title is-4">{{ post.addressBootnode }}</p>
              <p class="subtitle is-6">Address of bootnode</p>
            </article>
            <article class="tile is-child notification has-background-grey-lighter">
              <p class="title is-4">{{ post.zipUrl }}</p>
              <p class="subtitle is-6">URL for Zip builds downloads (UI, Staxd)</p>
            </article>
            <article class="tile is-child notification has-background-grey-light">
              <p class="title is-4">{{ post.dashboardUrl }}</p>
              <p class="subtitle is-6">Logging dashboard URL</p>
            </article>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import {FETCH_POSTS} from '@/store/posts/action-types';
import {POSTS} from '@/store/posts/getter-types';

export default Vue.extend({
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
      posts: POSTS
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
.posts {
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
}
.card {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  text-align: left;
  box-shadow: none;
}
.title {
  font-weight: bold;
}
.content {
  display: flex;
  justify-content: space-between;
}
</style>
