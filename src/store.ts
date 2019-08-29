import Vue from 'vue';
import Vuex from 'vuex';

import loading from './loading';

import alertState from './common/vue-telekom/components/Alert/alertStore';
import fileUploadState from './common/vue-telekom/components/FileUploader/fileUploadStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alertState,
    fileUploadState,
    loading
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});

