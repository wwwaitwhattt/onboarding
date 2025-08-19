import Vue from 'vue'
import Vuex from 'vuex'
import { posts } from './posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts
  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  },
  mutations: {
    deletePost: (state, id) => {
      state.posts = state.posts.filter(post => post.id !== id)
    },
    addPost: (state, post) => {
      state.posts.push(post)
    },
    editPost: (state, id) => {
      const index = state.posts.findIndex(post => post.id === id)
      if (index !== -1) {
        Vue.set(state.posts, index, id);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
