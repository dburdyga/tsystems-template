import {Module} from 'vuex';
import axios from 'axios';
import {SET_POSTS} from './mutation-types';
import {IPost} from '@/shared/interfaces/IPost';
import {FETCH_POSTS} from '@/store/posts/action-types';
import {POSTS} from '@/store/posts/getter-types';

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
        .then(res => { commit(SET_POSTS, res.data)})
        // .catch(error => {
        //   console.log(error.response.data);
        // });
        .catch(
            function (error) {
              console.log('Show error notification!');
              return Promise.reject(error)
            }
          )
        // .catch(error => console.log('Error: ', error.message))
        // .catch(error => {
        //   if (error.res) {
        //     console.log(error.res.data);
        //     console.log(error.res.status);
        //     console.log(error.res.headers);
        //   } else if (error.request) {
        //     console.log(error.request);
        //   } else {
        //     console.log('Error: ', error.message);
        //   }
        //   console.log(error.config);
        // });
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
