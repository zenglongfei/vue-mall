<template>
  <div class="mainBox">
    <search-item/>
    <swiper-item/>
    <div class="icpClass"><a target="_blank" href="http://www.miitbeian.gov.cn/">粤ICP备18019805号</a></div>
  </div>
</template>

<script>
import SwiperItem from './swiperItem.vue'
import SearchItem from './searchItem.vue'

export default {
  components: {
    SearchItem,
    SwiperItem
  },
  name: 'home-module'
}
</script>

<style scoped>
  .icpClass {
    font-size: 0.5rem;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
</style>
