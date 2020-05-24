<template>
  <div v-if=" gameResult">
    <BreadCrumb
      v-if="gameResult.classified"
      :crumb="[getCateName($route.query.cate), gameResult.name]"
    >
      <GameMenuList :game-list="gameList" />
    </BreadCrumb>
    <!---->
    <div class="draw-bg pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="draw-box2 h-100">
              <h1 class="draw-name clearfix">
                <span>{{ gameResult.name }}开奖结果</span>
                <div class="float-right pt-2">
                  {{ gameInfo.description }}
                </div>
              </h1>
              <template v-if="gameResult.draw_result.length > 0">
                <GameResultInfo :game-result="gameResult" />
                <div class="row">
                  <div class="col-md-12">
                    <div class="draw-o-title">
                      过往开奖
                      <nuxt-link
                        :to="{
                          name: 'history',
                          query: {cate: $route.query.cate,game: $route.query.game}
                        }"
                        class="float-right pt-1"
                      >
                        看更多
                      </nuxt-link>
                    </div>
                    <GameHistoryList :game-result="gameResult" />
                  </div>
                </div>
              </template>
              <div v-else class="nodata">
                <img src="/images/nodata.png" alt="">
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <BlockNews :news="newsList" />
            <!---->
            <div class="drawnewslink pt-2 pb-2">
              <nuxt-link :to="{name: 'publish'}">
                <img class="w-100 img-fluid" src="images/drawnewslink.png" alt="">
              </nuxt-link>
            </div>
            <!---->
            <component
              :is="`RewardRule_${gameResult.code}`"
              v-if="displayRewardRule(gameResult.code)"
            />
            <!---->
            <div class="drawnewslink pt-2 pb-2">
              <nuxt-link :to="{name: 'rule',query: {cate: $route.query.cate,game: $route.query.game}}">
                <img class="w-100 img-fluid" src="images/gameplay.png" alt="">
              </nuxt-link>
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Result',
  layout: 'main',
  components: {
    BreadCrumb: () => import('@/components/BreadCrumb'),
    BlockNews: () => import('@/components/BlockNews'),
    GameMenuList: () => import('@/components/result/GameMenuList'),
    GameHistoryList: () => import('@/components/GameHistoryList'),
    GameResultInfo: () => import('@/components/result/GameResultInfo'),
    RewardRule_fsd: () => import('@/components/result/rewardRule/fsd'),
    RewardRule_ssq: () => import('@/components/result/rewardRule/ssq'),
    RewardRule_qlc: () => import('@/components/result/rewardRule/qlc')
  },
  async fetch ({ app, store, redirect, query }) {
    await store.dispatch('news/getSideNewsList')
    await store.dispatch('lottery/getGameInfo', { id: query.game })
    await store.dispatch('lottery/getGameResult', { id: query.game })
    await store.dispatch('lottery/getGameList', query.cate)
  },
  watchQuery: true,
  computed: {
    ...mapGetters({
      gameInfo: 'lottery/gameInfo',
      gameResult: 'lottery/gameResult',
      gameList: 'lottery/gameList',
      newsList: 'news/sideNewsList',
      menu: 'site/lotteryClassifiedList'
    })
  },
  methods: {
    getCateName (c) {
      return this.menu.find(x => x.id === Number(c)).name
    }
  }
}
</script>

<style lang="scss">
</style>
