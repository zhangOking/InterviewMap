<template>
  <div class="main">
    <el-container style="width: 100%; height: 100%">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <Nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  components: {
    'Header': () => import('@/components/herder/header'),
    'Aside': () => import('@/components/aside/aside')
  }
}
</script>

<style lang="less" scoped>
.main {
  height:100%;
  /deep/.el-header {
    padding: 0;
  }
}
</style>
