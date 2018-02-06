<template>
  <div class="searchBox">
    <span class="scan">图一</span>
    <div class="search">搜索商品/商铺</div>
    <span class="message">图二</span>
  </div>
</template>

<script>
export default {
  name: 'search-item'
}
</script>

<style scoped>
  .searchBox {
    width: 100%;
    background: #ed622a;
    padding: 1.2rem 0 0.6rem;
    text-align: center;
  }
  span {
    font-size: 0.5rem;
    display: inline-block;
  }
  span.scan {
    background: url("../assets/img/icon-scan.png");
  }
  span.message {
    background: url("../assets/img/icon-message.png");
  }
  .search {
    border: 1px solid #dddee1;
    width: 70%;
    text-align: center;
    color: #bbbec4;
    background: url('../assets/img/icon-search.png') 23% 44% no-repeat #fff;
    background-size: 14%;
    font-size: 0.9rem;
    padding: 3px;
    display: inline-block;
  }
</style>
