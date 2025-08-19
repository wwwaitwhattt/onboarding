<template>
  <div class="container">
    <div class="post-view" v-if="post">
      <h1 class="post-view__title">{{ post.title }}</h1>
      <p class="post-view__content">{{ post.content }}</p>
      <button class="post-view__button-delete">Delete</button>
      <button class="post-view__button-edit">Edit</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
 data() {
   return {
   }
 },
  computed: {
   ...mapGetters(["getPostById"]),
    post() {
     const id = Number(this.$route.params.id);
     return this.getPostById(id);
    }
  }
}
</script>

<style>

.post-view {
  margin: 50px;

  &__content {
    text-align: justify;
  }
}

.post-view__content {
  text-align: left;
}
</style>
