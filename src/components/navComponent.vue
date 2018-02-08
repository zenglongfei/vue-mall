<template>
  <nav>
    <ul>
      <router-link replace="replace" tag="li" v-for="(item, i) in navArr" :key="i" @click.native="showPage(i)" :to="{name: item.navClass}"><div :class="{active: i === nowIndex}"><span :class="item.navClass">{{item.navName}}</span></div></router-link>
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
        {navName: '首页', navClass: 'Home'},
        {navName: '分类', navClass: 'Classify'},
        {navName: '购物车', navClass: 'Shopcar'},
        {navName: '我的', navClass: 'My'}
      ],
      navName: ['Home', 'Classify', 'Shopcar', 'My']
    }
  },
  mounted () {
    this.nowIndex = this.navName.indexOf(this.$route.path.split('/')[1])
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
    height: 9.5%;
    z-index: 999;
  }
  ul {
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #dddee1;
  }
  li {
    display: inline-block;
    width: 24.8%;
    height: 100%;
    text-align: center;
    color: #80848f;
    border-right: 0.5px solid #dddee1;
    outline: none;
  }
  li:last-child {
    border: none;
  }
  div.active {
    -webkit-filter: drop-shadow(0 80px #2d8cf0); /* Chrome, Safari, Opera */
    filter: drop-shadow(0 80px #2d8cf0);
    position: relative;
    top: -80px;
  }
  div {
    height: 100%;
  }
  span {
    display: block;
    height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.78rem;
    line-height: 5.2rem;
  }
  .Home {
    background: url("../assets/img/icon-home.png") 50% 10% no-repeat;
    background-size: 40%;
  }
  .Classify {
    background: url("../assets/img/icon-classify.png") 50% 10% no-repeat;
    background-size: 40%;
  }
  .Shopcar {
    background: url("../assets/img/icon-shopcar.png") 50% 10% no-repeat;
    background-size: 40%;
  }
  .My {
    background: url("../assets/img/icon-my.png") 50% 10% no-repeat;
    background-size: 40%;
  }
</style>
