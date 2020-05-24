<template>
  <div class="ad-bg pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <a class="adlink" href=""><img
            src="images/index/ad1.png"
            class="w-100 img-fluid"
            alt=""
          ></a>
        </div>
        <div class="col-md-4">
          <a class="adlink" href=""><img
            src="images/index/ad2.png"
            class="w-100 img-fluid"
            alt=""
          ></a>
        </div>
        <div class="col-md-4">
          <a class="adlink" href=""><img
            src="images/index/ad3.png"
            class="w-100 img-fluid"
            alt=""
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ad: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
