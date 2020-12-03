<template>
  <div>
    <detail-banner :sightName="sightName" :gallaryImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
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
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      gallaryImgs: [],
      bannerImg: '',
      sightName: ''
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      axios.get('/static/mock/detail.json?id=' + this.$route.params.id).then(response => {
        console.log(response)
        let data = response.data
        if (data.ret && data.data) {
          this.list = data.data.categoryList
          this.bannerImg = data.data.bannerImg
          this.gallaryImgs = data.data.gallaryImgs
          this.sightName = data.data.sightName
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.content {
  height: 50rem;
}
</style>
