<template>
  <div>
    <h1>LOGs TEST</h1>
    <pre>{{ $store.state.log.host }}</pre>
    <pre>{{ $store.getters['log/logs'] }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Logs',
  async fetch ({ app, store, redirect }) {
    // await store.dispatch('site/getInfo')
  },
  mounted () {
    console.log(this.$store.getters['log/logs'])
  }
}
</script>
