<template>
  <div class="col-md-10">
    <div class="form-group m-0 row">
      <label for="" class="col-md-2 col-form-label pr-0">
        按期次查询 :</label>
      <div class="col-md-9 pl-0">
        <ul class="draw-o-list">
          <li v-for="opt in limitOptions" :key="opt">
            <a
              href=""
              :class="{'active': currentLimitOpt === opt}"
              @click.prevent="onClickedLimit(opt)"
            >近{{ opt }}期</a>
          </li>
          <li class="dropdown">
            <form>
              <a
                id="navbarDropdownMenuLink"
                class="dropdown-toggle"
                :class="{'active': currentLimitOpt === 'custom'}"
                href=""
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                自定义查询
              </a>
              <div
                class="dropdown-menu dropdown-menu-right DropdownTab"
                aria-labelledby="navbarDropdownMenuLink"
                style="width:100%"
              >
                <div class="container">
                  <ul
                    id="tabs"
                    class="nav nav-tabs"
                    role="tablist"
                  >
                    <li
                      v-for="(tab,i) in customSearchOptions"
                      :key="i"
                      class="nav-item"
                    >
                      <a
                        :id="`tab-${tab.code}`"
                        :href="`#pane-${tab.code}`"
                        class="nav-link"
                        :class="{active: i === 0}"
                        data-toggle="tab"
                        role="tab"
                      >按{{ tab.name }}</a>
                    </li>
                  </ul>

                  <div
                    id="content"
                    class="tab-content"
                    role="tablist"
                  >
                    <component
                      :is="`CustomTabForm${tab.code}`"
                      v-for="(tab, i) in customSearchOptions"
                      :key="i"
                      @change:currentLimitOpt="d => currentLimitOpt = d"
                    />
                  </div>
                </div>
              </div>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    CustomTabFormA: () => import('@/components/history/CustomTabFormA'),
    CustomTabFormB: () => import('@/components/history/CustomTabFormB'),
    CustomTabFormC: () => import('@/components/history/CustomTabFormC')
  },
  data () {
    return {
      limitOptions: [30, 50, 100],
      currentLimitOpt: 30,
      customSearchOptions: [
        { name: '期數', code: 'A' },
        { name: '期号', code: 'B' },
        { name: '天数', code: 'C' }
      ]
    }
  },
  watch: {
    '$route.query' () {
      this.currentLimitOpt = 30
    }
  },
  methods: {
    async onClickedLimit (limit) {
      this.$nuxt.$loading.start()
      const data = {
        id: this.$route.query.game,
        limit
      }
      await this.$store.dispatch('lottery/getGameResult', data)
      this.currentLimitOpt = limit
      this.$nuxt.$loading.finish()
    }
  }
}
</script>
