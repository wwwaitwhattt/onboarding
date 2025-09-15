<template>
  <section>
    <h1>Error 404</h1>
    <nuxt-link :to="'/'">Home</nuxt-link>
  </section>
</template>

<style scoped>
  h1 {
    color: red;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>