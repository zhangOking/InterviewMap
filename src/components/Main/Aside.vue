<template>
  <div class="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      router>
      <el-menu-item index="/">
        <i class="el-icon-location"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/FE">
        <i class="el-icon-menu"></i>
        <span slot="title">前端相关</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.aside {
  width: 100%;
  height: 100%;
  background: #ffffff;
  /deep/.el-menu {
    border: none;
  }
}
</style>
