<template>
  <div class="edit">
    <mavon-editor style="height: 100%" :value="value"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
.edit {
  width: 100%;
  height: 100%;
}
</style>
