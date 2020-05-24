export default {
  async getNewsClassified ({ commit }) {
    const res = await this.$api.getNewsClassified()
    if (res.code === '0') {
      commit('gotNewsClassified', res.data)
    }
  },
  async getNewsList ({ commit }, _data) {
    const data = {
      classified_id: _data.classified_id,
      page: _data.page || undefined,
      perpage: _data.perpage || undefined
    }
    const res = await this.$api.getNewsList({ params: data })
    if (res.code === '0') {
      commit('gotNewsList', res.data)
    }
  },
  async getSideNewsList ({ commit }, _data) {
    const data = {
      limit: 6
    }
    const res = await this.$api.getLatestNewsList({ params: data })
    if (res.code === '0') {
      commit('gotSideNewsList', res.data)
    }
  },
  async getNewsTotal ({ commit }, data) {
    const res = await this.$api.getNewsTotal({ params: data })
    if (res.code === '0') {
      commit('gotNewsTotal', res.data)
    }
  },
  async getNewsFullText ({ commit }, data) {
    const res = await this.$api.getNewsFullText({ params: data })
    if (res.code === '0') {
      commit('gotNewsFullText', res.data)
    }
  }
}
