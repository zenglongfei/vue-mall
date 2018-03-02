<template>
  <div class="searchBox">
    <i class="scan" @click="test">扫一扫</i>
    <router-link tag="div" class="search" :to="{name: 'Search', query: {num: 123}}">搜索商品/商铺</router-link>
    <i class="message" @click="messageShow">消息</i>
  </div>
</template>

<script>
export default {
  name: 'search-item',
  methods: {
    test () {
      this.$router.push('/Home/Search')
    },
    messageShow () {
      this.$Modal({
        type: 1, // 标题；可选，默认1有标题；0无标题
        cancel: null, // 点击取消回调函数；可选，默认无
        sure: null, // 点击确定回调函数；可选，默认无
        btn: ['取消', '确定'], // 按钮；可选，默认'取消','确定'两个按钮
        btnShow: true, // 取消按钮是否隐藏；可选，默认显示；配合按钮使用
        title: '系统提示2222', // 标题；可选，默认显示
        content: '<p>这是一个modal对话框1111</p>' // 提示内容；可选，html模板
      })
    }
  }
}
</script>

<style scoped>
  .searchBox {
    width: 100%;
    background: #2d8cf0;
    text-align: center;
    padding-bottom: 0.8rem;
  }
  i {
    display: inline-block;
    font-style: normal;
    font-size: 0.5rem;
    height: 2rem;
    position: relative;
    top: 0.7rem;
    line-height: 4rem;
    padding: 0 0.5rem 0.4rem;
    color: #fff;
  }
  i.scan {
    background: url("../assets/img/icon-scan.png") 50% 10% no-repeat;
    background-size: 60%;
  }
  i.message {
    background: url("../assets/img/icon-message.png") 50% 10% no-repeat;
    background-size: 80%;
  }
  .search {
    border: 1px solid #dddee1;
    width: 66%;
    text-align: center;
    color: #bbbec4;
    background: url('../assets/img/icon-search.png') 20% 44% no-repeat #fff;
    background-size: 14%;
    font-size: 0.9rem;
    padding: 3px;
    display: inline-block;
    border-radius: 1rem;
  }
</style>
