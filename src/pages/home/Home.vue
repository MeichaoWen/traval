<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    getdata () {
      axios.get('/static/mock/index.json').then(response => {
        var homeinfo = response.data
        if (homeinfo.ret && homeinfo.data) {
          this.iconList = homeinfo.data.iconList
          this.swiperList = homeinfo.data.swiperList
          this.recommendList = homeinfo.data.recommendList
          this.weekendList = homeinfo.data.weekendList
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
