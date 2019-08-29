import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios'

import loading from './loading';

import alertState from './common/vue-telekom/components/Alert/alertStore';
import fileUploadState from './common/vue-telekom/components/FileUploader/fileUploadStore';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    alertState,
    fileUploadState,
    loading
  },
  state: {
    posts: []
  },
  actions: {
    loadPosts ({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then (res => this.posts = res.data)
        .then(posts => {commit('SET_POSTS', posts)})
        .catch (error => console.log('Error: ', error));
        }
    },
  mutations: {
      SET_POSTS (state, posts) {
        state.posts = posts
    }
  }
});


