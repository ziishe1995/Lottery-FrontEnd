<template>
  <div class="breadcrumb-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="breadcrumb">
            当前位置：
            <span>首页</span>
            <span v-for="(c,i) in crumb" :key="i">
              / {{ c }}
            </span>
          </div>
        </div>
        <div class="col-md-9">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    crumb: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters({
      menu: 'site/lotteryClassifiedList'
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
