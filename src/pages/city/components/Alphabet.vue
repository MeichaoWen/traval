<template>
  <ul class="list">
    <li class="item"
      v-for="item of letter"
      :key="item"
      @click="scrollTo"
      @touchstart.prevent="handleTouchstart"
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
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
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
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 16)
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
