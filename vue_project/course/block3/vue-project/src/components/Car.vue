<template>
  <div class="car">
    <h3>Name: {{carName}}</h3>
    <p>Year: {{carYear}}</p>
    <p>Reverse name: {{reverseName}}</p>
    <button @click="changeName">Change Name</button>
    <button @click="changeFunc">Change from parent</button>
    <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>

  export default {
    props: {
      carName: {
        type: String,
        default: 'Default'
      },
      carYear: Number,
      changeFunc: Function,
      counter: Number,
    },
    methods: {
      changeName() {
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      },
      updateCounter() {
        this.$emit('counterUpdated', this.counter + 1)
      }
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    }
  }
</script>

<style>
  .car {
    border: 5px solid red;
  }

  .car h3{
    margin-bottom: 5px;
  }

</style>