<template>
  <div>
    <h3 class="title">热销推荐</h3>
    <ul class="items">
      <li class="item" v-for="item of itemList" :key="item.id">
        <img :src="item.srcUrl"/>
        <div class="item-dec">
          <p>{{item.itemTitle}}</p>
          <p>{{item.itemInfo}}</p>
          <button>了解更多</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      itemList: [
        {
          id: '001',
          srcUrl: require('@/assets/images/re01.jpg'),
          itemTitle: '北京-泰国豪华5日游',
          itemInfo:
            '错峰出行，火爆预售🔥直飞曼芭沙7日♥一天自由活动♥五钻酒店♥快艇出海沙美岛'
        },
        {
          id: '002',
          srcUrl: require('@/assets/images/re02.jpg'),
          itemTitle: '北京-日本自助游',
          itemInfo:
            '日本丨本州特色7日游 心斋桥 迪士尼乐园 大阪环球影城 升级一晚温泉体验'
        },
        {
          id: '003',
          srcUrl: require('@/assets/images/re03.jpg'),
          itemTitle: '颐和园',
          itemInfo: '北方也有江南园林'
        },
        {
          id: '004',
          srcUrl: require('@/assets/images/re01.jpg'),
          itemTitle: '北京-泰国豪华5日游',
          itemInfo:
            '错峰出行，火爆预售🔥直飞曼芭沙7日♥一天自由活动♥五钻酒店♥快艇出海沙美岛'
        },
        {
          id: '005',
          srcUrl: require('@/assets/images/re02.jpg'),
          itemTitle: '北京-日本自助游',
          itemInfo:
            '日本丨本州特色7日游 心斋桥 迪士尼乐园 大阪环球影城 升级一晚温泉体验'
        },
        {
          id: '006',
          srcUrl: require('@/assets/images/re03.jpg'),
          itemTitle: '颐和园',
          itemInfo: '北方也有江南园林'
        }
      ]
    }
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
      margin-left 3.8rem
      font-size .14rem
</style>
