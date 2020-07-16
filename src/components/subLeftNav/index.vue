<template>
  <div :class="style.wrap">
    <div :class="style.title">
      店铺
    </div>

    <div
      :class="style.wrapBar"
      v-for="(item, index) in list"
      :key="index"
    >
      <div :class="style.barTitle">
        {{item.title}}
      </div>

      <div
        :class="[style.item, index === first && i === last ? style.active : '']"
        v-for="(childItem, i) in item.list"
        :key="i"
        @click="handleClick(index, i)"
      >{{childItem.text}}</div>
    </div>

  </div>
</template>

<script>
import style from './index.module.css'
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      style,
      first: 0,
      last: 0,
      list: [
        {
          title: '店铺管理',
          list: [
            {
              text: '小程序装修',
              url: ''
            },
            {
              text: '小程序装修',
              url: ''
            },
          ]
        },
        {
          title: '店铺管理',
          list: [
            {
              text: '小程序装修',
              url: ''
            },
            {
              text: '小程序装修',
              url: ''
            },
          ]
        },
        {
          title: '店铺管理',
          list: [
            {
              text: '小程序装修',
              url: ''
            },
            {
              text: '小程序装修',
              url: ''
            },
          ]
        },
        {
          title: '店铺管理',
          list: [
            {
              text: '小程序装修',
              url: ''
            },
            {
              text: '小程序装修',
              url: ''
            },
          ]
        },
        {
          title: '店铺管理',
          list: [
            {
              text: '小程序装修',
              url: ''
            },
            {
              text: '小程序装修',
              url: ''
            },
          ]
        },
        {
          title: '店铺管理',
          list: [
            {
              text: '小程序装修',
              url: ''
            },
            {
              text: '小程序装修',
              url: ''
            },
          ]
        },
      ]
    }
  },

  methods: {
    handleClick (first, last) {
      this.first = first
      this.last = last
    }
  }
})
</script>