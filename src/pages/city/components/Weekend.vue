<template>
  <div>
    <h3 class="title">周末去哪儿</h3>
    <ul class="items">
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-img"><img :src="item.imgUrl"/></div>
        <div class="item-dec">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>
<style  scoped lang="stylus">
@import '~style//mintext.styl'
@import '~style//varibles.styl'
.title {
  line-height: 0.75rem;
  background-color: #eeeeee;
  text-indent: 0.15rem;
  margin-bottom .12rem
}
.item
  .item-img
  height 0
  overflow hidden
  padding-bottom 37.09%
  img
    width 100%
  .item-dec
    min-width 0
    padding 0 .15rem .15rem .15rem
    p:nth-of-type(1)
      line-height 2
      ellipsis()
    p:nth-of-type(2)
      line-height 1
      color #999
      font-size .2rem
      ellipsis()
</style>
