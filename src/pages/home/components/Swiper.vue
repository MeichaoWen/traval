<template>
  <div class="box">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key='item.id'>
        <img :src="item.srcUrl" />
      </swiper-slide>
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
      },
      swiperList: [
        {
          id: '001',
          srcUrl: require('@/assets/images/img8.jpeg')
        },
        {
          id: '002',
          srcUrl: require('@/assets/images/img9.jpeg')
        },
        {
          id: '003',
          srcUrl: require('@/assets/images/img10.jpeg')
        }
      ]
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
  padding-bottom 30.5%
  background-color #ccc
  img
    width: 100%
</style>
