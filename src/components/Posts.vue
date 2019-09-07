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
                <article class="tile is-child notification is-primary">
                  <p class="title">{{ post.name }}</p>
                  <p class="subtitle">Name</p>
                </article>
                <article class="tile is-child notification is-dark">
                  <p class="title">{{ post.version }}</p>
                  <p class="subtitle">Version</p>
                </article>
                <article class="tile is-child notification is-link">
                  <p class="title">{{ post.zipUrl }}</p>
                  <p class="subtitle">ZIP URL</p>
                </article>
                <article class="tile is-child notification is-warning">
                  <p class="title">{{ post.dashboardUrl }}</p>
                  <p class="subtitle">dashboard URL</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <p class="title">{{ post.image }}</p>
                  <p class="subtitle">Image</p>
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                  </figure>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-danger">
                <p class="title">{{ post.codeSnippets }}</p>
                <p class="subtitle">code Snippets</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">{{ post.addressDocker }}</p>
                <p class="subtitle">...</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">{{ post.addressBootnode }}</p>
                <p class="subtitle">...</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
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
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.card {
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
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
