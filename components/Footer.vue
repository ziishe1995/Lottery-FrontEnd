<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <img :src="resolveResource(settingsInfo.logo_path)" alt="" class="img-fluid">
        </div>
        <div class="col-10">
          <ul class="float-left">
            <li>各地福彩： </li>
            <li><a href="">北京</a></li>
            <li><a href="">天津</a></li>
            <li><a href="">河北</a></li>
            <li><a href="">山西</a></li>
            <li><a href="">内蒙古</a></li>
            <li><a href="">辽宁</a></li>
            <li><a href="">吉林</a></li>
            <li><a href="">黑龙江</a></li>
            <li><a href="">上海</a></li>
            <li><a href="">江苏</a></li>
            <li><a href="">浙江</a></li>
            <li><a href="">安徽</a></li>
            <li><a href="">福建</a></li>
            <li><a href="">江西</a></li>
            <li><a href="">山东</a></li>
            <li><a href="">河南</a></li>
            <li><a href="">湖北</a></li>
            <li><a href="">湖南</a></li>
            <li><a href="">广东</a></li>
            <li><a href="">深圳</a></li>
            <li><a href="">广西</a></li>
            <li><a href="">海南</a></li>
            <li><a href="">重庆</a></li>
            <li><a href="">四川</a></li>
            <li><a href="">贵州</a></li>
            <li><a href="">云南</a></li>
            <li><a href="">陕西</a></li>
            <li><a href="">甘肃</a></li>
            <li><a href="">青海</a></li>
            <li><a href="">宁夏</a></li>
            <li><a href="">新疆</a></li>
          </ul>
          <div class="float-left pt-2 pl-2 copyright">
            <nuxt-link :to="{name: 'news',query: {page: 1}}">
              福彩要闻
            </nuxt-link>
            <nuxt-link :to="{name: 'rule'}">
              福彩规则
            </nuxt-link>
            版权所有：{{ settingsInfo.copyright }}
            ICP备案编号：{{ settingsInfo.icp }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  components: {},
  computed: {
    ...mapGetters({
      settingsInfo: 'site/settingsInfo'
    })
  },
  mounted () {}
}
</script>
