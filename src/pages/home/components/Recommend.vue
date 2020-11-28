<template>
  <div>
    <h3 class="title">热销推荐</h3>
    <ul class="items">
      <router-link tag="li" class="item" v-for="item of list" :key="item.id" :to="'/detail/' + item.id" >
        <img :src="item.imgUrl"/>
        <div class="item-dec">
          <p>{{item.title}}</p>
          <p>{{item.desc}}</p>
          <button>了解更多</button>
        </div>
      </router-link>
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
  margin-top: 0.12rem;
}
.item
  display flex
  height 1.9rem
  img
    width 2rem
    height auto
    padding .12rem
  .item-dec
    flex 1
    min-width 0
    p:nth-of-type(1)
      line-height .7rem
      ellipsis()
    p:nth-of-type(2)
      line-height 1
      color #999
      font-size .2rem
      ellipsis()
    button
      background-color bgColor
      color #ffffff
      border-radius .1rem
      padding .08rem .135rem
      margin-top .22rem
      margin-left 3.6rem
      font-size .14rem
</style>
