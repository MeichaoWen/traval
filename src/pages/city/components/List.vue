<template>
  <div class="list" ref="wrapper">
  <div>
      <div class="area">
        <h3 class="title border-topbottom">当前位置</h3>
        <ul class="list-items">
          <li class="item"><div class="border item-content">北京</div></li>
        </ul>
      </div>
      <div class="area">
        <h3 class="title border-topbottom">热门城市</h3>
        <ul class="list-items">
          <li class="item"><div class="border item-content">北京</div></li>
          <li class="item"><div class="border item-content">北京</div></li>
          <li class="item"><div class="border item-content">北京</div></li>
          <li class="item"><div class="border item-content">北京</div></li>
          <li class="item"><div class="border item-content">北京</div></li>
          <li class="item"><div class="border item-content">北京</div></li>
        </ul>
      </div>
      <div class="area">
        <h3 class="title border-topbottom">A</h3>
        <ul class="list-box">
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
        </ul>
      </div>
      <div class="area">
        <h3 class="title border-topbottom">B</h3>
        <ul class="list-box">
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
          <li class="box border-bottom">阿拉善盟</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {})
  }
}
</script>
<style  scoped lang="stylus">
.border-topbottom
  &:before
    border-color #ddd
  &:after
    border-color #ddd
.border
  &:before
    border-color #ccc
    border-radius .1rem
.list
  position absolute
  left 0
  top 1.58rem
  right 0
  bottom 0
  overflow hidden
  .title
    padding-left .16rem
    line-height .56rem
    background #eee
    font-size .25rem
  .list-items
    display flex
    flex-wrap wrap
    padding .1rem .64rem .1rem .1rem
    .item
      width 33.33%
      .item-content
        margin .1rem
        line-height .52rem
        text-align center
        font-size .26rem
  .list-box
    .box
      line-height .64rem
      padding-left .16rem
</style>
