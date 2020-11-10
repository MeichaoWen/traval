<template>
  <div class="header">
    <router-link to="/">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default {
  name: 'cityHeader',
  props: {
    area: String
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl'
.header
    font-size .32rem
    height .86rem;
    line-height .86rem
    text-align center
    color #fff
    position relative
    background bgColor
    .header-left
      width .64rem
      text-align center
      color #fff
      position absolute
</style>
