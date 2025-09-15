<template>
  <section>
    <h1>About page</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum impedit laudantium omnis quia, quod vero?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, repellendus!</p>
  </section>
</template>

<script>
export default {
  middleware: ['auth'],
  head() {
    return {
      title: 'About page',
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

</style>