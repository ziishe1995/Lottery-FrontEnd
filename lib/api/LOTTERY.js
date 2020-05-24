export const LOTTERY = {
  namespaced: false,
  baseUrl: '',
  apis: {
    getGameInfo: {
      method: 'get',
      url: 'lottery/client/info'
    },
    getGameResult: {
      method: 'get',
      url: 'lottery_result/client'
    },
    getGameList: {
      method: 'get',
      url: 'lottery_result/client/classified'
    }
  }
}
