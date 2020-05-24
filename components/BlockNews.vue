<template>
  <div class="news-box">
    <h1 class="newsmore">
      <span class="news-title">要闻</span>
      <nuxt-link :to="{name: 'news',query: {page: 1,classified_id: newsClassifiedList[0].id}}">
        更多
      </nuxt-link>
    </h1>
    <ul class="news-list">
      <li v-for="(n,i) in news" :key="i">
        <div class="date">
          {{ n.post_time }}
        </div>
        <nuxt-link :to="{name: 'news-con',query: {id: n.id}}" v-html=" n.title" />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    news: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      settingsInfo: 'site/settingsInfo',
      newsClassifiedList: 'news/newsClassifiedList'
    })
  },
  head () {
    return {
      link: [{ rel: 'stylesheet', href: '/css/TLstyle.css' }]
    }
  }
}
</script>
