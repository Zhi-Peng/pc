<template>
  <div :class="style.wrap">
    <div :class="style.nav">
      <a
        :class="[style.bar, i === selectIndex ? style.active : '' ]"
        class="row-center"
        v-for="(item, i) in navList"
        :key="i"
        @click.stop="handleClickNav(i)"
        >
        <div :class="[style.icon, item.iconClass]"></div>
        
        <div :class="style.text">{{item.title}}</div>
      </a>
    </div>

     <div :class="style.subNav" v-if="childList && childList.length">
      <div :class="style.title">
        店铺
      </div>

      <div
        :class="style.wrapBar"
        v-for="(item, index) in childList"
        :key="index"
      >
        <div :class="style.barTitle">
          {{item.title}}
        </div>

        <div
          :class="[style.item, index === first && i === last ? style.active : '']"
          v-for="(childItem, i) in item.list"
          :key="i"
          @click="handleClick1(index, i)"
        >{{childItem.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import index from './index.js'

export default Vue.extend(index)
</script>