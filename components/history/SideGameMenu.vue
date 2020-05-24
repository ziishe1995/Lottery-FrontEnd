<template>
  <div class="col-md-2">
    <!---->
    <div class="nav-side-menu">
      <div class="brand">
        {{ menutitle }}
      </div>
      <i
        class="fa fa-bars fa-2x toggle-btn"
        data-toggle="collapse"
        data-target="#menu-content"
      />

      <div id="accordion" class="side-menu-list">
        <ul id="menu-content" class="menu-content collapse out">
          <template v-for="(c, index) in menu">
            <li
              :key="`li_${index}`"
              aria-expanded="true"
              data-toggle="collapse"
              :data-target="`#menu_${index}`"
              class="collapsed"
              :class="{active: c.id === +$route.query.cate && c.game.findIndex(g => g.id === +$route.query.game) > -1}"
            >
              <a href="#">{{ c.name }} <span v-if="c.game.length" class="arrow" /></a>
            </li>
            <ul
              v-if="c.game.length > 0"
              :id="`menu_${index}`"
              :key="`ul_${index}`"
              class="sub-menu collapse"
              data-parent="#accordion"
              :class="{show: c.id === +$route.query.cate && c.game.findIndex(g => g.id === +$route.query.game) > -1}"
            >
              <li
                v-for="(g, i) in c.game"
                :key="i"
                :class="{active: c.id === +$route.query.cate && g.id === +$route.query.game}"
              >
                <nuxt-link :to="{name: linkname, query: {cate: c.id, game: g.id}}">
                  {{ g.name }}
                </nuxt-link>
              </li>
            </ul>
          </template>
        </ul>
      </div>
    </div>
    <!---->
  </div>
</template>
<script>
export default {
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    menutitle: {
      type: String,
      default: () => '所有选单'
    },
    linkname: {
      type: String,
      default: () => 'history'
    }
  }
}
</script>
