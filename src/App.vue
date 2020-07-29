<template>
  <div id="app">
    <top-nav />

    <div class="content row-">
      <left-nav />
        <div class="right row-">
          <div class="ff">
            <router-view></router-view>
          </div>
          <right-bar />
        </div>
    </div>
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
<style>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  height: 90%;
  flex: 1 1 auto;
  color: var(--c3);
}
.right {
  flex: 1 1 auto;
  overflow: scroll;
  margin-top: 20px;
}
.ff {
  flex: 1 1 auto;
  margin: 0 20px;
}
</style>

