<template>
  <div class="box">
    <swiper ref="mySwiper" :options="swiperOption" v-if="sweiperlength">
      <swiper-slide v-for="item of list" :key='item.id'>
        <img :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    sweiperlength () {
      return this.list.length
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
  padding-bottom 31.25%
  background-color #ccc
  img
    width: 100%
</style>
