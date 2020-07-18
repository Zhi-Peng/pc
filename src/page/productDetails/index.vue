<template>
  <div :class="style.wrap">
    <div :class="style.bar1">
      <div :class="style.bar1Title">商品详情</div>
      <div :class="style.bar1Tab" class="row-">
        <div :class="style.bar1TabLeft">1.编辑基本信息</div>
        <div :class="style.bar1TabRight">2.编辑商品详情</div>
      </div>
    </div>

    <div :class="style.bar2">
      <div :class="style.titleBox">商品类型</div>

      <div :class="style.bar2Content" class="row-center">
        <div
          :class="[style.bar2Item,  bar2ItemActive === i ? style.bar2ItemActive : '']"
          @click="select(i)"
          v-for="(item, i) in productTypeList"
          :key="i"
        >
          <div :class="style.bar2ItemTitle">普通商品</div>
          <div :class="style.bar2ItemText">（同城送或自提）</div>
          <div :class="style.bar2ItemSelect"></div>
        </div>
      </div>
    </div>


    <div :class="style.bar3">
      <div :class="style.titleBox">基本信息</div>

      <div :class="style.bar3Content">
        <div>
          <el-form :model="form" :rules="rules" ref="form" label-width="120px" class="demo-ruleForm" size="mini">
            <el-form-item label="商品排序:">
              <div :class="style.bar3Input1">
                <el-input v-model="form.name"></el-input>
              </div>
            </el-form-item>

            <el-form-item label="活动名称:" prop="region">
              <div :class="style.bar3Input2">
                <el-input v-model="form.region"></el-input>
              </div>
            </el-form-item>
            
            <el-form-item label="商品分类:" prop="name1">
              <div :class="style.bar3Input1">
                <el-select v-model="form.name1" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </div>

              <div class="row-center">
                <div :class="style.barTip">商品分类及分类细项</div>
                <div :class="[style.barTip, style.clickSee]">点此查看</div>
              </div>
            </el-form-item>

            <el-form-item label="商品单位:" prop="name2">
              <div :class="style.bar3Input1">
                <el-select v-model="form.name2" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </div>

              <div class="row-center">
                <div :class="style.barTip">商品单位及单位细项</div>
                <div :class="[style.barTip, style.clickSee]">点此查看</div>
              </div>
            </el-form-item>

            <div :class="style.bar3Upload1Box" class="row-">
              <div :class="[style.barUploadTitle, style.wrapLabel]">商品封面:</div>

              <div :class="style.bar3Upload1">
                <div :class="style.bar3UploadBox">+ 添加图片</div>

                <div :class="style.barTip">建议尺寸: 800*800像素，用户商品列表展示</div>
              </div>
            </div>


            <div :class="style.bar3Upload1Box" class="row-">
              <div :class="[style.barUploadTitle, style.wrapLabel]">商品轮播图:</div>

              <div :class="style.bar3Upload1">
                <div :class="style.bar3UploadBox">+ 添加图片</div>

                <div :class="style.barTip">建议尺寸:  800*800像素，你可以拖拽图片调整顺序，最多上传9张</div>
              </div>
            </div>

            <div :class="style.bar3Upload1Box" class="row-">
              <div :class="[style.barUploadTitleW, style.wrapLabel]">主图视频:</div>

              <div :class="style.bar3Upload1">
                <div :class="style.bar3UploadBox">+ 添加图片</div>

                <div :class="style.barTip">目前仅支持在手机端播放，建议时长9-30秒，和建议视频宽高比16:9</div>
              </div>
            </div>

            <el-form-item label="商品排序:" class="mt-30">
              <div :class="style.bar3Input1">
                <el-input v-model="form.name3"></el-input>
              </div>

              <div class="row-center">
                <div :class="style.barTip">商品单位及单位细项</div>
                <div :class="[style.barTip, style.clickSee]">点此查看</div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <div :class="style.bar4">
      <div>
        <div :class="style.titleBox">价格库存</div>
        <div class="row-center">
          <div :class="[style.barUploadTitleW, style.wrapLabel]">规格类型:</div>

          <div>
            <el-radio v-model="radio" label="1">无</el-radio>
            <el-radio v-model="radio" label="2">多规格商品</el-radio>
          </div>
        </div>
      </div>

      <div class="row-center mt-25">
          <div :class="[style.barUploadTitle, style.wrapLabel]">外卖价格库存:</div>

          <div class="row-center mr-15">
            <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
              <template slot="prepend">价格(元)</template>
            </el-input>

            <el-input placeholder="请输入内容" v-model="form.name5" size="mini" style="width: 200px;">
              <template slot="prepend">库存</template>
            </el-input>
          </div>
          <el-checkbox v-model="checked">无限库存</el-checkbox>
      </div>

      <div class="row-center mt-25">
          <div :class="[style.barUploadTitle, style.wrapLabel]">堂食价格库存:</div>

          <div class="row-center mr-15">
            <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
              <template slot="prepend">价格(元)</template>
            </el-input>

            <el-input placeholder="请输入内容" v-model="form.name5" size="mini" style="width: 200px;">
              <template slot="prepend">库存</template>
            </el-input>
          </div>
          <el-checkbox v-model="checked">无限库存</el-checkbox>
      </div>

      <div class="row-center mt-25">
        <div :class="[style.barUploadTitleW, style.wrapLabel]">划线价:</div>

        <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
          <template slot="prepend">¥</template>
        </el-input>
      </div>

      <div class="mt-25">
        <div class="row-center">
          <div :class="[style.barUploadTitleW, style.wrapLabel]">起售:</div>
          <div :class="style.addProductNum">
            商品至少
            <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10" size="mini"></el-input-number>件起售
          </div>
        </div>
        <div style="margin-left: 120px;" :class="style.barTip">起售数量超出商品库存时，买家无法购买该商品。</div>
      </div>

      <div class="mt-25">
        <div class="row-center">
          <div :class="[style.barUploadTitleW, style.wrapLabel]">限购:</div>

          <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
            <template slot="prepend">件</template>
          </el-input>
        </div>

        <div style="margin-left: 120px;" :class="style.barTip">限制每人每单可购买数量，不填或填0择代表不限制</div>
      </div>

      <div class="mt-25">
        <div class="row-center">
          <div :class="[style.barUploadTitleW, style.wrapLabel]">起售:</div>
          <el-checkbox v-model="checked">无限库存</el-checkbox>
        </div>

        <div style="margin-left: 120px;" :class="style.barTip">是否勾选不影响自定义会员价生效。<span>什么时自定义会员价？</span></div>
      </div>



