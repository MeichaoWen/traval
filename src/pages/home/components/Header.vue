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
      {{area}}
      <span class="iconfont icon-more">&#xe62d;</span>
    </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    area: String
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
    .header-right
      width 1.24rem
      color #fff
      text-align center
      .icon-more
        font-size 13px
</style>
