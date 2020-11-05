<template>
  <div>
    <h3 class="title">周末去哪儿</h3>
    <ul class="items">
      <li class="item" v-for="item of itemList" :key="item.id">
        <img :src="item.srcUrl"/>
        <div class="item-dec">
          <p>{{item.itemTitle}}</p>
          <p>{{item.itemInfo}}</p>
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
          srcUrl: require('@/assets/images/week01.jpg'),
          itemTitle: '北京-泰国豪华5日游',
          itemInfo:
            '错峰出行，火爆预售🔥直飞曼芭沙7日♥一天自由活动♥五钻酒店♥快艇出海沙美岛'
        },
        {
          id: '002',
          srcUrl: require('@/assets/images/week02.jpg'),
          itemTitle: '北京-日本自助游',
          itemInfo:
            '日本丨本州特色7日游 心斋桥 迪士尼乐园 大阪环球影城 升级一晚温泉体验'
        },
        {
          id: '003',
          srcUrl: require('@/assets/images/week03.jpg'),
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
  img
    width 100%
    height 2.5rem
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
