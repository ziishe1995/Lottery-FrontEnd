<template>
  <div>
    <BreadCrumb
      :crumb="['首页','信息发布渠道']"
    />
    <!---->
    <div class="draw-bg pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="draw-box2 h-100">
              <h1 class="draw-name">
                <span>信息发布渠道</span>
              </h1>
              <div class="row news-area">
                <div class="news-title">
                  中国福利彩票开奖信息发布渠道
                </div>
                <div class="news-info">
                  <div class="news-date float-left">
                    <span>2019-12-30 10:30</span>
                    <span>标签：中国福彩网——中国福利彩票官方网站</span>
                  </div>
                </div>
                <div class="news-com">
                  <p>
                    1.
                    看遗漏，找组合<br>快三的组合就是两个任意不同的号码形成的组合号码，每个组合含二不同号码2个，三不同号码4个，合计6个号码进行投注。以10期计划为宜。[点击投注快三玩法]
                  </p>
                  <p>
                    2. 看奇偶，找对子<br>
                    当开奖号码有25期左右没有开出全奇或者全偶的对子的时候，我们就可以加入
                    全奇的对子进行投注，就是113133115155335355。据快三开奖以来的数据统计，全奇的对子基本上40期不少于2次。全偶也是这样。
                  </p>
                  <p>
                    3. 看跨度，找切口<br>
                    在快三中奖的号码中，跨度3的号码最为均匀。当我们发现跨度3的号码遗漏达20期以上，可以稳步加入。跨度3共有3个组合形式，即14组合的114124134144，25组合的225235245255，36组合的336346356，我们在这3个组合当中选择其中之一进行投注，会取得比较好的收益。
                  </p>
                  <p>
                    4. 看前十，找下移<br>
                    快三号码有个规律，当期开奖号码与前10期的号码有密切相关，会有号码重现。比如30期的开奖号码是125，那么40期的投注号码应该考虑125有号码出现。
                  </p>
                  <p>
                    >5. 看隔期，打对子<br>
                    快三的另一个特点是隔期会出对子，比如15期开奖号码246，17期就可以关注246会出现一个对子。也就是隔期下移两码。
                  </p>
                  <p>
                    6. 看和值，打直坐<br>
                    当快三本期开奖号码是三不同的出现以后，会紧跟一个或者多个相同和值的二不同号码，比如当期开奖号码136，可以考虑打226334。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <BlockNews :news="sideNewsList" />
            <div class="drawnewslink pt-2 pb-2">
              <nuxt-link :to="{name: 'publish'}">
                <img class="w-100 img-fluid" src="images/drawnewslink.png" alt="">
              </nuxt-link>
            </div>
            <div class="drawnewslink pt-2 pb-2">
              <nuxt-link :to="{name: 'rule'}">
                <img class="w-100 img-fluid" src="images/gameplay.png" alt="">
              </nuxt-link>
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
  name: 'Result',
  layout: 'main',
  components: {
    BreadCrumb: () => import('@/components/BreadCrumb'),
    BlockNews: () => import('@/components/BlockNews')
  },
  async fetch ({ app, store, redirect }) {
    await store.dispatch('news/getSideNewsList')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      sideNewsList: 'news/sideNewsList'
    })
  },
  mounted () {
    this.$nextTick(() => {
      // this.slickComponent = 'Slick'
      // $('html,body').scrollTop(0)
    })
  },
  head () {
    return {
      // link: [{ rel: 'stylesheet', href: '/css/TLstyle.css' }]
    }
  }
}
</script>

<style lang="scss">
</style>