<!-- 折叠更多设置 -->
      <div :class="style.setting" class="mt-30">
        <div :class="[style.settingTitle, style.active]" class="row-center" @click="fold1 = !fold1">{{fold1 ? '展开' : '折叠'}}更多设置</div>
        <el-form :model="form" :rules="rules" ref="form" label-width="120px" class="demo-ruleForm" :class="[fold1 ? 'hidden' : '']" size="mini">
          <el-form-item label="商品编码:">
            <div :class="style.bar3Input1">
              <el-input v-model="form.name"></el-input>
            </div>
          </el-form-item>

          <div class="mt-25">
            <div class="row-center">
              <div :class="[style.barUploadTitleW, style.wrapLabel]">成本价:</div>

              <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
                <template slot="prepend">￥</template>
              </el-input>
            </div>

            <div style="margin-left: 120px;" :class="style.barTip">成本价未来会用于营销建议，利润分析等</div>
          </div>

          <div class="mt-25">
            <div class="row-center">
              <div :class="[style.barUploadTitleW, style.wrapLabel]">包装费:</div>

              <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
                <template slot="prepend">件</template>
              </el-input>
            </div>

            <div style="margin-left: 120px;" :class="style.barTip">仅限外卖订单使用</div>
          </div>

          <div class="mt-25">
            <div class="row-center">
              <div :class="[style.barUploadTitleW, style.wrapLabel]">虚拟销量:</div>

              <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
                <template slot="prepend">件</template>
              </el-input>
            </div>

            <div style="margin-left: 120px;" :class="style.barTip">显示销量 = 虚拟销量 + 实际销量</div>
          </div>
         </el-form>
      </div>
    </div>


    <div :class="style.bar5">
      <div :class="style.titleBox">商品属性</div>

      <div class="row-" style="align-items: baseline;">
        <div :class="style.barUploadTitleW">商品属性:</div>

        <div :class="style.bar5Right">
          <div :class="style.wrapTip">同种价格多种口味，如：少糖、半糖等 <a style="color:#3158D7;margin-left: 5px; margin-bottom:20px">了解详情</a></div>

          <div class="row- mt-15" v-for="(bar, index) in bar5List1" :key="index" style="margin-bottom: 40px;">
            <div>
              <div :class="[style.barUploadTitle, style.bar5Label, style.wrapTip]">属性名称</div>
              <el-input v-model="form.name1" placeholder="" style="width: 96px;margin-top: 5px;" size="medium"></el-input>
            </div>

            <div style="margin-left: 28px;">
              <div :class="[style.barUploadTitle, style.bar5Label]">属性值（至少填写两个）</div>
              <div class="row-" style="flex-wrap: wrap;width: 660px;">
                <el-input size="medium" style="width: 96px;margin-right: 5px;margin-top: 5px;" v-model="form.name1" placeholder="" v-for="(item, i) in bar5List" :key="i"></el-input>
              </div>
            </div>

            <div class="row-center" @click="handleRemoveBar5(index)">
              <i class="iconfont icondealtIcon0"></i>
              <div>移除</div>
            </div>
          </div>

          <div class="row-center" style="color:#3158D7" @click="handleAddBar5">
            <i class="iconfont icondealtIcon0"></i>
            <div>添加属性，最多5个</div>
          </div>
        </div>
      </div>
    </div>


    <div :class="style.bar6">
      <div :class="style.titleBox">商品加料</div>

      <div class="row-">
        <div :class="style.barUploadTitleW">商品属性:</div>

        <div>
          <div>同种价格多种口味，如：少糖、半糖等 <a>了解详情</a></div>

          <div class="row-">
            <div>
              <div :class="[style.barUploadTitle, style.bar5Label]" style="text-align: left;">加料名称</div>
              <el-input v-model="form.name1" placeholder="请输入内容"></el-input>
            </div>

            <div style="width: 200px;">
              <div :class="[style.barUploadTitle, style.bar5Label]">外卖价格库存</div>

              <div class="row-center">
                <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
                  <template slot="prepend">价格(元)</template>
                </el-input>
                <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
                  <template slot="prepend">库存</template>
                </el-input>
              </div>
            </div>

            <div style="width: 200px;">
              <div :class="[style.barUploadTitle, style.bar5Label]">堂食价格库存</div>

              <div class="row-center">
                <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
                  <template slot="prepend">价格(元)</template>
                </el-input>
                <el-input placeholder="请输入内容" v-model="form.name4" size="mini" style="width: 200px;">
                  <template slot="prepend">库存</template>
                </el-input>
              </div>
            </div>

            <div class="row-center">
              <i class="iconfont icondealtIcon0"></i>
              <div>移除</div>
            </div>
          </div>

          <div class="row-center">
            <i class="iconfont icondealtIcon0"></i>
            <div>添加属性，最多5个</div>
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
      productTypeList: Array(3),

      bar5List1: [1],
      bar5List: Array(8),
      bar2ItemActive: 0,
      checked: false,
      num8: 1,
      form: {
        name: '',
        region: '',
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
      },
      rules: {
        region: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
      radio: '1',
      fold1: true,
    }
  },

  methods: {
    dd () {
      console.log('fsafa');
    },
    select (index) {
      this.bar2ItemActive = index
    },
    onSubmit() {
      console.log('submit!');
    },
    handleChange(value) {
      console.log(value);
    },
    handleAddBar5 () {
      if (this.bar5List1.length > 4) {
        return
      }

      this.bar5List1.push(1)
    },
    handleRemoveBar5(index) {
      console.log(index, 'ppppp')
      this.bar5List1.splice(index, 0)
    }
  }
  
})
</script>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>