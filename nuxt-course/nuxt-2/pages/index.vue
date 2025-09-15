<template>
  <section>
    <h1>hiiii! this is home page!</h1>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home page',
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

<style>

</style>