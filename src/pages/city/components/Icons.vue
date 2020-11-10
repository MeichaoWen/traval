<template>
  <div class="icons">
    <swiper>
    <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="imagebox">
        <img :src="item.imgUrl" class="obj-img">
      </div>
      <div class="textbox">{{item.desc}}</div>
    </div>
    </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl'
@import '~style/mintext.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
  margin-top .12rem
.icon
  float left
  flex-shrink 0
  position relative
  height 0
  width 25%
  padding-bottom 25%
  .imagebox
    position absolute
    top 0
    left 0
    right 0
    bottom .44rem
    text-align center
    box-sizing border-box
    padding .125rem
    .obj-img
      height 100%
  .textbox
    position absolute
    left 0
    right 0
    bottom 0
    text-align center
    line-height .44rem
    font-size .26rem
    ellipsis()
</style>
