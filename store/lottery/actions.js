import { startOfDateTime, endOfDateTime } from '@/plugins/filters'
export default {
  async getGameInfo ({ commit }, _data) {
    const data = {
      id: Number(_data.id)
    }
    const res = await this.$api.getGameInfo({ params: data })
    if (res.code === '0') {
      commit('gotGameInfo', res.data)
    }
  },
  async getGameResult ({ commit }, _data) {
    const data = {
      lottery_id: _data.id,
      start: _data.startDate ? startOfDateTime(_data.startDate) : undefined,
      end: _data.endDate ? endOfDateTime(_data.endDate) : undefined,
      start_period: _data.startPeriod || undefined,
      end_period: _data.endPeriod || undefined,
      limit: _data.limit || undefined
    }
    const res = await this.$api.getGameResult({ params: data })
    if (res.code === '0') {
      commit('gotGameResult', res.data)
    }
  },
  async getGameList ({ commit }, id) {
    const res = await this.$api.getGameList({ params: { classified_id: id } })
    if (res.code === '0') {
      commit('gotGameList', res.data)
    }
  }
}
