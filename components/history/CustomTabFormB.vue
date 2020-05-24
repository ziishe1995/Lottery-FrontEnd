<template>
  <div
    id="pane-B"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="tab-B"
  >
    <div class="tab-card">
      <div class="sqNr dq">
        <div class="dzcx">
          第
          <input
            v-model="form.startPeriod"
            maxlength="12"
            class="inpQa"
            type="text"
          >
          至
          <input
            v-model="form.endPeriod"
            maxlength="12"
            class="inpQz"
            type="text"
          >
        </div>
        <p>
          <small v-if="$v.$invalid && $v.$dirty" class="text-danger">
            ＊以上欄位不可為空
          </small>
        </p>

        <p class="zshu">
          注：期号格式为 2017041
        </p>
        <div class="text-center">
          <div class="row">
            <div class="col-6 text-right">
              <button
                class="btn-draw"
                @click.prevent="onSubmit"
              >
                开始查询
              </button>
            </div>
            <div class="col-6 text-left">
              <button
                class="btn btn-reset"
                @click.prevent="onReset"
              >
                重置
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
const initForm = {
  startPeriod: '',
  endPeriod: ''
}
export default {
  data () {
    return {
      form: Object.assign({}, initForm)
    }
  },
  validations: {
    form: {
      startPeriod: { required },
      endPeriod: { required }
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
    },
    onReset () {
      this.$v.$reset()
      this.form = Object.assign({}, initForm)
    }
  }
}
</script>
