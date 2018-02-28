<template>
  <div class="modal-box" v-if="show" @touchmove.prevent>
    <div class="modal-bg"></div>
    <div class="modal-main">
      <div class="modal-header" v-if="type">
        <div class="modal-header-inner">{{title}}</div>
      </div>
      <div class="modal-body" v-html="content">
      </div>
      <div class="modal-footer">
        <button type="button" class="modal-btn modal-btn-text" @click="cancelModal" v-if="btnShow"><span>{{btn[0]}}</span></button>
        <button type="button" class="modal-btn modal-btn-primary" @click="sureModal"><span>{{btn[1] || btn[0]}}</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-plugin',
  data () {
    return {
      show: true,
      cancel: null,
      sure: null,
      type: 1,
      btn: ['取消', '确定'],
      btnShow: true,
      title: '系统提示',
      content: '<p>这是一个modal对话框</p>'
    }
  },
  methods: {
    cancelModal () {
      this.show = false
      this.cancel && this.cancel()
    },
    sureModal () {
      this.show = false
      this.sure && this.sure()
    }
  }
}
</script>

<style scoped>
  body {
    height: 100%;
  }
  .modal-bg {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55,55,55,.4);
    height: 100%;
    z-index: 2000;
  }
  .modal-main {
    width: 80%;
    background-color: #fff;
    border: 0;
    border-radius: 0.3rem;
    background-clip: padding-box;
    position: fixed;
    top: 33%;
    left: 10%;
    z-index: 2001;
    outline: 0;
  }
  .modal-header {
    border-bottom: 1px solid #e9eaec;
    padding: 0.78rem 0.89rem;
    line-height: 1;
  }
  .modal-header-inner {
    display: inline-block;
    width: 100%;
    height: 1.11rem;
    line-height: 1.11rem;
    font-size: 0.78rem;
    color: #1c2438;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }
  .modal-body {
    text-align: left;
    padding: 1rem;
    font-size: 0.78rem;
    color: #495060;
    line-height: 1.5;
    overflow: auto;
    scrollbar-base-color:#ff6600;
    -webkit-overflow-scrolling: touch;
    word-break:break-all;
  }
  .modal-footer {
    border-top: 1px solid #e9eaec;
    padding: 0.33rem 1rem;
    text-align: right;
  }
  .modal-btn {
    outline: 0;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #dddee1;
    white-space: nowrap;
    line-height: 1.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #495060;
    background-color: #f7f7f7;
    padding: 0.33rem 0.83rem 0.39rem;
    font-size: 0.78rem;
    border-radius: 0.22rem;
  }
  .modal-btn-text {
    color: #495060;
    background-color: transparent;
    border-color: transparent;
  }
  .modal-btn-primary {
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
  }
</style>
