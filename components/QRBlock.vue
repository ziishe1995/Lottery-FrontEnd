<template>
  <div v-if="settingsInfo" class="qr-bg pt-3 pb-3">
    <div class="container">
      <div class="row">
        <div v-if="settingsInfo.ios_qr_path" class="col-md-4">
          <div class="qr-box">
            <div class="row">
              <div class="col-4">
                <img :src="resolveResource(settingsInfo.ios_qr_path)" alt="">
              </div>
              <div class="col-8">
                <p>扫一扫下载</p>
                <p>{{ settingsInfo.title }}客户端</p>
                <p>(iPhone)</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="settingsInfo.android_qr_path" class="col-md-4">
          <div class="qr-box">
            <div class="row">
              <div class="col-4">
                <img :src="resolveResource(settingsInfo.android_qr_path)" alt="">
              </div>
              <div class="col-8">
                <p>扫一扫下载</p>
                <p>{{ settingsInfo.title }}客户端</p>
                <p>(Android)</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-4">
          <div class="qr-box">
            <div class="row">
              <div class="col-4">
                <img src="images/index/qrcode.png" alt="">
              </div>
              <div class="col-8">
                <p>扫一扫下载</p>
                <p>中福彩客户端</p>
                <p>(Android)</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      settingsInfo: 'site/settingsInfo'
    })
  }
}
</script>
