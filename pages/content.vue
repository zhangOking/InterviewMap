<template>
  <div class="content">
    <div id="mavon-editor">
      <mavon-editor
        v-if="browser"
        :toolbars="toolbars"
        :value="value"
        :subfield="subfield"
        :defaultOpen="defaultOpen"
        :toolbarsFlag="toolbarsFlag"
        :editable="editable"
        :scrollStyle="scrollStyle" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { throttleMaker } from '@/until/tools/throttling'
export default {
  layout: 'content',
  data() {
    return {
      browser: false,
      value: '',
      subfield: false,
      defaultOpen: 'preview',
      editable: false,
      toolbarsFlag: false,
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
      },
      percentage: 0
    }
  },
  methods: {
    ...mapMutations({
      x_pagesScrollPercentage_update: 'tree-status/x_pagesScrollPercentage_update'
    })
  },
  mounted() {
    const { path, id } = this.$route.query

    this.$ajax.get(`/FE/${decodeURI(path)}.md`).then(res => {
      this.value = res
    })



    if (process.browser) {
      this.browser = true

      const self = this
      const throttle = throttleMaker(500, () => {
        const max = document.querySelector('#mavon-editor').scrollHeight
        const windowSize = window.innerHeight
        const current = Math.abs(document.querySelector('#mavon-editor').getClientRects()[0].top)
        let percentage = Math.floor((current / (max - windowSize)) * 100)

        // page scroll percentage
        if (percentage <= 100 && self.percentage <= percentage) {
          self.percentage = percentage

          // cache in localStorage
          let ALLPAGESSCROLLPERCENTAGE = JSON.parse(window.localStorage.getItem('ALLPAGESSCROLLPERCENTAGE')) || {}
          ALLPAGESSCROLLPERCENTAGE[id] = percentage
          window.localStorage.setItem('ALLPAGESSCROLLPERCENTAGE', JSON.stringify(ALLPAGESSCROLLPERCENTAGE))
        }
      })

      // scroll event
      const scrollEvent = () => {
        throttle()
      }

      window.removeEventListener('scroll', scrollEvent, true)
      window.addEventListener('scroll', scrollEvent, true)

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
