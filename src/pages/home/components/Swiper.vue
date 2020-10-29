<template>
  <div class="box">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide><img src="../../../assets/images/img1.jpg" /></swiper-slide>
      <swiper-slide><img src="../../../assets/images/img2.jpg" /></swiper-slide>
      <swiper-slide><img src="../../../assets/images/img3.jpg" /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>
<style  scoped lang="stylus">
.box >>> .swiper-pagination-bullet-active{
  background #fff
}
.box
  height 0
  padding-bottom 73.2%
  background-color #ccc
  img
    width: 100%
</style>
