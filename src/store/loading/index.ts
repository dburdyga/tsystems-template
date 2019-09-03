import {Module} from 'vuex';
import {ERROR, GET_LOADING_STATE} from './getter-types';
import {DECREMENT_LOADING_STATE, INCREMENT_LOADING_STATE, SET_ERROR} from './mutation-types';

interface ILoadingState {
  loading: string[];
  error: string;
}

const loadingState: Module<ILoadingState, {}> = {
  state: {
    loading: [],
    error: ''
  },
  mutations: {
    [INCREMENT_LOADING_STATE](state, loading: string) {
      state.loading.push(loading);
    },
    [DECREMENT_LOADING_STATE](state) {
      state.loading.pop();
    },
    [SET_ERROR](state, payload: string) {
      state.error = payload;
    }
  },
  getters: {
    [GET_LOADING_STATE]: state => Boolean(state.loading.length),
    [ERROR]:state => state.error
  }
};

export default loadingState;
