<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city">
    <div class="header-right">
      {{this.done}}
      <span class="iconfont icon-more">&#xe62d;</span>
    </div>
    </router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['done'])
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl'
.header
    font-size .27rem
    height .86rem;
    display flex
    justify-content space-between
    align-items center
    background bgColor
    .header-left
      width .64rem
      text-align center
      color #fff
    .header-input
      display flex
      align-items center
      height .6rem
      flex 1
      background #ffffff
      border-radius .3rem
      padding-left .3rem
      input
        padding-left .1rem
        width 85%
    .header-right
      min-width 1.24rem
      padding 0 .12rem
      color #fff
      text-align center
      .icon-more
        font-size 13px
</style>
