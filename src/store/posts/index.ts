import {Module} from 'vuex';
import axios, {AxiosError} from 'axios';
import {SET_POSTS} from './mutation-types';
import {IPost} from '@/shared/interfaces/IPost';
import {FETCH_POSTS} from '@/store/posts/action-types';
import {POSTS} from '@/store/posts/getter-types';
import {SET_ERROR} from "@/store/loading/mutation-types";

interface IPostState {
  posts: IPost[];
}

const postState: Module<IPostState, {}> = {
  state: {
    posts: []
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
    }
  },
  getters: {
    [POSTS]: state => state.posts
  }
};

export default postState;
