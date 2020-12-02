<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="header-fixed-back">
          <span class="iconfont">&#xe624;</span>
        </div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handelScroll () {
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handelScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handelScroll)
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl'
.header-abs
  position absolute
  left .2rem
  top: .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  padding-left .2rem
  box-sizing border-box
  color #fff
.header-fixed
  z-index 2
  font-size .32rem
  height .86rem;
  line-height .86rem
  text-align center
  color #fff
  position fixed
  left 0
  right 0
  top 0
  background bgColor
  .header-fixed-back
    width .64rem
    text-align center
    color #fff
    position absolute
</style>
