<template>
  <div :class="style.wrap">
    <div :class="style.top">
      <div :class="style.titleBox" class="row-center">
        <div :class="style.topTitle">云贝-餐饮多端</div>
        <div :class="style.topIcon"></div> 
      </div>

      <p :class="style.phone">专属服务热线：4008-118-115</p>

      <div :class="style.dateWrap">
        <div :class="style.date" class="row-between-center">
          <div :class="style.useDate">已使用314天</div>
          <div :class="style.remainingDays">剩51天</div>
        </div>

        <div :class="style.progress">
          <el-progress :percentage="50" :show-text="false"></el-progress>
        </div>

        <div :class="style.button">
          立即续约
        </div>
      </div>
    </div>

    <div :class="style.bottom">
      <div :class="style.bottomImg"></div>

      <div :class="style.barWrap">
        <div :class="style.follow" class="row-center">
          <div :class="style.QRcode"></div>

          <div :class="style.followRight">
            <p :class="style.followTitle">关注云贝公众号</p>
            <p :class="style.followText">掌握一手产品动态</p>
          </div>
        </div>


        <div
          :class="style.server"
          class="row-center"
          v-for="item in server"
          :key="item.title"
        >
          <div :class="style.serverIcon"></div>

          <div :class="style.serverRight">
            <p :class="style.serverTitle">{{item.title}}</p>
            <p :class="style.serverText">{{item.text}}</p>
          </div>
        </div>


        <div
          :class="style.news"
          v-for="(bar, index) in news"
          :key="index"
        >
          <div :class="style.newsTitle">{{bar.title}}</div>
          
          <div :class="style.content">
            <a
              :class="style.newsText"
              class="ellips-1"
              v-for="(item, i) in bar.list"
              :key="i"
            >{{item}}</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import style from './index.module.css'

export default Vue.extend({
  data () {
    return {
      style,

      server: [
        {title: '在线客服', text: '电话：0571-8998 8848'},
        {title: '桌面在线客服', text: '及时应答，在线咨询'},
        {title: '移动客户端', text: '使用手机/pad管理店铺'},
      ],

      news: [
        {
          title: '产品动态',
          list: [
            '三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手P，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的小鹅通助手APP，来了！全.三合一的通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的小鹅通助手APP，来了！全.三合的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的小鹅通助手APP，来了！全.三合的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的小鹅通助手APP，来了！全.三合P，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
          ]
        },
        {
          title: '企业资讯',
          list: [
            '三合一的小鹅通助手来了！全.三合一的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
            '三一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！三合一的小鹅通助手APP，来了！全.三合一的小鹅通助手APP，来了！',
          ]
        },
      ]
    }
  },

  methods: {

  }
})
</script>