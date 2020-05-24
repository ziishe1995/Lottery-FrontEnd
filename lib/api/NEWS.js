export const NEWS = {
  namespaced: false,
  baseUrl: '',
  apis: {
    getNewsClassified: {
      method: 'get',
      url: 'news_classified/client/all'
    },
    getNewsList: {
      method: 'get',
      url: 'news/client'
    },
    getLatestNewsList: {
      method: 'get',
      url: 'news/client/latest'
    },
    getNewsTotal: {
      method: 'get',
      url: 'news/client/total'
    },
    getNewsFullText: {
      method: 'get',
      url: 'news/client/full_text'
    }
  }
}
