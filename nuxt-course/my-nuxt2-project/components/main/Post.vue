<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post-header">
      <h3>Title</h3>

      <small>
        <i class="el-icon-time"></i>
        {{new Date().toLocaleString()}}
      </small>
    </header>
    <div class="post-body">
      <img src="https://www.berlin.de/binaries/asset/image_assets/6274092/ratio_4_3/1750930793/800x600/"
           alt="Berlin"
           class="post-img" />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>

      <span>
        <i class="el-icon-chat-line-square">12</i>
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;
  }

  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .post-body{
  }
  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .post-img {
    width: 100%;
    height: auto;

  }
</style>
