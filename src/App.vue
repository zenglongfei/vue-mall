<template>
  <div id="app">
    <loading-component v-show='isLoading' />
    <router-view/>
    <nav-component/>
  </div>
</template>

<script>
import NavComponent from './components/navComponent'
import LoadingComponent from './components/loadingComponent'
import { mapState } from 'vuex'

export default {
  components: {
    LoadingComponent,
    NavComponent},
  name: 'App',
  computed: {
    ...mapState({
      isLoading: state => state.isLoading
    })
  }
}
</script>

<style>
  @import './assets/css/main.css';
</style>
