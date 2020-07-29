<template>
  <div>
    <section :class="style.wrap">
      <section :class="style.wrap1">
        <div :class="style.wrap1Title"> 商品详情 </div>
    
        <div :class="style.wrap1Bottom" class="row-center">
          <div :class="style.wrap1Type1">1.编辑基本信息</div>
          <div :class="style.wrap1Type2">2.编辑商品详情</div>
        </div>
      </section>


  <!-- wrap2 -->
      <section :class="style.wrap2">
        <div :class="style.titleBox">商品类型</div>

        <div :class="style.wrap2List" class="row-center">
          <div
            :class="[style.wrap2Item, i === bar2ItemActive ? style.wrap2Active : '']"
            @click="handleClickProduct(i)"
            v-for="(item, i) in Array(3)"
            :key="i"
          >
            <div :class="style.wrap2ItemTitle">普通商品</div>
            <div :class="style.wrap2ItemText">（同城送或自提）</div>
            <i :class="style.wrap2Icon"></i>
          </div>
        </div>
      </section>


  <!-- wrap3 -->
      <section :class="style.wrap3">
        <div :class="style.titleBox">基本信息</div>

        <el-form :class="style.wrap3Form" size="small" ref="form" :model="form" :rules="rules" label-width="110px">
          <el-form-item label="商品排序" prop="sort">
            <el-input :class="style.wrapInput" v-model="form.sort"></el-input>
          </el-form-item>

          <el-form-item label="商品名称" prop="name">
            <el-input :class="style.wrapInputLen" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="商品分类" prop="type">
            <el-select :class="style.wrapInput" v-model="form.type" placeholder="请选择商品所属分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <div :class="style.wrapTip">商品分类及分类细项 <span :class="style.wrapTipSee">点此查看</span></div>

          <el-form-item label="商品单位" prop="unit">
            <el-select :class="style.wrapInput" v-model="form.unit" placeholder="请选择商品所属分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <div :class="style.wrapTip">商品单位及单位细项 <span :class="style.wrapTipSee">点此查看</span></div>

          
          <div class="row-">
            <input-label rules>商品封面</input-label>

            <div :class="style.uploadBox">
              <div :class="style.uploadWrap">+添加图片</div>
            </div>
          </div>
          <div :class="style.wrapTip">建议尺寸:  800*800像素，用户商品列表展示</div>

          <div class="row-">
            <input-label rules>商品轮播图</input-label>

            <div :class="style.uploadBox">
              <div :class="style.uploadWrap">+添加图片</div>
            </div>
          </div>
          <div :class="style.wrapTip">建议尺寸:  800*800像素，你可以拖拽图片调整顺序，最多上传9张</div>

          <div class="row-">
            <input-label>主图视频</input-label>

            <div :class="style.uploadBox">
              <div :class="style.uploadWrap">+添加图片</div>
            </div>
          </div>
          <div :class="style.wrapTip">目前仅支持在手机端播放，建议时长9-30秒，和建议视频宽高比16:9</div>

          <el-form-item label="商品描述" prop="sort" style="position:relative;">
            <el-input :class="style.wrapInputLen" v-model="form.sort"></el-input>
            <div style="margin-bottom: 0;" :class="style.wrapTip">在商品列表页、详情页标题下面展示卖点信息，建议60字以内 <span :class="style.wrap3TipSee">点此查看</span></div>
          </el-form-item>
        </el-form>
      </section>


  <!-- wrap4 -->
      <section :class="style.wrap4">
        <div :class="style.titleBox">价格库存</div>

        <div :class="style.wrap4Bar" class="row-center">
          <input-label>规格类型</input-label>

          <div>
            <el-radio v-model="radio" label="1">无</el-radio>
            <el-radio v-model="radio" label="2">多规格商品</el-radio>
          </div>
        </div>


        <div :class="style.wrap4Bar" class="row-center">
          <input-label rules>外卖价格库存</input-label>
          <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
            <template slot="prepend">价格(元)</template>
          </el-input>
          <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
            <template slot="prepend">库存</template>
          </el-input>
          <el-checkbox class="ml-20" v-model="checked">无线库存</el-checkbox>
        </div>
        
        <div :class="style.wrap4Bar" class="row-center">
          <input-label rules>堂食价格库存</input-label>
          <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
            <template slot="prepend">价格(元)</template>
          </el-input>
          <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
            <template slot="prepend">库存</template>
          </el-input>
          <el-checkbox class="ml-20" v-model="checked">无线库存</el-checkbox>
        </div>

        <div :class="style.wrap4Bar" class="row-center">
          <input-label>划线价</input-label>
          <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
            <template slot="prepend">￥</template>
          </el-input>
        </div>

        <div :class="style.wrap4Bar" class="row-center">
          <input-label>起售</input-label>

          <div :class="style.wrap4InputNum">
            <span class="mr-10">商品至少</span>
            <el-input-number size="small" v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            <span class="ml-10">件起售</span>
          </div>
        </div>
        <div :class="style.wrapTip">起售数量超出商品库存时，买家无法购买该商品。</div>

        <div :class="style.wrap4Bar" class="row-center">
          <input-label>限购</input-label>
          <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
            <template slot="prepend">件</template>
          </el-input>
        </div>
        <div :class="style.wrapTip">限制每人每单可购买数量，不填或填0择代表不限制</div>

        <div :class="style.wrap4Bar" class="row-center">
          <input-label>会员折扣</input-label>
          <el-checkbox class="ml-20" v-model="checked">无线库存</el-checkbox>
        </div>
        <div :class="style.wrapTip">是否勾选不影响自定义会员价生效。 <span :class="style.wrapTipSee">什么时自定义会员价？</span></div>
      </section>


  <!-- wrap5 -->
      <section :class="style.wrap5">
        <div class="row-center" :class="[style.wrap5Fold, fold1 ? style.wrap5Active : '']" @click="fold1 = !fold1">折叠更多设置</div>

        <el-form :class="[style.wrap3Form, fold1 ? 'hidden': '']" size="small" ref="form" :model="form" :rules="rules" label-width="110px">
          <el-form-item label="商品编码" prop="sort" style="position:relative;">
            <el-input :class="style.wrapInputLen" v-model="form.sort"></el-input>
          </el-form-item>

          <div :class="style.wrap4Bar" class="row-center">
            <input-label>成本价</input-label>

            <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
              <template slot="prepend">￥</template>
            </el-input>
          </div>
          <div :class="style.wrapTip">成本价未来会用于营销建议，利润分析等</div>

          <div :class="style.wrap4Bar" class="row-center">
            <input-label>包装费</input-label>
            <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
              <template slot="prepend">￥</template>
            </el-input>
          </div>
          <div :class="style.wrapTip">仅限外卖订单使用</div>

          <div :class="style.wrap4Bar" class="row-center">
            <input-label>虚拟销量</input-label>
            <el-input class="templateInput" v-model="input1" style="width: 160Px;" size="small">
              <template slot="prepend">件</template>
            </el-input>
          </div>
          <div :class="style.wrapTip">显示销量 = 虚拟销量 + 实际销量</div>
        </el-form>
      </section>



  <!-- wrap6 -->
      <section :class="style.wrap6">
        <div :class="style.titleBox">商品属性</div>

        <div class="row- mt-30" :class="style.wrap6Content">
          <input-label>商品属性</input-label>

          <div>
            <div :class="[style.wrapTipMax]">同种价格多种口味，如：少糖、半糖等 <span :class="style.wrapTipMaxSee">了解详情</span></div>

            <div class="row-center mt-30">
              <input-label rules labelTitle width="90">属性名称</input-label>
              <input-label class="ml-35" rules labelTitle width="90">属性值</input-label>
            </div>

            <div class="row-" style="padding-bottom: 30px; border-bottom: 1px solid red;margin-top: 0px;">
              <div :class="style.wrap6Bottom">
                <el-input :class="style.wrap6Input" v-model="input" size="small"></el-input>
              </div>

              <div class="ml-30" style="width: 534px;">
                <div class="row-center" :class="style.wrap6List">
                  <el-input
                    :class="style.wrap6Input"
                    v-model="input"
                    size="small"
                    v-for="(item, i) in Array(7)"
                    :key="i"
                  ></el-input>

                </div>
              </div>

              <div class="row-center mt-20" :class="style.removeBut">
                <i class="iconfont icondealtIcon0"></i>
                <span> 移除 </span>
              </div>
            </div>


            <div class="row-center" :class="style.addProps">
              <i class="iconfont icondealtIcon0"></i>

              <span>添加属性，最多5个</span>
            </div>

          </div>
        </div>
      </section>


  <!-- wrap7 -->
      <section :class="style.wrap7">
        <div :class="style.titleBox">商品加料</div>

        <div class="row- mt-30" style="align-items:baseline;">
          <input-label>商品加料</input-label>

          <div class="style.wrap7Right">
            <div :class="[style.wrapTipMax]">同种价格多种口味，如：少糖、半糖等 <span :class="style.wrapTipMaxSee">了解详情</span></div>

            <div :class="style.wrap7Item">
              <div class="row-center mt-30">
                <input-label rules labelTitle width="90">加料名称</input-label>
                <input-label class="ml-30" rules labelTitle width="255">外卖价格库存</input-label>
                <input-label class="ml-30" rules labelTitle width="255">堂食价格库存</input-label>
              </div>

              <div class="row-center mt-10" style="padding-bottom: 30px; border-bottom: 1px solid red;margin-top: 0px;">
                <el-input :class="style.wrap6Input" v-model="input" size="small"></el-input>
                <div class="row-center ml-30">
                  <el-input :class="style.templateInput" v-model="input1" size="small">
                    <template slot="prepend">价格(元)</template>
                  </el-input>
                  <el-input :class="style.templateInput1" v-model="input1" size="small">
                    <template slot="prepend">库存</template>
                  </el-input>
                </div>

                <div class="row-center ml-30">
                  <el-input :class="style.templateInput" v-model="input1" size="small">
                    <template slot="prepend">价格(元)</template>
                  </el-input>
                  <el-input :class="style.templateInput1" v-model="input1" size="small">
                    <template slot="prepend">库存</template>
                  </el-input>
                </div>

                <div class="row-center ml-30" :class="style.removeBut">
                  <i class="iconfont icondealtIcon0"></i>
                  <span> 移除 </span>
                </div>
              </div>

              <div class="row-center" :class="style.addProps">
                <i class="iconfont icondealtIcon0"></i>
                <span>添加属性，最多5个</span>
              </div>

            </div>
          </div>



        </div>
      </section>
      

      <section :class="style.wrap8" class="mt-30">
        <div :class="style.titleBox">其他信息</div>

        <div class="row-" style="align-items: baseline;">
          <input-label>上架时间:</input-label>

          <div>
            <el-radio v-model="radio" label="1">立即上架售卖</el-radio>
            <div class="mt-30 mb-30">
              <el-radio v-model="radio" label="0">自定义上架时间</el-radio>
              <el-time-select
                size="small"
                v-model="value"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }"
                placeholder="选择时间">
              </el-time-select>
            </div>
            <el-radio v-model="radio" label="2">暂不售卖，放入仓库</el-radio>
          </div>

        </div>

        <div class="row-center mt-30" :class="[style.wrap5Fold, fold1 ? style.wrap5Active : '']" @click="fold1 = !fold1">折叠更多设置</div>
        <div class="row-center mt-30">
          <input-label>规格类型:</input-label>

          <div>
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </div>
        </div>


        <div class="row-center">
          <input-label>推荐商品:</input-label>

          <div>
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
          </div>
        </div>
      </section>
    </section>


    <section :class="style.wrap9" class="row-center">
      <div :class="style.wrap9Btn1">保存并查看</div>
      <div :class="style.wrap9Btn2">下一步</div>
    </section>
  </div>


