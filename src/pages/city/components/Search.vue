<template>
<div>
  <div class="search">
    <input type="text" v-model="keyword" placeholder="请输入城市名或拼音" class="search-input">
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="noData">未找到匹配数据</li>
    </ul>
  </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    city: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    noData () {
      return !this.list.length
    }
  },
  updated () {
    this.scroll = new BScroll(this.$refs.search, {})
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        var result = []
        for (var i in this.city) {
          this.city[i].forEach(value => {
            console.log(value)
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
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
.search-content
  position absolute
  overflow hidden
  left 0
  top 1.58rem
  bottom 0
  right 0
  background #cccccc
  z-index 1
  .search-item
    line-height .64rem
    color #666
    background #ffffff
    padding-left .2rem
</style>
