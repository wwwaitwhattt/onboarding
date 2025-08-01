<template>
  <h1>App</h1>
  <hr>

  <input type="text" placeholder="Введите текст" v-model="clue" />
</template>

<script>
export default {
  data() {
    return {
      clue: 'enter text',
    }
  }
}
</script>