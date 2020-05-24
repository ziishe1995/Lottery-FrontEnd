<template>
  <div>
    <table class="table table-bordered table-hover f-custom-table">
      <thead>
        <tr>
          <th scope="col">
            期号
          </th>
          <th scope="col">
            开奖日期
          </th>
          <th scope="col">
            开奖号码
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r,j) in list" :key="j">
          <td data-th="期号">
            {{ r.period }}
          </td>
          <td data-th="开奖日期">
            {{ r.draw_time }}
          </td>
          <td data-th="开奖号码">
            <ul
              class="draw-o-n"
            >
              <li
                v-for="(t, i) in r.winning_numbers"
                :key="i"
                :class="{'blue': checkIfBlue(gameResult.code, i === r.winning_numbers.length-1)}"
              >
                {{ t }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <paginator
      v-if="usePager"
      class="mt-3"
      :page="page"
      :count="gameResult.draw_result.length"
      @change="onPageChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    gameResult: {
      type: Object,
      default: () => ({})
    },
    usePager: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      page: 1
    }
  },
  computed: {
    list () {
      return this.usePager
        ? _.chunk(this.gameResult.draw_result, 20)[this.page - 1]
        : this.gameResult.draw_result
    }
  },
  watch: {
    gameResult () {
      this.page = 1
    }
  },
  methods: {
    onPageChange (page) {
      this.page = page
      $('html,body').scrollTop(0)
    }
  }
}
</script>
