import {Module} from 'vuex';
import {SET_POSTS} from './mutation-types';
import {IPost} from '@/shared/interfaces/IPost';
import {FETCH_POSTS} from '@/store/posts/action-types';
import {POSTS} from '@/store/posts/getter-types';

interface IPostState {
  posts: IPost[];
}

const myRequest = new Request('./posts.json');

const postState: Module<IPostState, {}> = {
  state: {
    posts: []
  },
  actions: {
    [FETCH_POSTS]({commit}) {
      return fetch('posts.json')
        .then(res => res.json())
        .then(posts => commit('SET_POSTS', posts))
        .catch(err => console.log(err));
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
