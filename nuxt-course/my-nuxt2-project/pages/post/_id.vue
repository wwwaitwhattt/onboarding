<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{new Date().toLocaleString()}}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img src="https://www.berlin.de/binaries/asset/image_assets/6274092/ratio_4_3/1750930793/800x600/"
             alt="Berlin"
             class="post-img" />
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis debitis esse, id itaque iusto labore, natus, non officiis quaerat quibusdam ratione repellat similique tempora. Inventore magnam omnis praesentium quas sint. Ab aliquam blanditiis cum dolores earum est facilis magni minus nostrum numquam officiis praesentium quia quis similique, unde.</p>
    </main>
    <footer>
<!--  FORM    -->

      <div class="comments" v-if="true">
        <AppComment
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        ></AppComment>
      </div>

      <div class="text-center" v-else>Комментариев пока нет...</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'

export default {
  validate({params}) {
    return Boolean(params.id)
  },
  components: {
    AppComment
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0px auto;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.post-image img{
  width: 100%;
  height: auto;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-content {
  margin-bottom: 2rem;
}
</style>
