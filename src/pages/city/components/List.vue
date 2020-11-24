<template>
  <div class="list" ref="wrapper">
  <div>
      <div class="area">
        <h3 class="title border-topbottom">当前位置</h3>
        <ul class="list-items">
          <li class="item"><div class="border item-content">{{this.$store.state.city}}</div></li>
        </ul>
      </div>
      <div class="area">
        <h3 class="title border-topbottom">热门城市</h3>
        <ul class="list-items">
          <li class="item"  v-for="item of list" :key="item.id" @click="changeCity(item.name)">
            <div class="border item-content">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="area" v-for="(icity,key) of city" :key="key" :ref="key">
        <h3 class="title border-topbottom">{{key}}</h3>
        <ul class="list-box">
          <li class="box border-bottom" v-for="item of icity" :key="item.id" @click="changeCity(item.name)">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    list: Array,
    city: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    changeCity (city) {
      console.log(city)
      this.$store.dispatch('changeCites', city)
      this.$router.push('/')
    }
  },
  updated () {
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
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
    padding .1rem .56rem .1rem .1rem
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
