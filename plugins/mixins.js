import Vue from 'vue'
Vue.mixin({
  data () {
    return {
      siteTitle: 'lotterydraw'
    }
  },
  methods: {
    onPageChange (page) {
      this.$router.push({ ...this.$route, query: { ...this.$route.query, page } })
    },
    resolveResource (url) {
      if (typeof url === 'string') {
        return url && url.includes('http') ? url : `//${process.env.RESOURCE_BASE_URL}/${url}`
      } else { return '' }
    },
    shareTo (type, subTitle) {
      const url = location.href
      let title = document.title
      if (subTitle) {
        title = `${title} - ${subTitle}`
      }
      let link
      if (type === 'telegram') {
        link = `https://telegram.me/share/url?url=${url}&text=${title}`
      } else if (type === 'qq') {
        link = `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}`
      }
      window.open(link, '_blank', 'height=600,width=800')
    },
    checkIfBlue (code, isLast) {
      if (code === 'fsd') {
        return true
      } else if (code === 'qlc' || code === 'ssq') {
        return isLast
      }
      return false
    },
    displayRewardRule (code) {
      const games = ['fsd', 'ssq', 'qlc']
      return games.includes(code)
    }
  },
  head () {
    return {
      titleTemplate: (subName) => {
        const siteName = this.$store && this.$store.getters['site/settingsInfo'].title
        return subName ? `${siteName} - ${subName}` : siteName
      }
    }
  }

})
