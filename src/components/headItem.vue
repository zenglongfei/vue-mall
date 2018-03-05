<template>
  <div class="headBox">
    <i class="scan" @click="richScan">扫一扫</i>
    <router-link tag="div" class="search" :to="{name: 'Search'}">搜索商品/商铺</router-link>
    <i class="message" @click="messageShow">消息</i>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  name: 'head-item',
  mounted () {
    if (!localStorage.access_token) {
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx6fde246de884d0e9', // 必填，公众号的唯一标识
        timestamp: +new Date(), // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '', // 必填，签名
        jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
      })
      this.$http(this, {
        url: '/cgi-bin/token',
        params: {
          grant_type: 'client_credential',
          appid: 'wx6fde246de884d0e9',
          secret: '28028afd74a533cd1f800edb9b2932f4'
        }
      }, (oData) => {
        localStorage.access_token = oData.access_token
        console.log(localStorage.access_token)
        this.$http(this, {
          url: '/cgi-bin/ticket/getticket',
          params: {
            access_token: localStorage.access_token,
            type: 'jsapi'
          }
        }, (oData) => {
          localStorage.jsapi_ticket = oData.ticket
          console.log(localStorage.jsapi_ticket)
        })
      })
    }
  },
  methods: {
    richScan () {
      this.$router.push({name: 'Search', query: {name: '扫一扫'}})
    },
    messageShow () {
      this.$http(this, {}, (oData) => {
        this.$Modal({
          content: JSON.stringify(oData)
        })
      })
    }
  }
}
</script>

<style scoped>
  .headBox {
    width: 100%;
    background: #2d8cf0;
    text-align: center;
    margin-top: -0.5rem;
    padding-bottom: 0.5rem;
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
    margin-right: 0.2rem;
  }
  i.message {
    background: url("../assets/img/icon-message.png") 50% 10% no-repeat;
    background-size: 80%;
    margin-left: 0.4rem;
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
