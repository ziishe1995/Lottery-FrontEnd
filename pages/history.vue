<template>
  <div>
    <BreadCrumb
      :crumb="['往期开奖']"
    />
    <!---->
    <div class="draw-bg pt-4 pb-4">
      <div class="container">
        <div class="row">
          <SideGameMenu :menu="menu" menutitle="所有选单" linkname="history" />
          <div class="col-md-10">
            <div class="draw-box2 h-100">
              <h1 class="draw-name">
                <span>{{ gameResult.name }}往期开奖</span>
              </h1>
              <div class="row p-3 draw-area align-self-center">
                <div class="col-md-2 col-12 pl-0 pr-0 d-logo">
                  <a href=""><img
                    :src="resolveResource(gameResult.image_path)|| '/images/noimg.png'"
                    class="img-fluid"
                    :alt="gameResult.name"
                  ></a>
                </div>
                <div class="col-md-10 col-12 align-self-center">
                  <div class="row">
                    <GameResultSelector />
                    <div class="col-md-2 draw-time">
                      <div class="period">
                        <nuxt-link :to="{name: 'rule',query: {cate: $route.query.cate,game: $route.query.game}}">
                          游戏规则
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="draw-o-title">
                    往期开奖号码和中奖情况
                  </div>
                  <GameHistoryList :game-result="gameResult" :use-pager="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'History',
  layout: 'main',
  components: {
    BreadCrumb: () => import('@/components/BreadCrumb'),
    SideGameMenu: () => import('@/components/history/SideGameMenu'),
    GameHistoryList: () => import('@/components/GameHistoryList'),
    GameResultSelector: () => import('@/components/history/GameResultSelector')
  },
  async fetch ({ app, store, redirect, query }) {
    await store.dispatch('lottery/getGameResult', { id: query.game, limit: 30 })
  },
  watchQuery: true,
  computed: {
    ...mapGetters({
      menu: 'site/lotteryClassifiedList',
      gameResult: 'lottery/gameResult'
    })
  }
}
</script>

<style lang="scss">
</style>
