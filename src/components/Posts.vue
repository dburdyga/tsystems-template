<template>
    <div class="posts">
      <p class="loading" v-if="loading"></p>
      <div class="card">
<!--        <div class="card-content">-->
<!--          <div class="media">-->
<!--            <div class="media-content">-->
<!--              <p class="title is-4">Title: {{ post.title }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="content">-->
<!--            <p>Description: {{ post.body }}</p>-->
<!--          </div>-->
<!--        </div>-->
    </div>
      <div class="tile"
           v-for="post in posts"
           :key="post.id"
      >
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-warning">
                  <p class="subtitle">Environment name</p>
                  <p class="title">{{ post.name }}</p>
                </article>
                <article class="tile is-child notification is-danger">
                  <p class="title">{{ post.version }}</p>
                  <p class="subtitle">List of versions for main components (Staxd, MCC, UI)</p>
                </article>
                <article class="tile is-child notification is-info">
                  <p class="title">{{ post.addressDocker }}</p>
                  <p class="subtitle">Address of Docker registry and credentials for read only account for Docker registry</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-light">
                  <p class="title">{{ post.image }}</p>
                  <p class="subtitle">List of images uploaded to Docker registry (with tags)</p>
                  <figure class="image image is-64x64">
                    <img src="https://bulma.io/images/placeholders/64x64.png">
                  </figure>
                  <br>
                  <figure class="image image is-64x64">
                    <img src="https://bulma.io/images/placeholders/64x64.png">
                  </figure>
                  <br>
                  <figure class="image image is-64x64">
                    <img src="https://bulma.io/images/placeholders/64x64.png">
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-dark">
                <p class="title">{{ post.dashboardUrl }}</p>
                <p class="subtitle">Logging dashboard URL</p>
                <div class="content"></div>
              </article>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-success">
              <p class="title">{{ post.zipUrl }}</p>
              <p class="subtitle">URL for Zip builds downloads (UI, Staxd)</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">{{ post.addressBootnode }}</p>
              <p class="subtitle">Address of bootnode</p>
            </article>
            <article class="tile is-child notification is-link">
              <p class="title">{{ post.codeSnippets }}</p>
              <p class="subtitle">Code snippets for distribution repository configuration (deb, rpm for Staxd) for current environment</p>
            </article>
          </div>
        </div>
        <span></span>
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
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.card {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  text-align: left;
  box-shadow: none;
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
