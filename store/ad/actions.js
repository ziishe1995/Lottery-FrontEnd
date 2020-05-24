export default {
  async getAdTypeList ({ commit }) {
    const res = await this.$api.getAdTypeList()
    if (res.code === '0') {
      commit('gotAdTypeList', res.data)
    }
  },
  async getAd ({ commit }, _d) {
    const res = await this.$api.getAd({ params: _d })
    if (res.code === '0') {
      commit('gotAd', res.data)
    }
  }
}
