<template>
  <form @submit.prevent="onSubmit">
    <h1 class="mb-4">Login</h1>
    <div class="form-group mb-3">
      <input type="text" class="form-control">
    </div>

    <div class="form-group mb-3">
      <input type="password" class="form-control">
    </div>

    <p>
      <nuxt-link to="/">Home</nuxt-link>
    </p>

    <button class="btn btn-primary mb-3" type="submit">Login</button>
  </form>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login')
      this.$router.push('/')
    }
  },
  head() {
    return {
      title: 'Login page',
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

<style scoped>
  form {
    width: 600px;
  }
</style>