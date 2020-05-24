<template>
  <div>
    <BreadCrumb
      :crumb="['福彩规则']"
    />
    <!---->
    <div class="draw-bg pt-4 pb-4">
      <div class="container">
        <div class="row">
          <SideGameMenu :menu="menu" menutitle="福彩规则" linkname="rule" />
          <div class="col-md-10">
            <div class="draw-box2 h-100">
              <h1 class="draw-name">
                <span>{{ gameInfo.name }}规则</span>
              </h1>
              <div class="row news-area">
                <template v-if="gameInfo.rule">
                  <div class="news-com" v-html="gameInfo.rule" />
                </template>
                <div v-else class="nodata">
                  <img src="/images/nodata.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Rule',
  layout: 'main',
  watchQuery: true,
  components: {
    BreadCrumb: () => import('@/components/BreadCrumb'),
    SideGameMenu: () => import('@/components/history/SideGameMenu')

  },
  middleware ({ store, redirect, query, params }) {
    if (!query.game) {
      const cate = store.getters['site/lotteryClassifiedList'][0].id
      const game = store.getters['site/lotteryClassifiedList'][0].game[0].id
      redirect({
        name: 'rule',
        query: { ...query, cate, game }
      })
    }
  },
  async fetch ({ app, store, redirect, query, route }) {
    await store.dispatch('lottery/getGameInfo', { id: query.game })
  },
  computed: {
    ...mapGetters({
      menu: 'site/lotteryClassifiedList',
      gameInfo: 'lottery/gameInfo'
    })
  }
}
</script>

<style lang="scss">
</style>
