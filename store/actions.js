export default {
  async nuxtServerInit ({ commit, dispatch }, { redirect, store }) {
    await dispatch('site/getSettings')
    await dispatch('site/getLotteryClassified')
    await dispatch('ad/getAdTypeList')
    await dispatch('news/getNewsClassified')
  }
}
