<template>
  <div id="app">
    <top-nav />
    <left-nav />
    <sub-nav />
    <right-bar />

    <router-view></router-view>
  </div>
</template>

<script>
import './style/base.css'
import './style/comon.css'
import TopNav from './components/topNav'
import LeftNav from './components/leftNav'
import SubNav from './components/subLeftNav'
import RightBar from './components/rightBar'

export default {
  name: 'App',
  data () {
    return {
    }
  },

  components: {
    TopNav,
    LeftNav,
    SubNav,
    RightBar
  }
}
</script>

<style>
  .vv {
    display: none;
  }

</style>
