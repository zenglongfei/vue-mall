<template>
  <div class="message-box" :class="InOrOut" v-if="isRemove">
    <div class="message-main">
      <i class="ivu-icon" :class="type"></i>
      <span class="message-content">{{content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message-plugin',
  data () {
    return {
      type: '',
      InOrOut: 'message-in',
      isRemove: true,
      content: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.InOrOut = 'message-out'
    }, 2000)
  },
  watch: {
    InOrOut () {
      setTimeout(() => {
        this.isRemove = false
      }, 300)
    }
  }
}
</script>

<style scoped>
  .message-box {
    position: fixed;
    z-index: 999;
    width: 100%;
    pointer-events: none;
    text-align: center;
  }
  .message-main {
    display: inline-block;
    pointer-events: all;
    padding: 0.33rem 1rem;
    border-radius: 0.22rem;
    box-shadow: 0 0.05rem 0.3rem rgba(0, 0, 0, .2);
    background: #fff;
  }
  .message-content {
    color: #495060;
    font-weight: normal;
    font-size: 0.8rem;
    position: relative;
    top: -1.5px;
  }
  .message-in {
    animation: msgFadeIn .3s ease-in-out;
    animation-play-state: running;
    top: 2rem;
    opacity: 1;
  }
  .message-out {
    animation: msgFadeOut .3s ease-in-out;
    animation-play-state: running;
    opacity: 0;
  }

  @keyframes msgFadeIn {
    0% {
      opacity: 0;
      top: 0;
    }
    100% {
      opacity: 1;
      top: 2rem;
    }
  }

  @keyframes msgFadeOut {
    0% {
      opacity: 1;
      top: 2rem;
    }
    100% {
      opacity: 0;
      top: 0
    }
  }
</style>
