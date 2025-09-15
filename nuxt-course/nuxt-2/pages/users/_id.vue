<template>
  <div>
    <h1>{{user.name}}</h1>
    <hr>
    <b>{{user.email}}</b>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ params, error, store }) {
    try {
      const user =  await store.dispatch('users/fetchUserById', params.id)
      return {
        user,
        title: `User ${params.id}`,
      }
    } catch(err) {
      error(err)
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
              'The amazing Nuxt application that teaches me all the cool features of Nuxt'
        }
      ]
    }
  }
}
</script>