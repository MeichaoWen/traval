<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :list="hotCity" :city="cities" :letter="letter"></city-list>
    <city-alphabet :city="cities" @change="handleScroll"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCity: [],
      cities: {},
      navList: '',
      letter: ''
    }
  },
  methods: {
    getData () {
      axios.get('/static/mock/city.json').then(response => {
        console.log(response.data)
        const data = response.data
        if (data.ret && data.data) {
          this.hotCity = data.data.hotCities
          this.cities = data.data.cities
        }
      })
    },
    handleScroll (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style scoped>
</style>
