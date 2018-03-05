<template>
  <div class="iconBox">
    <span class="hotPro">热销</span>
    <span class="newPro">新品</span>
    <span class="discountPro">折扣</span>
    <span class="myPro">收藏</span>
    <span class="myOrder">我的订单</span>
  </div>
</template>

<script>
export default {
  name: 'body-icon-item'
}
</script>

<style scoped>
  .iconBox {
    color: #80848f;
    width: 100%;
    height: 13%;
  }
  span {
    float: left;
    width: 20%;
    height: 100%;
    font-size: 0.78rem;
    text-align: center;
    line-height: 7rem;
  }
  .hotPro {
    background: url("../assets/img/icon-body.png") -3.5% 10% / 500% no-repeat;
  }
  .newPro {
    background: url("../assets/img/icon-body.png") 23% 10% / 500% no-repeat;
  }
  .discountPro {
    background: url("../assets/img/icon-body.png") 50% 10% / 500% no-repeat;
  }
  .myPro {
    background: url("../assets/img/icon-body.png") 76.5% 10% / 500% no-repeat;
  }
  .myOrder {
    background: url("../assets/img/icon-body.png") 104% 10% / 500% no-repeat;
  }
</style>
