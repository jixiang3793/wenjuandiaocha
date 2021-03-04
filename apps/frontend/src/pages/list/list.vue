<template>
  <view class="index">
      <view>
        <text class="d-block text-center">南安市维护妇女儿童合法权益实施情况调查问卷</text>
        <text class="d-block font-16 m-top-12">尊敬的女士：</text>
        <text class="d-block font-16 text-indent-2">您好！</text>
        <text class="d-block font-16 text-indent-2">为了更好地维护妇女和儿童的合法权益，全面了解《南安市妇女发展纲要（2011—2020年）》和《南安市儿童发展纲要（2011—2020年）》实施情况，特编写这份调查问卷。该问卷题目没有标准答案，也没有对错之分，请您按自己了解的情况如实填写，在符合自己选项的数字上划“√”。感谢您的支持和配合！</text>
      </view>
    <AtButton
      type="primary"
      :on-click="handleClick"
      class="m-top-12"
    >
      提交答案
    </AtButton>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtButton } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/button.scss"
import './list.scss' 
export default {
    components: {
    AtButton
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClose () {
      this.show = false
    }
  },
    }
</script>
