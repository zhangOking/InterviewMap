<template>
  <div>
    <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText"
        class="fe-scroll_input"
        @change="filterText=''">
      </el-input>
    <div class="fe">
      <div class="fe-scroll">
        <el-tree
          show-checkbox
          :data="data"
          :props="defaultProps"
          node-key="id"
          @check="checkChange"
          :filter-node-method="filterNode"
          ref="tree">
          <span class="custom-tree-node" slot-scope="{ node }">
            <span v-if="node.isLeaf">
              <span class="fe-scroll_tree--isLeaf" @click="read(node)">{{ node.label }}</span>
              <span class="fe-scroll_tree--button">
                <span v-if="completed.indexOf(node.data.id) > -1">
                  <el-button type="text" size="mini" style="color: #67C23A">done</el-button>
                  <el-button type="text" size="mini" style="color: #409EFF" @click="read(node)">review</el-button>
                </span>
                <el-button type="text" size="mini" style="color: #909399" v-else @click="read(node)">read</el-button>
              </span>
            </span>
            <span v-else class="fe-scroll_tree--isntLeaf">
              <span>{{ node.label }}</span>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script>
import fe from '@/assets/json/fejson'
export default {
  data() {
    return {
      filterText: '',
      completed: [],
      data: fe,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
      window.localStorage.setItem('READCOMPLETED', JSON.stringify(readArr))
      this.completed = readArr
    },
    read(node) {
      const urlArr = []
      const id = node.data.id
      const findParent = (node) => {
        if (!node.parent) return

        urlArr.push(node.data.label)
        findParent(node.parent)
      }

      findParent(node)

      const url = this.$router.resolve({
        path: '/Content',
        query: {
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
    let readArr
    try {
      readArr = JSON.parse(window.localStorage.getItem('READCOMPLETED'))
    } catch (error) {
      readArr = null
    }
    if (readArr) {
      this.completed = readArr
    }
    this.setCheckedKeys()
  }
}
</script>

<style lang="less" scoped>
.fe {
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
