<template>
  <view class="list">
    <view>
      <text class="d-block">{{timus[current].block}}</text>
      <text class="d-block">{{timus[current].category}}</text>
      <text class="d-block">{{timus[current].title}}</text>
      <template v-if="timus[current].mode === 'radio'">
            <AtRadio
              :options="timus[current].options"
              :value="answer[timus[current].title]"
              :onClick="(value) => {
                handleChange(value,timus[current].title)
              }"
            />
          </template>
          <template v-if="timus[current].mode === 'checkbox'">
            <AtCheckbox
              :options="timus[current].options"
              :selectedList="answer[timus[current].title]"
              :onChange="(value) => {
                handleChange(value,timus[current].title)
              }"
            />
          </template>
    </view>
    <view>
      <text>当前进度：{{current + 1}}/{{timus.length}}</text>
    </view>
      <!-- <AtToast :isOpened="showMsg" :text="msg"></AtToast> -->
      <view>

    <AtButton
      :on-click="current--"
      :disabled="current === 0"
    >
      上一题
    </AtButton>
    <AtButton
      type="primary"
      :on-click="handleClick"
    >
      {{(current+1) === timus.length?'提交答案': '下一题'}}
    </AtButton>
      </view>
      <view>
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

import './item.scss' 
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
      timus: [],
      answer: {},
      msg: '',
      showMsg: false,
      numlist: ['一','二','三','四','五','六','七','八','九','十'],
      current: 0
    }
  },
  created() {
    this.timus = funvlist.concat(ertonglist);
  },
  methods: {
    handleClick () {
      if ((this.current + 1) === this.timus.length) {
        console.log('tijiao daan ...',this.answer)
      } else {
        this.current++
      }
    },
    handleChange(value,title) {
      // console.log('handleChange ...',value,title)
      // this.answer[title] = value;
      this.$set(this.answer,title,value)
    },
  },
    }
</script>
