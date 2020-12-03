<template>
  <div class="container" @click="handleGallaryClick">
    <div class="warpper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img :src="item" class="warpper-img" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped lang="stylus">
.container >>> .swiper-container
  overflow inherit
.container
  z-index: 99
  background #000
  position fixed
  left 0
  top 0
  bottom 0
  right 0
  display flex
  flex-direction column
  justify-content center
  .warpper
    height 0
    padding-bottom 100%
    .warpper-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem

</style>
