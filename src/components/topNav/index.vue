<template>
  <div :class="style.wrap" class="row-between-center">
    <div :class="style.right1" class="row-center">
      <div :class="style.right1Icon"></div>

      <div>云贝科技</div>
    </div>

    <div :class="style.navRight" class="row-center">
      <div :class="style.right1">牛蛙恋上鱼</div>
      <div :class="style.line"></div>

      <div :class="style.right2">
        <el-dropdown>
          <span :class="style.dropdownText2">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div :class="style.line"></div>

      <div :class="style.right3" class="row-center">
        <div :class="style.right3Icon"></div>

        <div :class="style.text3">未连接</div>
      </div>

      <div :class="style.line"></div>

      <div :class="style.right4" class="row-center">
        <div :class="style.right4Icon"></div>

        <el-dropdown>
          <span :class="style.dropdownText4">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

    </div>
  </div>
</template>

<script>
import style from './index.module.css'
import Vue from 'vue'

export default Vue.extend({
  data () { return { style }
  }
  
})
</script>