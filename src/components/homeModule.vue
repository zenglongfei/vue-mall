<template>
  <div class="mainBox">
    <head-item/>
    <swiper-item/>
    <body-icon-item/>
    <div class="icpClass"><a target="_blank" href="http://www.miitbeian.gov.cn/">粤ICP备18019805号</a></div>
  </div>
</template>

<script>
import HeadItem from './headItem.vue'
import SwiperItem from './swiperItem.vue'
import BodyIconItem from './bodyIconItem'

export default {
  components: {
    BodyIconItem,
    SwiperItem,
    HeadItem
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
