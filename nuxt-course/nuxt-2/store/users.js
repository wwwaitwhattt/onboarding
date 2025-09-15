export const state = () => ({
    users: []
})

export const mutations = {
    SET_USERS(state, users) {
        state.users = users
    }
}

export const actions = {
    async fetchUsers({commit}) {
        try {
            const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
            commit('SET_USERS', users)
        } catch (err) {
            throw err
        }
    },
    async fetchUserById({}, userId) {
        try {
            return await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        } catch (err) {
            throw err
        }
    }
}

export const getters = {
    users: state => state.users
}