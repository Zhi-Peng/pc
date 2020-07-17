<template>
  <div :class="style.wrap">product</div>
</template>

<script>
import Vue from 'vue'
import style from './index.module.css'

export default Vue.extend({
  data () {
    return {
      style,
    }
  }
  
})
</script>