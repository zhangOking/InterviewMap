<template>
  <div class="content">
    <mavon-editor
      style="height:100%"
      :toolbars="toolbars"
      :value="value"
      :subfield="subfield"
      :defaultOpen="defaultOpen"
      :toolbarsFlag="toolbarsFlag"
      :editable="editable"
      :scrollStyle="scrollStyle" />
  </div>
</template>

<script>
export default {
  layout: 'index',
  data() {
    return {
      value: '',
      subfield: true,
      defaultOpen: 'preview',
      editable: true,
      toolbarsFlag: true,
      scrollStyle: true,
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        mark: true,
        superscript: true,
        quote: true,
        ol: true,
        link: true,
        imagelink: true,
        help: true,
        code: true,
        subfield: true,
        fullscreen: true,
        readmodel: true,
        undo: true,
        trash: true,
        save: true,
        navigation: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
