<template>
  <div :class="style.wrap">
    <section :class="style.wrap1" class="row-center">
      <div :class="style.wrap1Left">
        <div :class="style.wrap1Title">下在在好</div>
        <div>欢迎在在大大在在在大在</div>
      </div>

      <div :class="style.wrap1Line"></div>

      <div :class="style.wrap1Right">
        <div :class="style.wrap1Title">在在地在工：</div>

        <div class="row-between">
          <div :class="style.wrap1Item" class="row-center" v-for="(item, i) in dealtList" :key="i">
            <i class="iconfont icondealtIcon0" :class="style.icondealtIcon0"></i>
            <span>待付款订单</span>
            <span :class="style.wrap1Num">0</span>
          </div>
        </div>
      </div>
    </section>

    <section :class="style.wrap2" class="row-">
      <div :class="style.wrap2Item" class="row-between-center" v-for="(item, i) in Array(3)" :key="i">
        <div :class="style.wrap2Left" class="row-center">
          <i :class="style.wrap2Icon"></i>
          <div :class="style.wrap2Customer">
            <div :class="style.wrap2CustomerNum">
              <span>0</span>
              <i class="iconfont iconwrap2Arrow ml-20"></i>
            </div>
            <div :class="style.wrap2Text" class="mt-20">客户数</div>
          </div>
        </div>

        <div :class="style.wrap2Line"></div>

        <div :class="style.wrap2Right">
          <div :class="style.wrap2Text"> 今日：0 </div>
          <div :class="style.wrap2Text" class="mt-20"> 昨日：0 </div>
        </div>
      </div>
    </section>


    <section :class="style.wrap3">
      <div :class="style.wrapTop">
        <span :class="style.title">实时概况</span>
        <span :class="style.text">更新时间：2020-07-03 17:10:1</span>
        <i class="iconfont icondealtIcon0" :class="style.icon"></i>
      </div>

      <div class="row-between">
        <div v-for="(item, i) in Array(6)" :key="i" :class="style.wrap3Bottom">
          <div :class="style.wrap3Title">
            <span>支付订单数(单)</span>
            <i class="iconfont icondealtIcon0" :class="style.wrap3TitleIcon"></i>
          </div>

          <div :class="style.wrap3Num"> 365 </div>

          <div :class="style.wrap3Text">
            <span>支付订单数(单)</span>
            <i class="iconfont iconwrap2Arrow" :class="style.wrap3TextIcon"></i>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
import style from './index1.module.css'

export default {
  data () {
    return {
      style,
      dealtList: [
        1,2,3,4
      ],
      wrap2: Array(3),
      wrap3Item: Array(6),
      wrap5Item: Array(8),
      wrap6Item: Array(3),
      wrap7List: Array(2),
      wrap7Item: Array(5),
    }
  },

  components: {
  }
}
</script>

<style>

</style>
