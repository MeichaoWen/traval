<template>
<div>
  <div class="banner" @click="handleGallary">
    <img src="../../../assets/images/detail01.jpg" class="banner-img" />
    <div class="banner-info">
      <div class="banner-title">超高性价比+全程入住近海酒店+赠车技表演秀+嗨玩蜈支洲一整天</div>
      <div class="banner-number">
        <span class="iconfont">&#xe644;</span>
        39
      </div>
    </div>
  </div>
  <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        require('../../../assets/images/detail01.jpg'), require('../../../assets/images/detail02.jpg')
      ]
    }
  },
  methods: {
    handleGallary () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/mintext.styl'
.banner
  height: 0;
  overflow: hidden;
  padding-bottom: 66.67%;
  position: relative;
  .banner-img
    width: 100%;
  .banner-info
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8))
    display flex
    justify-content space-around
    position: absolute;
    left: 0;
    bottom: 0;
    line-height: .6rem
    color: #fff
    .banner-title
      width 6rem
      padding 0 .2rem
      ellipsis()
    .banner-number
      flex-shrink 0
      padding 0 .4rem
      height: .4rem
      margin-top .1rem
      line-height: .4rem
      border-radius .2rem
      background rgba(0,0,0,.8)
</style>
