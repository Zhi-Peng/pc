<template>
  <div :class="style.wrap">
    <div v-for="(item, i) in list" :key="i" class="mt-30">
      <el-input style="width:100px" v-model="item.title" placeholder="1请输入内容"></el-input>
      <div>
        <el-input
          style="width:100px"
          v-model="item.list[index].text"
          v-for="(bar, index) in item.list"
          :key="index"
        ></el-input>
      </div>
        <div :class="style.addBut1" @click="handleBut(i)">添加</div>
    </div>
    
    <div :class="style.addValueBut" @click="handleAddValues">添加规格值</div>

    <section v-if="levelOnwList">
      <div class="row-between">
        <div v-if="levelOnwList">{{levelOnwList.title}}</div>
        <div v-if="levelTwoList">{{levelTwoList.title}}</div>
        <div v-if="levelThreeList">{{levelThreeList.title}}</div>
        <div>11111</div>
        <div>22222</div>
        <div>33333</div>
        <div>44444</div>
      </div>

      <div v-if="true">
        <div
          class="row-between-center"
          v-for="(wrap, j) in levelOnwList.list"
          :key="j"
          :class="style.tabelText1"
        >
          <div>{{levelOnwList.list[j].text}}</div>
          <div v-if="!levelTwoList || !levelTwoList.list.length" class="row-">
            <div>aaaaa</div>
            <div>bbbbb</div>
            <div>ccccc</div>
            <div>ddddd</div>
          </div>

          <div v-if="levelTwoList && levelTwoList.list">
            <div
              class="row-between-center"
              v-for="(bar, index) in levelTwoList.list"
              :key="index"
              :class="levelThreeList.list && index < levelThreeList.list.length -1 && style.tabelText2"
            >
              <div>value2</div>
              <div v-if="!levelThreeList || !levelThreeList.list">
                <div>aaaaa</div>
                <div>bbbbb</div>
                <div>ccccc</div>
                <div>ddddd</div>
              </div>

              <div v-if="levelThreeList && levelThreeList.list">
                <div>value3</div>
                <div
                  v-for="(item, i) in levelThreeList.list"
                  :key="i"
                  :class="[i < levelThreeList.list.length -1 && style.tabelText3]"
                >
                  <div>11111</div>
                  <div>22222</div>
                  <div>33333</div>
                  <div>44444</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import style from './index.module.css'
import InputLabel from '../../../components/input/label/index.vue'
import { log, debuglog } from 'util';
import func from './vue-temp/vue-editor-bridge';

export default {
  data () {
    return {
      style,
      input1: '',
      input2: '',
      input3: '',
      list: [{title: '', list:[]}],
      tabel: [
        {}
      ]
    }
  },
  mounted () {
  },
  methods: {
    handleBut (i) {
      const children = this.list[i]
      if (children.list.length >= 20) {
         return
      }
      children.list.push({text: ''})
    },
    handleAddValues () {
      if (this.list.length >= 3) return

      this.list.push({title: '', list:[]})
    },
  }
}
</script>


