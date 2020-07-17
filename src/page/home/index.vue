<template>
  <div :class="style.wrap">
    <div :class="style.wrap1" class="row-center">
      <div :class="style.wrap1Left">
        <div :class="style.wrap1Title"> 下午好！ </div>
        <div :class="style.wrap1Text"> 欢迎登入后台管理系统 </div>
      </div>

      <div :class="style.line"></div>
      <div :class="style.wrap1Empty"></div>

      <div :class="style.wrap1Right">
        <div :class="style.wrap1Title">待办事项：</div>

        <div class="row-between-center">
          <div
            :class="style.dealt"
            class="row-center"
            v-for="(item, i) in dealtList"
            :key="i"
          >
            <div :class="style.dealtItem" class="row-center">
              <div :class="[style.dealtItemIcon, `icondealtIcon${i}`]" class="iconfont"></div>
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
          <div :class="style.wrap2Icon"><img :src="require(`@assets/home/iconwrap2Arrow${i}.png`)"></div>

          <div :class="style.wrap2Nub">
            <div :class="style.wrap2Title" class="row-center">
              <div>133</div>
              <div :class="[style.wrap2Arrow]" class="iconfont iconwrap2Arrow"></div>
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
          <div :class="style.wrap3TopIcon" class="iconfont iconwrap2Arrow"></div>
        </div>
      </div>

      <div :class="style.wrap3Bottom" class="row-between-center">
        <div :class="style.wrap3Item" class="row-column" v-for="(item, i) in wrap3Item" :key='i'>
          <div class="row-center">
            <div :class="style.wrap3Text1">支付订单数(单)</div>
            <div class="iconfont iconwrap2Arrow"></div>
          </div>

          <div :class="style.wrap3Text2">2365</div>
          
          <div class="row-center-center" :class="style.wrap3ItemBottom">
            <div :class="style.wrap3Text3">昨日：211</div>
            <div class="iconfont iconwrap2Arrow"> </div>
          </div>
        </div>
      </div>
    </div>


    <div :class="style.wrap4" class="row-between">
      <div :class="style.wrap4Item">

      </div>

      <div :class="style.wrap4Item">

      </div>
    </div>


    <div :class="style.wrap5">
      <div :class="style.wrap5Top" class="row-between-center">
        <div :class="style.wrap5TopTitle">常用功能</div>
        <div :class="style.wrap5TopBut">编辑</div>
      </div>


      <div :class="style.wrap5Bottom" class="row-between">
        <div :class="style.wrap5Item" class="row-center" v-for="(item, i) in wrap5Item" :key="i">
          <div :class="style.wrap5ItemTag"></div>
          <div :class="style.wrap5ItemText">发布商品</div>
        </div>
      </div>
    </div>


    <div :class="style.wrap6">
      <div :class="style.wrap6Top">最新推荐</div>

      <div :class="style.wrap6Bottom" class="row-between">
        <div :class="style.wrap6Item" class="row-column" v-for="(item, i) in wrap6Item" :key="i">
          <div :class="style.wrap6Title">微信小程序</div>
          <div :class="style.wrap6Text">抢占微信社交流量红利</div>
        </div>
      </div>
    </div>


    <div :class="style.wrap7" class="row-">
      <div :class="style.wrap7Item" v-for="(bar, index) in wrap7List" :key="index">
        <div :class="style.wrap7Top" class="row-between-center">
          <div :class="style.wrap7Left" class="row-center">
            <div :class="style.wrap7Title">TOP10 商品销量排行</div>

            <div :class="style.wrap7Text" class="row-center">
                <div :class="style.wrap7Date">更新时间：2020-07-03 17:10:1</div>
                <i class="iconfont icondealtIcon0"></i>
            </div>
          </div>

          <div :class="style.wrap7Right">查看更多 >></div>
        </div>


        <div :class="style.wrap7Bottom">

          <el-col :span="24" :class="style.tHead" class="row-">
            <el-col :span="3">序号</el-col>
            <el-col :span="5">封面</el-col>
            <el-col :span="13">商品名称</el-col>
            <el-col :span="3">单价</el-col>
            <el-col :span="2">销量</el-col>
          </el-col>

          <el-col :span="24" :class="style.tBody" class="row-center" v-for="(item, i) in wrap7Item" :key="i">
            <el-col :span="3">
              <div :class="style.serial">1</div>
            </el-col>

            <el-col :span="5">
              <i :class="style.cover"></i>
            </el-col>

            <el-col :span="11">
              <div :class='style.product'>云贝网络科技</div>
            </el-col>

            <el-col :span="3">
              <div :class="style.price">￥<span></span> 13</div>
            </el-col>

            <el-col :span="2">
              <span :class="style.sales">2021</span>
            </el-col>
          </el-col>
        </div>


      </div>
    </div>

<div>

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