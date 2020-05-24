<template>
  <el-pagination
    class="text-center"
    layout="prev, pager, next"
    :total="count"
    :page-size="perpage"
    :current-page="page"
    :pager-count="5"
    @current-change="onPageChange"
  />
</template>
<script>
export default {
  props: {
    page: {
      type: Number,
      default: () => 1
    },
    perpage: {
      type: Number,
      default: () => 20
    },
    count: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    totalPages () {
      return Math.ceil(this.count / this.perpage)
    }
  },
  methods: {
    onPageChange (page) {
      this.$emit('change', page)
    }
  }
}
</script>
