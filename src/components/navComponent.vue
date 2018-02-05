<template>
  <nav>
    <ul>
      <router-link replace="replace" tag="li" v-for="(item, i) in navArr" :key="i" @click.native="showPage(i)" :to="{name: item.navClass}"><div class="shade"></div><div :class="{active: i === nowIndex}"><img :src="item.navPng"/><span>{{item.navName}}</span></div></router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav-component',
  data () {
    return {
      nowIndex: 0,
      navArr: [
        {navName: '首页', navClass: 'Home', navPng: require('../assets/img/icon-home.png')},
        {navName: '分类', navClass: 'Classify', navPng: require('../assets/img/icon-classify.png')},
        {navName: '购物车', navClass: 'Shopcar', navPng: require('../assets/img/icon-shopcar.png')},
        {navName: '我的', navClass: 'My', navPng: require('../assets/img/icon-my.png')}
      ],
      navName: ['Home', 'Classify', 'Shopcar', 'My']
    }
  },
  mounted () {
    this.nowIndex = this.navName.indexOf(this.$route.name)
  },
  methods: {
    showPage (i) {
      this.nowIndex = i
    }
  }
}
</script>

<style scoped>
  nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    -webkit-user-select: none;/*禁用手机浏览器的用户选择功能 */
    -moz-user-select: none;
    -webkit-touch-callout:none
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #dddee1;
  }
  li {
    display: inline-block;
    width: 24.8%;
    height: 100%;
    vertical-align: baseline;
    text-align: center;
    color: #80848f;
    border-right: 0.5px solid #dddee1;
    position: relative;
    outline: none;
  }
  li:last-child {
    border: none;
  }
  .shade {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    z-index: 1000;
  }
  div.active {
    -webkit-filter: drop-shadow(0 80px #ed622a); /* Chrome, Safari, Opera */
    filter: drop-shadow(0 80px #ed622a);
    position: relative;
    top: -80px;
  }
  img {
    display: inline-block;
    margin-top: 2px;
    width: 33%;
    height: 33%
  }
  span {
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.78rem;
    margin-top: -6px;
  }
</style>
