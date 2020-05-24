export default {
  async getSettings ({ commit }) {
    const res = await this.$api.getSettings()
    if (res.code === '0') {
      commit('gotSettings', res.data)
    }
  },
  async getLotteryClassified ({ commit }) {
    const res = await this.$api.getLotteryClassified()
    if (res.code === '0') {
      commit('gotLotteryClassified', res.data)
    }
  }
}
