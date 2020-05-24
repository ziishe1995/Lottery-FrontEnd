<template>
  <div class="row p-3 draw-area">
    <div class="col-md-3 col-12 d-logo">
      <img :src="resolveResource(gameResult.image_path) || '/images/noimg.png'" class="img-fluid" alt="">
      <nuxt-link
        class="old"
        :to="{name: 'history', query: {
          cate: $route.query.cate,
          game: $route.query.game
        }}"
      >
        <i class="ic-time" />往期开奖
      </nuxt-link>
    </div>
    <div v-if="selectedPeriod" class="col-md-9 col-12">
      <div class="row">
        <div class="col-md-7 pt-2 text-center">
          <form>
            <label for="drawSelect">第 :</label>
            <select
              id="drawSelect"
              v-model="selectedPeriod"
              class="custom-select mr-2 col-md-6 col-12"
            >
              <option
                v-for="(r,i) in gameResult.draw_result.slice(0, 10)"
                :key="i"
                :value="r"
                :selected="i === 0"
              >
                {{ r.period }}
              </option>
            </select>
            开奖结果
          </form>
        </div>
        <div class="col-md-5 opendate">
          开奖日期：{{ selectedPeriod.draw_time | date }}
        </div>
      </div>
      <hr>
      <ul
        class="d-number text-center"
      >
        <li
          v-for="(t, i) in selectedPeriod.winning_numbers"
          :key="i"
          :class="{'blue': checkIfBlue(gameResult.code, i === selectedPeriod.winning_numbers.length-1)}"
        >
          {{ t }}
        </li>
      </ul>

      <hr>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gameResult: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      selectedPeriod: null
    }
  },
  watch: {
    gameResult () {
      this.initSelectedPeriod()
    }
  },
  mounted () {
    this.initSelectedPeriod()
  },
  methods: {
    initSelectedPeriod (e) {
      this.selectedPeriod = this.gameResult.draw_result[0]
    }
  }
}
</script>
