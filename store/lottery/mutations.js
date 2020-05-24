export default {
  gotGameInfo (state, gameInfo) {
    state.gameInfo = gameInfo
  },
  gotGameResult (state, data) {
    state.gameResult = {
      ...data,
      draw_result: _.orderBy(data.draw_result, 'period', 'desc')
    }
  },
  gotGameList (state, gameList) {
    state.gameList = _.orderBy(gameList, 'id')
  }
}
