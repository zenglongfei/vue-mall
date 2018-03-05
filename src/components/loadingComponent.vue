<template>
  <div class='loader-spinningDisc'></div>
</template>

<script>
export default {
  name: 'loading-component'
}
</script>

<style scoped>
  .loader-spinningDisc {
    z-index: 1999;
    margin: 0 auto;
    position: fixed;
    top: 42%;
    left: 42%;
    border: solid 0.5rem #9b59b6;
    border-right-color: transparent;
    border-left-color: transparent;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #3498db;
    background-clip: content-box;
    animation: spinDisc 0.8s linear infinite;
  }
  @keyframes spinDisc {
    50% {
      border-top-color: #3498db;
      border-bottom-color: #3498db;
      background-color: #2ecc71;
    }
    100% {
      transform: rotate(1turn);
    }
  }
</style>
