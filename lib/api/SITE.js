export const SITE = {
  namespaced: false,
  baseUrl: '',
  apis: {
    getSettings: {
      method: 'get',
      url: 'site/client/settings'
    },
    getLotteryClassified: {
      method: 'get',
      url: 'lottery_classified/client/all'
    }
  }
}
