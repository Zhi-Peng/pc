<template>
  <div :class="style.wrap">
    <a
      :class="[style.item, i === selectIndex ? style.active : '' ]"
      class="row-center"
      v-for="(item, i) in list"
      :key="i"
      @click.stop="handleClick(i)"
      >
      <div :class="style.icon"></div>
      
      <div :class="style.text">fsaf</div>
    </a>


  </div>
</template>

<script>
import Vue from 'vue'
import style from './index.module.css'

export default Vue.extend({
  data () {
    return {
      style,
      list: Array(11),
      selectIndex: 0
    }
  },
  methods: {
    handleClick (index) {
      this.selectIndex = index
    }
  }
})
</script>