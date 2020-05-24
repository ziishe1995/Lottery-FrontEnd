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
              <ul class="draw-tab">
                <li
                  v-for="(c,i) in newsClassifiedList"
                  :key="i"
                  :class="{'active':c.id ==classified_id }"
                >
                  <nuxt-link :to="{name: 'news',query: {page:1,classified_id: c.id}}">
                    {{ c.name }}
                  </nuxt-link>
                </li>
              </ul>
              <div class="row news-area pb-5">
                <template v-if="newsList">
                  <ul>
                    <li v-for="(n,i) in newsList.news" :key="i">
                      <nuxt-link :to="{name: 'news-con',query: {id: n.id},params:{back:'news'}}" v-html=" n.title" />
                      <span
                        class="news-time float-right"
                      >{{ n.post_time.split(" ")[0] }}</span>
                    </li>
                  </ul>
                </template>
                <div v-else class="nodata">
                  <img src="/images/nodata.png" alt="">
                </div>
              </div>
              <div class="pt-3 pb-3 page fixed-bottom">
                <paginator
                  class="pagination justify-content-center"
                  :page="page"
                  :count="Number(newsTotal)"
                  @change="getNewsList"
                />
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
export const perpage = 10
export default {
  name: 'Result',
  layout: 'main',
  watchQuery: true,
  key: to => to.fullPath,
  components: {
    BreadCrumb: () => import('@/components/BreadCrumb'),
    BlockNews: () => import('@/components/BlockNews')
  },
  middleware ({ store, redirect, query, params }) {
    if (!query.classified_id) {
      redirect({
        name: 'news',
        query: {
          ...query,
          page: 1,
          classified_id: store.getters['news/newsClassifiedList'][0].id
        }
      })
    }
  },
  async asyncData ({ store, redirect, query, params }) {
    const page = +query.page || 1
    const data = {
      ...query,
      perpage,
      page
    }
    const classified = { classified_id: query.classified_id }
    const promiseArr = [
      await store.dispatch('news/getSideNewsList'),
      await store.dispatch('news/getNewsTotal', classified),
      await store.dispatch('news/getNewsList', data)
    ]
    await Promise.all(promiseArr)
    return {
      settingsInfo: store.getters['site/settingsInfo'],
      newsList: store.getters['news/newsList'],
      sideNewsList: store.getters['news/sideNewsList'],
      newsTotal: store.getters['news/newsTotal'],
      newsClassifiedList: store.getters['news/newsClassifiedList'],
      page,
      perpage,
      classified_id: query.classified_id
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
    getNewsList (p) {
      this.$router.push({ name: 'news', query: { page: p, classified_id: this.classified_id } })
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
