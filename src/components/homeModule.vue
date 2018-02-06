<template>
  <div class="mainBox">
    <search-item/>
    <swiper-item/>
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

</style>
