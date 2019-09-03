import {Module} from 'vuex';
import axios, {AxiosError} from 'axios';
import {SET_POSTS} from './mutation-types';
import {IPost} from '@/shared/interfaces/IPost';
import {FETCH_POSTS} from '@/store/posts/action-types';
import {ERROR, POSTS} from '@/store/posts/getter-types';
import {SET_ERROR} from "@/store/posts/mutation-types";

interface IPostState {
  posts: IPost[];
  error: string;
}

const postState: Module<IPostState, {}> = {
  state: {
    posts: [],
    error: ''
  },
  actions: {
    [FETCH_POSTS]({commit}) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then(res => {commit(SET_POSTS, res.data);})
        .catch((error: AxiosError) => {
          console.log('Show error notification!', error.request);
          commit(SET_ERROR, error.toString())
        });
    }
  },
  mutations: {
    [SET_POSTS](state, posts: IPost[]) {
      state.posts = posts;
    },
    [SET_ERROR](state, payload: string) {
      state.error = payload;
    }
  },
  getters: {
    [POSTS]: state => state.posts,
    [ERROR]: state => state.error
  }
};

export default postState;
