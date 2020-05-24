export const AD = {
  namespaced: false,
  baseUrl: 'advertisement',
  apis: {
    getAd: {
      method: 'get',
      url: 'client'
    },
    getAdTypeList: {
      method: 'get',
      url: 'client/type_list'
    }
  }
}
