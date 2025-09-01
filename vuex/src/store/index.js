import Vue from 'vue'
import Vuex from 'vuex'
import Counter from "@/store/counter";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: Counter,
  },
  state: {
    title: 'hi from state!'
  },
  getters: {
    title(state) {
      return state.title + '!!'
    }
  }
})
