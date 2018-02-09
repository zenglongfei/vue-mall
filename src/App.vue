<template>
  <div id="app">
    <router-view/>
    <nav-component/>
  </div>
</template>

<script>
import NavComponent from './components/navComponent'

export default {
  components: {NavComponent},
  name: 'App'
}
</script>

<style>
  @import './assets/css/main.css';
</style>
