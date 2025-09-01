export default {
    state: {
        counter: 0
    },
    getters: {
        computedCounter(state) {
            return state.counter * (7 - 2 * (5 + 4));
        }
    },
    mutations: {
        changeCounter(state, payload) {
            state.counter += payload
        }
    },
    actions: {
        asyncChangeCounter({commit}, payload) {
            setTimeout(() => {
                commit('changeCounter', payload.counterValue)
            }, payload.timeoutDelay)
        }
    },
}