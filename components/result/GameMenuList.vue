<template>
  <div class="sub-menu">
    <ul>
      <!---->
      <li v-for="(g, i) in first5List" :key="i">
        <nuxt-link
          active-class="active"
          exact
          :to="{name: 'result', query: { cate: $route.query.cate, game: g.id }}"
        >
          {{ g.name }}
        </nuxt-link>
      </li>
      <!---->
      <li v-if="gameList.length > 5">
        <a
          class="justify-content-center dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          href=""
        >更多彩种</a>
        <ul class="dropdown-menu moredraw p-3 text-center dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <!---->
          <div v-for="(group, index) in chunkRestList" :key="index" class="row">
            <div v-for="(game, i) in group" :key="i" class="col">
              <nuxt-link
                v-if="game"
                class="col"
                active-class="active"
                exact
                :to="{name: 'result', query: { cate: $route.query.cate, game: game.id}}"
              >
                {{ game.name }}
              </nuxt-link>
            </div>
          </div>
          <!---->
        </ul>
      </li>
      <!---->
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    gameList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    first5List () {
      return _.take(this.gameList, 5)
    },
    chunkRestList () {
      const data = _(this.gameList).drop(5).chunk(5).value()
      if (data.length !== 1 && data[data.length - 1].length < 5) {
        for (let i = 0; i < (5 - data[data.length - 1].length + 1); i++) {
          data[data.length - 1].push('')
        }
      }
      return data
    }
  }
}
</script>
