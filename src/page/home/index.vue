<template>
  <div :class="style.wrap">
    <div :class="style.wrap1" class="row-center">
      <div :class="style.wrap1Left">
        <div :class="style.wrap1Title"> 下午好！ </div>
        <div :class="style.wrap1Text"> 欢迎登入后台管理系统 </div>
      </div>

      <div :class="style.line"></div>

      <div :class="style.wrap1Right">
        <div :class="style.wrap1Title">待办事项：</div>

        <div class="row-center">
          <div
            :class="style.dealt"
            class="row-center"
            v-for="(item, i) in dealtList"
            :key="i"
          >
            <div :class="style.dealtItem" class="row-center">
              <div :class="style.dealtItemIcon"></div>
              <div :class="style.dealtItemText">待发货订单</div>
            </div>

            <span :class="style.dealtNum">0</span>
          </div> 
        </div>
      </div>
    </div>


    <div :class="style.wrap2" class="row-center">
      <div
        :class="style.wrap2Bar"
        class="row-center"
        v-for="(item, i) in wrap2"
        :key="i"
      >
        <div :class="style.wrap2Left" class="row-center">
          <div :class="style.wrap2Icon"></div>

          <div :class="style.wrap2Nub">
            <div :class="style.wrap2Title" class="row-center">
              <div>133</div>
              <div :class="style.wrap2Arrow"></div>
            </div>
            <div :class="style.wrap2Text">支付订单数</div>
          </div>
        </div>

        <div :class="style.wrap2Line"></div>

        <div :class="style.wrap2Rigth">
          <div :class="style.today">今日： <span>0</span> </div>
          <div :class="style.yesterday">今日： <span>0</span> </div>
        </div>
      </div>
    </div>


    <div :class="style.wrap3">
      <div :class="style.wrap3Top" class="row-center">
        <div :class="style.wrap3Title">实时概况</div>

        <div :class="style.wrap3TopBox" class="row-center">
          <div :class="style.wrap3TopText">更新时间：2020-07-03 17:10:1</div>
          <div :class="style.wrap3TopIcon"></div>
        </div>
      </div>

      <div :class="style.wrap3Bottom">
        <div :class="wrap3Item">
          <div>
            <div></div>
            <div></div>
          </div>

          <div>2365</div>
          
          <div>
            <div></div>
            <div class="icon"> </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import style from './index.module.css'

export default {
  name: 'App',
  data () {
    return {
      style,
      dealtList: [
        1,2,3,4
      ],
      wrap2: Array(3)
    }
  },

  components: {
  }
}
</script>
