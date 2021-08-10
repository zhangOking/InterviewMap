<template>
  <div>
    <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText"
        class="problems-scroll_input"
        @change="filterText=''">
      </el-input>
    <div class="problems">
      <div class="problems-scroll">
        <el-tree
          show-checkbox
          :data="data"
          :props="defaultProps"
          node-key="id"
          @check="checkChange"
          :filter-node-method="filterNode"
          ref="tree">
          <span class="custom-tree-node" slot-scope="{ node }">
            <span v-if="showTree">
              <span v-if="node.isLeaf">
                <span class="problems-scroll_tree--isLeaf" @click="read(node)">{{ node.label }}</span>
                <span class="problems-scroll_tree--button">
                  <span v-if="completed.indexOf(node.data.id) > -1 && +pagesScrollPercentage[node.data.id] === 100">
                    <el-button type="text" size="mini" style="color: #67C23A">100%</el-button>
                  </span>
                  <el-button type="text" size="mini" style="color: #909399" v-else @click="read(node)">{{`${pagesScrollPercentage[node.data.id] || 0}%`}}</el-button>
                </span>
              </span>
              <span v-else class="problems-scroll_tree--isntLeaf">
                <span>{{ node.label }}</span>
              </span>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
import problems from '@/assets/json/fejson/problems.json'
import { throttleMaker } from '@/until/tools/throttling'
export default {
  layout: 'index',
  data() {
    return {
      filterText: '',
      completed: [],
      data: problems,
      showTree: true,
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      pagesScrollPercentage: {}
    }
  },

  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys(this.completed)
    },
    checkChange() {
      const readArr = this.$refs.tree.getCheckedKeys()
      window.localStorage.setItem('PROBLEMS_READCOMPLETED', JSON.stringify(readArr))
      this.completed = readArr
    },
    saveStartTime(node) {
      const id = node.data.id

      if (!this.pagesScrollPercentage[id]) {
        let sessionObj = {}
        JSON.parse(window.localStorage.getItem('PROBLEMS_ALLPAGESSTARTTIME')) && (sessionObj = JSON.parse(window.localStorage.getItem('PROBLEMS_ALLPAGESSTARTTIME')))

        sessionObj[id] = new Date().getTime()
        window.localStorage.setItem('PROBLEMS_ALLPAGESSTARTTIME', JSON.stringify(sessionObj))
      }
    },
    read(node) {
      this.saveStartTime(node)

      const id = node.data.id

      const urlArr = []
      const findParent = (node) => {
        if (!node.parent) return

        urlArr.push(node.data.label)
        findParent(node.parent)
      }
      findParent(node)

      const url = this.$router.resolve({
        path: '/content',
        query: {
          id: id,
          path: urlArr.reverse().join('/')
        }
      })

      window.open(url.href, '_blank')

      if (this.completed.indexOf(id) < 0) {
        this.completed.push(id)
        this.setCheckedKeys()
        this.checkChange()
      }
    }
  },

  mounted() {
    try {
      this.completed = JSON.parse(window.localStorage.getItem('READCOMPLETED')) || []
      this.pagesScrollPercentage = JSON.parse(window.localStorage.getItem('ALLPAGESSCROLLPERCENTAGE')) || {}
    } catch (error) {
      console.log(error)
    }

    this.setCheckedKeys()

    const throttle = throttleMaker(500, () => {
      this.pagesScrollPercentage = JSON.parse(window.localStorage.getItem('ALLPAGESSCROLLPERCENTAGE') || '{}')
    })
    window.addEventListener('storage', () => {
      throttle()
    })
  }
}
</script>

<style lang="less" scoped>
.problems {
  width: 100%;
  height: calc(100vh - 160px);
  background: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  &-scroll {
    &_input {
      margin-bottom: 20px;
    }
    &_tree {
      &--button {
        margin-left: 40px;
        cursor: pointer;
      }
      &--isntLeaf {
        font-size: 16px;
        color: #909399;
      }
      &--isLeaf {
        font-size: 14px;
        color: #409EFF;
        text-decoration: underline;
      }
    }
  }
}
</style>
