<template>
  <div
    id="pane-A"
    class="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="tab-A"
  >
    <div class="tab-card">
      <form>
        <label
          for="drawSelect"
        >我要查询最近</label>
        <input
          v-model="form.limit"
          type="text"
          maxlength="12"
        >期
      </form>
      <p>
        <small v-if="$v.$invalid && $v.$dirty" class="text-danger">
          ＊欄位不可為空
        </small>
      </p>
      <p class="zshu">
        注：最多100期
      </p>
      <div class="text-center">
        <button
          class="btn btn-draw"
          @click.prevent="onSubmit"
        >
          开始查询
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        limit: ''
      }
    }
  },
  validations: {
    form: {
      limit: { required }
    }
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }
      this.$nuxt.$loading.start()
      const data = {
        ...this.form,
        id: this.$route.query.game
      }
      await this.$store.dispatch('lottery/getGameResult', data)
      $('#navbarDropdownMenuLink').click()
      this.$nuxt.$loading.finish()
      this.$emit('change:currentLimitOpt', 'custom')
    }
  }
}
</script>
