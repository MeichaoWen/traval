<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet'
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl'
.list
  position absolute
  right 0
  top 1.58rem
  bottom 0
  width .4rem
  display flex
  flex-direction column
  align-items center
  justify-content center
  .item
    line-height .4rem
    color bgColor
</style>
