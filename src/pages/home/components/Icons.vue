<template>
  <div class="icons">
    <swiper>
    <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="imagebox">
        <img :src="item.imgUrl" class="obj-img">
      </div>
      <div class="textbox">{{item.imgTitle}}</div>
    </div>
    </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      imgList: [
        {
          id: '001',
          imgUrl: require('@/assets/images/hotel.png'),
          imgTitle: '酒店'
        },
        {
          id: '002',
          imgUrl: require('@/assets/images/flight.png'),
          imgTitle: '热门景点'
        },
        {
          id: '003',
          imgUrl: require('@/assets/images/train.png'),
          imgTitle: '火车票'
        },
        {
          id: '004',
          imgUrl: require('@/assets/images/package.png'),
          imgTitle: '海外度假'
        },
        {
          id: '005',
          imgUrl: require('@/assets/images/piao.png'),
          imgTitle: '特价门票'
        },
        {
          id: '006',
          imgUrl: require('@/assets/images/img4.png'),
          imgTitle: '海外酒店'
        },
        {
          id: '007',
          imgUrl: require('@/assets/images/img5.png'),
          imgTitle: '低价机票'
        },
        {
          id: '008',
          imgUrl: require('@/assets/images/img6.png'),
          imgTitle: '汽车票船票'
        },
        {
          id: '009',
          imgUrl: require('@/assets/images/img7.png'),
          imgTitle: '民宿客栈'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.imgList.forEach((item, index) => {
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
  display flex
  flex-wrap wrap
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
