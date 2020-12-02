<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
    <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {
          id: '001',
          title: '成人票',
          children: [{
            id: '001',
            title: '成人票三级联票',
            children: [{
              id: '001',
              title: '成人票三级联票 -- 001'
            },
            {
              id: '002',
              title: '成人票五级联票 -- 002'
            }]
          },
          {
            id: '002',
            title: '成人票五级联票'
          }]
        },
        {
          id: '002',
          title: '老人票'
        },
        {
          id: '003',
          title: '儿童票'
        },
        {
          id: '004',
          title: '学生票'
        }
      ]
    }
  }
}
</script>
<style scoped lang="stylus">
.content
  height 50rem
</style>
