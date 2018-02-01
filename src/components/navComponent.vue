<template>
  <nav>
    <ul>
      <li>首页</li>
      <li>分类</li>
      <li>购物车</li>
      <li>我的</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav-component'
}
</script>

<style scoped>
  /*nav {
    position: fixed;
    bottom: 0;
    left: 0;
  }*/
  ul {
    list-style: none;
    text-align: center;
    height: 2rem;
  }
  li {
    float: left;
    width: 25%;
    vertical-align: middle;
  }
</style>
