<template>
  <div v-if="menu" class="topmenu">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg p-0">
            <nuxt-link class="navbar-brand" href="" :to="{name: 'index'}">
              <img :src="resolveResource(settingsInfo.logo_path)" alt="" class="img-fluid">
            </nuxt-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse menu-list">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active" @click="closeMenu">
                  <nuxt-link class="nav-link" :to="{name: 'index'}">
                    首页
                  </nuxt-link>
                </li>
                <!---->
                <li v-for="(c, i) in menu" :key="i" class="nav-item" @click="closeMenu">
                  <nuxt-link
                    class="nav-link"
                    :active-class="($route.name === 'result'&&+$route.query.cate===c.id) ? 'active' : '' "
                    :to="{name: 'result', query: {
                      cate: c.id,
                      game: c.game[0].id,
                    }}"
                  >
                    {{ c.name }}
                  </nuxt-link>
                </li>
                <!---->
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {},
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      settingsInfo: 'site/settingsInfo',
      menu: 'site/lotteryClassifiedList'
    })
  },
  methods: {
    closeMenu () {
      $('#navbarSupportedContent').removeClass('show')
    }
  }
}
</script>
