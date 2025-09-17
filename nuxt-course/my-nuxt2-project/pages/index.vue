<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="18" :md="12" :lg="10">
        <AppPost
          v-for="post in 3"
          :key="post"

        ></AppPost>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AppPost from '@/components/main/Post'

export default {
  head: {
    title: 'Главная'
  },
  components: {
    AppPost
  }
}
</script>
