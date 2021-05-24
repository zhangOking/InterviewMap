<template>
  <div class="welcome">
    <div class="welcome-inner">
      此处后续将会增加个人统计内容, <el-button type="text" @click="goFe">前端内容请移步</el-button>
    </div>
    <div class="record">
      <a href="https://beian.miit.gov.cn/#/Integrated/index" class="">京ICP 2021016312</a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'index',
  methods: {
    goFe() {
      this.$router.push('/fe')
    }
  }
}
</script>

<style lang="less" scoped>
.welcome {
  width: 100%;
  height: 100%;
  &-inner {
    width: 100%;
    height: calc(100% - 40px);
    background: #ffffff;
    border-radius: 4px;
    padding: 20px;
    box-sizing: border-box;
  }
  .record {
    width: 100%;
    text-align: center;
    text-decoration: none;
    padding: 20px;
    a {
      color: #bbb;
      font-size: 12px;
      text-decoration: none !important;
    }
  }
}
</style>


