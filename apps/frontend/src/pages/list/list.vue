<template>
  <view class="list">
      <text>一、妇女发展</text>
      <view v-for="(item,index) in funvtree" :key="'funvtree' + index">
        <text class="d-block m-item-category">{{item.category}}</text>
        <view v-for="(iitem,j) in item.titles" :key="j">
          <text class="d-block">{{iitem.title}}</text>
          <template v-if="iitem.mode === 'radio'">
            <AtRadio
              :options="iitem.options"
              :value="answer[iitem.title]"
              :onClick="(value) => {
                handleChange(value,iitem.title)
              }"
            />
          </template>
          <template v-if="iitem.mode === 'checkbox'">
            <AtCheckbox
              :options="iitem.options"
              :selectedList="answer[iitem.title]"
              :onChange="(value) => {
                handleChange(value,iitem.title)
              }"
            />
          </template>
        </view>
      </view>
      <text>二、儿童保障</text>
      <view v-for="(item,index) in ertongtree" :key="index">
        <text class="d-block m-item-category">({{numlist[index]}}) {{item.category}}</text>
        <view v-for="(iitem,j) in item.titles" :key="j">
          <text class="d-block">{{j + 1}}、{{iitem.title}}</text>
          <template v-if="iitem.mode === 'radio'">
            <AtRadio
              :options="iitem.options"
              :value="answer[iitem.title]"
              :onClick="(value) => {
                handleChange(value,iitem.title)
              }"
            />
          </template>
          <template v-if="iitem.mode === 'checkbox'">
            <AtCheckbox
              :options="iitem.options"
              :selectedList="answer[iitem.title]"
              :onChange="(value) => {
                handleChange(value,iitem.title)
              }"
            />
          </template>
        </view>
      </view>
      <AtToast :isOpened="showMsg" :text="msg"></AtToast>
      <view class="fix-bottom-10">
    <AtButton
      type="primary"
      :on-click="handleClick"
    >
      提交答案
    </AtButton>
      </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtButton, AtRadio, AtCheckbox, AtToast }  from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/radio.scss";
import "taro-ui-vue/dist/style/components/icon.scss";
import "taro-ui-vue/dist/style/components/checkbox.scss";
import "taro-ui-vue/dist/style/components/toast.scss";

import './list.scss' 
import funvlist from '../../../db/funv.json' 
import ertonglist from '../../../db/ertong.json' 
export default {
    components: {
    AtButton,
    AtRadio,
    AtCheckbox,
    AtToast
  },
  data () {
    return {
      funvtree: [],
      ertongtree: [],
      answer: {},
      msg: '',
      showMsg: false,
      numlist: ['一','二','三','四','五','六','七','八','九','十']
    }
  },
  created() {
    this.genTree(funvlist,this.funvtree)
    this.genTree(ertonglist,this.ertongtree)
  },
  methods: {
    handleClick () {
      if (Object.keys(this.answer).length !== (funvlist.length + ertonglist.length)) {
        this.msg = '请完成所有题目'
        this.showMsg = true
      }
    },
    handleChange(value,title) {
      // console.log('handleChange ...',value,title)
      // this.answer[title] = value;
      this.$set(this.answer,title,value)
    },
    genTree(list,tree) {
      const datamap = {};
      list.forEach(it => {
        if (!datamap[it.category]) {
          datamap[it.category] = [];
        }
        datamap[it.category].push(it);
      });
      Object.keys(datamap).forEach(it => {
        tree.push({
          category: it,
          titles: datamap[it]
        })
      })
    }
  },
    }
</script>
