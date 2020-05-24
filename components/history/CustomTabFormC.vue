<template>
  <div
    id="pane-C"
    class="tab-pane fade"
    role="tabpanel"
    aria-labelledby="tab-C"
  >
    <div class="tab-card">
      <div class="row">
        <div class="col-md-5 pr-lg-0">
          <input
            id="inputDate"
            type="datep"
            placeholder="请选择日期"
          >
        </div>
        <div
          class="col-md-2 text-center p-0 align-self-center"
        >
          至
        </div>
        <div class="col-md-5 pl-lg-0">
          <input
            id="inputDate2"
            type="datep"
            placeholder="请选择日期"
          >
        </div>
      </div>
      <p>
        <small v-if="$v.$invalid && $v.$dirty" class="text-danger">
          ＊以上欄位不可為空
        </small>
      </p>
      <div class="text-center pt-3">
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
const initForm = {
  startDate: '',
  endDate: ''
}
export default {
  data () {
    return {
      form: Object.assign({}, initForm)
    }
  },
  validations: {
    form: {
      startDate: { required },
      endDate: { required }
    }
  },
  mounted () {
    $('#inputDate,#inputDate2').datepicker({
      language: 'zh-CN',
      weekStart: 1,
      daysOfWeekHighlighted: '6,0',
      autoclose: true,
      todayHighlight: true,
      format: 'yyyy-mm-dd'
    })
  },
  methods: {
    setForm () {
      this.form = Object.assign({}, initForm, {
        startDate: $('#inputDate').datepicker('getDate'),
        endDate: $('#inputDate2').datepicker('getDate')
      })
    },
    async onSubmit () {
      this.setForm()
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
