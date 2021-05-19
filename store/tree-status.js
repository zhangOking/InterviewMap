export const state = () => ({
  x_pagesScrollPercentage: {}
})

export const mutations = {
  x_pagesScrollPercentage_update(state, obj = null) {
    console.log("🚀 ~ file: tree-status.js ~ line 7 ~ x_pagesScrollPercentage_update ~ obj", obj)
    console.log(1111)
    if (!obj) return
    state.x_pagesScrollPercentage = obj
  }
}

export const action = {
  x_pagesScrollPercentage_update({ commit }) {
    commit('x_pagesScrollPercentage_update')
  }
}
