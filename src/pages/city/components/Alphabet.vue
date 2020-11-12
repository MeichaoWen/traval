<template>
  <ul class="list">
    <li class="item"
      v-for="item of letter"
      :key="item"
      @click="scrollTo"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
      :ref="item"
    >
      {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    city: Object
  },
  data () {
    return {
      touchStatus: false
    }
  },
  computed: {
    letter () {
      const letter = []
      for (var i in this.city) {
        letter.push(i)
      }
      return letter
    }
  },
  methods: {
    scrollTo (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchstart () {
      this.touchStatus = true
    },
    handleTouchmove (e) {
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letter.length) {
          this.$emit('change', this.letter[index])
        }
      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl'
.list
  position absolute
  right 0
  top 1.58rem
  bottom 0
  width .4rem
  display flex
  flex-direction column
  align-items center
  justify-content center
  .item
    line-height .4rem
    color bgColor
</style>