</template>
<style lang="postcss">

/**
 *
 * element ui 更改样式
 *
 * */
.templateInput {
  width: 160Px;
  .el-input-group__prepend {
    border-radius: 0;
    color: var(--c3);
  }
  .el-input__inner {
    border-radius: 0;
  }
}
</style>


<script>
import Vue from 'vue'
import style from './index1.module.css'
import InputLabel from '../../../components/input/label/index.vue'

export default Vue.extend({
  data () {
    return {
      style,
      input1: '',
      bar2ItemActive: 0,
      checked: false,
      num: '1',
      num8: 1,
      radio: '1',
      fold1: false,
      value: '',
      form: {
        sort: '',
        name: '',
        type: '',
        unit: '',
        region: '',
        name1: '',
        name2: '',
        name3: '',
        name4: '',
        name5: '',
        radio: '1',
        fold1: false,
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择商品类型', trigger: 'blur' },
        ],
        unit: [
          { required: true, message: '请选择商品所属单位', trigger: 'blur' },
        ],
      },
    }
  },
  components: {
    InputLabel,
  },
  methods: {
    handleClickProduct (index) {
      console.log(index, 'dd')
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
      this.bar5List1.splice(index, 1)

      this.bar5List1 = this.bar5List1
    }
  }
  
})
</script>
