<template>
  <div id="app">
    <top-nav />
    <left-nav />
    <right-bar />

    <router-view></router-view>
  </div>
</template>

<script>
import './style/base.css'
import './style/comon.css'
import TopNav from './components/topNav'
import LeftNav from './components/leftNav/index.vue'
import RightBar from './components/rightBar'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted () {
  },

  components: {
    TopNav,
    LeftNav,
    RightBar
  }
}
</script>
