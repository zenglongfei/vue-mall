<template>
  <Swiper v-if="swiperArr.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
    <Slide v-for="(tag, key) in swiperArr" :key="key">
      <a>
        <img :src="tag" />
      </a>
    </Slide>
  </Swiper>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component'
export default {
  name: 'swiper-item',
  components: {Swiper, Slide},
  data () {
    return {
      swiperArr: [
        '../../static/img/swiperImg1.jpg',
        '../../static/img/swiperImg2.jpg',
        '../../static/img/swiperImg3.jpg',
        '../../static/img/swiperImg4.jpg'
      ]
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
</style>
