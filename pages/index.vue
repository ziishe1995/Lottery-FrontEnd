<template>
  <div>
    <component
      :is="slickComponent"
      :ads="topAds"
    />
    <div class="draw-bg pt-3 pb-3">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div v-if="gameList.length>0" class="draw-box">
              <h1 class="draw-name">
                <span>全国彩开奖</span> 公告
              </h1>
              <!---->
              <div v-for="(g,i) in gameList" :key="i">
                <div v-if="g.draw_result" class="row p-3 draw-list">
                  <div class="col-md-2 pl-0 pr-0 d-logo">
                    <a href=""><img :src="resolveResource(g.image_path)|| '/images/noimg.png'" class="img-fluid" alt=""></a>
                  </div>
                  <div class="col-md-7 d-text">
                    <h4 class="title">
                      {{ g.name }} 第{{ g.draw_result.period }}期
                    </h4>
                    <ul
                      class="d-number"
                    >
                      <li
                        v-for="(t, j) in g.draw_result.winning_numbers"
                        :key="j"
                        :class="{'blue': checkIfBlue(g.code, j === g.draw_result.winning_numbers.length-1)}"
                      >
                        {{ t }}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 col-12 d-info">
                    <h5>{{ g.description }}</h5>
                    <div class="d-info-link">
                      <nuxt-link
                        :to="{name: 'result', query: {
                          cate: ($store.getters['site/lotteryClassifiedList'].find(x => x.name === '全国彩') ).id ,
                          game: g.id,
                        }}"
                      >
                        <i class="ic-view" />详情
                      </nuxt-link>
                      <nuxt-link
                        :to="{name: 'history', query: {
                          cate: ($store.getters['site/lotteryClassifiedList'].find(x => x.name === '全国彩') ).id ,
                          game: g.id,
                        }}"
                      >
                        <i class="ic-time" />往期
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <!---->
            </div>
          </div>
          <div class="col-md-4">
            <BlockNews :news="newsList" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  layout: 'main',
  components: {
    Slider: () => import('@/components/index/Slider'),
    BlockNews: () => import('@/components/BlockNews')
  },
  async fetch ({ app, store, redirect }) {
    const adType = store.getters['ad/adTypeList'].find(x => x.code === 'carousel')
    const cate = store.getters['site/lotteryClassifiedList'].find(x => x.name === '全国彩')
    const adData = { type_id: adType.id }
    await store.dispatch('ad/getAd', adData)
    await store.dispatch('news/getSideNewsList')
    if (cate) {
      await store.dispatch('lottery/getGameList', cate.id)
    } else {
      await store.dispatch('lottery/getGameList', -1)
    }
  },
  data () {
    return {
      slickComponent: ''
    }
  },
  computed: {
    ...mapGetters({
      topAds: 'ad/ads',
      topAdsType: 'ad/adTypeList',
      newsList: 'news/sideNewsList',
      gameList: 'lottery/gameList',
      settingsInfo: 'site/settingsInfo'
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.slickComponent = 'Slider'
    })
  }
}
</script>

<style lang="scss">
</style>
