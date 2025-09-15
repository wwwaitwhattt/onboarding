<template>
  <section>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="#" @click.prevent="goTo(user)">{{user.name}} ({{ user.email }})</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
<script>
export default {
  // async asyncData({store, error}) {
  //   try {
  //     await store.dispatch('users/fetchUsers');
  //     return {}
  //   } catch(err) {
  //     error(err);
  //   }
  //
  // },
  async fetch({store, error}) {
    try {
      if (store.getters['users/users'] === 0) {
        await store.dispatch('users/fetchUsers')
      }
      await store.dispatch('users/fetchUsers')
    } catch (err) {
      error(err)
    }
  },
  head() {
    return {
      title: 'Users page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
              'The amazing Nuxt application that teaches me all the cool features of Nuxt'
        }
      ]
    }
  },
  computed: {
    users() {
      return this.$store.getters['users/users'];
    }
  },
  methods: {
    goTo(user) {
      this.$router.push({ path: `/users/` + user.id })
    }
  }
}
</script>