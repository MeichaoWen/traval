<template>
  <div class="search">
    <input type="text" placeholder="请输入城市名或拼音" class="search-input">
  </div>
</template>
<script>
export default {
  name: 'CitySearch',
  data () {
    return {
    }
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl';
.search
  height .72rem
  background bgColor
  padding 0 .16rem
  .search-input
    width 100%
    box-sizing border-box
    padding 0 .15rem
    border-radius .06rem
    height .64rem
    text-align center
    color #666
</style>
