<template>
  <div class="slider-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <b-carousel
            id="myCarousel"
            v-model="slide"
            class="carousel slide"
            :interval="4000"
            controls
            indicators
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <div class="carousel-inner">
              <template v-if="ads.length>0">
                <b-carousel-slide
                  v-for="(a,i) in ads"
                  :key="i"
                  class="carousel-item"
                >
                  <template v-slot:img>
                    <img
                      :src="resolveResource(a.image_path)"
                      :alt="a.title"
                      width="100%"
                      height="100%"
                      :title="a.title"
                      :class="{'h-hover':a.url}"
                      @click="openLink(a)"
                    >
                  </template>
                </b-carousel-slide>
              </template>
              <template v-else>
                <b-carousel-slide
                  v-for="(a,i) in 1"
                  :key="i"
                  class="carousel-item"
                >
                  <template v-slot:img>
                    <img
                      src="images/slider/slider01.png"
                      width="100%"
                      height="100%"
                    >
                  </template>
                </b-carousel-slide>
              </template>
            </div>
          </b-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ads: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      count: 0,
      slide: 0,
      sliding: null
    }
  },
  methods: {
    openLink (a) {
      if (a.url) {
        if (a.is_blank === 'Y') {
          window.open(a.url, '_blank', 'height=600,width=800')
        } else {
          window.location.href = a.url
        }
      }
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
