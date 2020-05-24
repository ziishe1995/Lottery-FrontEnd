export default {
  gotNewsClassified (state, newsClassifiedList) {
    state.newsClassifiedList = newsClassifiedList
  },
  gotNewsList (state, newsList) {
    state.newsList = newsList
  },
  gotSideNewsList (state, sideNewsList) {
    state.sideNewsList = sideNewsList
  },
  gotNewsTotal (state, newsTotal) {
    state.newsTotal = newsTotal
  },
  gotNewsFullText (state, newsFullText) {
    state.newsFullText = newsFullText
  }
}
