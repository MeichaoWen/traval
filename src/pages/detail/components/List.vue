<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <div class="list-title border-bottom">
        <span class="iconfont list-icon">&#xe68c;</span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style  scoped lang="stylus">
@import '~style/varibles.styl';
.list-title
  line-height .8rem
  padding 0 .2rem
  font-size .32rem
  .list-icon
    color bgColor
.item-children
  padding 0 .2rem
</style>
