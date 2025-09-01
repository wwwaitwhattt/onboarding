<template>
  <div>
    <button class="btn btn-success" @click="updateCounter(1)">Add</button>
    <button class="btn btn-danger" @click="updateCounter(-1)">Subtract</button>
  </div>
</template>

<script>
  export default {
    methods: {
      updateCounter(value) {
        this.$store.dispatch('asyncChangeCounter', {
          counterValue: value,
          timeoutDelay: 200
        });
      }
    }
  }
</script>

<style scoped>

</style>