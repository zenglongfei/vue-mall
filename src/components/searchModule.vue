<template>
  <div class="mainBox">
    这是搜索页面{{$route.query.name}}
  </div>
</template>

<script>
export default {
  name: 'search-module',
  mounted () {
    console.log(this.$route)
  },
  beforeUpdate () {
    console.log(this.$route)
  },
  updated () {
    console.log('update')
  }
}
</script>

<style scoped>

</style>
