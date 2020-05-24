<template>
  <div>
    <BreadCrumb
      :crumb="['要闻']"
    />
    <!---->
    <div class="draw-bg pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="draw-box2 h-100">
              <template v-if="newsFullText.full_text">
                <h1 class="draw-name">
                  <span>{{ newsFullText.description }}</span>
                </h1>
                <div class="row news-area">
                  <div class="news-title" v-html="newsFullText.title" />
                  <div class="news-info">
                    <div class="news-date float-left">
                      <span>{{ newsFullText.post_time }}</span>
                    </div>
                    <div class="news-list float-right">
                      <span class="h-hover" @click="backNewsList">
                        回列表
                      </span>
                    </div>
                  </div>
                  <div class="news-com" v-html="newsFullText.full_text.content" />
                </div>
              </template>
              <div v-else class="nodata">
                <img src="/images/nodata.png" alt="">
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
  name: 'NewsCon',
  layout: 'main',
  watchQuery: true,
  key: to => to.fullPath,
  components: {
    BreadCrumb: () => import('@/components/BreadCrumb'),
    BlockNews: () => import('@/components/BlockNews')
  },
  async asyncData ({ store, redirect, query, params }) {
    const data = {
      ...query
    }
    const promiseArr = [
      store.dispatch('news/getSideNewsList'),
      store.dispatch('news/getNewsFullText', data)
    ]
    await Promise.all(promiseArr)
    return {
      settingsInfo: store.getters['site/settingsInfo'],
      sideNewsList: store.getters['news/sideNewsList'],
      newsClassifiedList: store.getters['news/newsClassifiedList'],
      newsFullText: store.getters['news/newsFullText'],
      back: params.back
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
    })
  },
  mounted () {
  },
  methods: {
    backNewsList () {
      if (this.back) {
        this.$router.go(-1)
      } else {
        this.$router.push({ name: 'news', query: { page: 1, classified_id: this.newsClassifiedList[0].id } })
      }
    }
  },
  head () {
    return {
      link: [{ rel: 'stylesheet', href: '/css/TLstyle.css' }]
    }
  }
}
</script>

<style lang="scss">
</style>
