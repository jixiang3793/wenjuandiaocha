<template>
  <view class="list">
    <template v-if="pageStatus === 'loading'">
      <view class="text-center mt-1">
        <AtIcon value='loading-2' size='100'></AtIcon>
        <text class="d-block mt-1">正在加载中...</text>
      </view>
    </template>
    <template v-if="pageStatus === 'normal'">
      <view>
        <text class="d-block text-center font-1h my-1">{{ timus[current].block }}</text>
        <text class="d-block my-1">{{ timus[current].category }}</text>
        <text class="d-block my-1">{{ timus[current].title }}</text>
        <view class="my-1 min-h-10">
          <template v-if="timus[current].mode === 'radio'">
            <AtRadio
              :options="timus[current].options"
              :value="answer[timus[current].title]"
              :onClick="
                (value) => {
                  handleChange(value, timus[current].title);
                }
              "
            />
          </template>
          <template v-if="timus[current].mode === 'checkbox'">
            <AtCheckbox
              :options="timus[current].options"
              :selectedList="answer[timus[current].title]"
              :onChange="
                (value) => {
                  handleChange(value, timus[current].title);
                }
              "
            />
          </template>
        </view>
      </view>
      <view class="my-1 text-center">
        <text>答题进度：（{{ current + 1 }}/{{ timus.length }}）</text>
      </view>
      <AtToast :isOpened="showMsg" :text="msg" :onClose="toastClose"></AtToast>
      <view class="my-1 text-center">
        <AtButton
        class="btn-max-w"
          type="secondary"
          :on-click="prev"
          :disabled="current === 0"
        >
          上一题
        </AtButton>
        <AtButton
        class="btn-max-w"
          type="primary"
          :loading="loading"
          :on-click="handleClick"
        >
          {{ current + 1 === timus.length ? "提交答案" : "下一题" }}
        </AtButton>
      </view>
    </template>
    <template v-if="pageStatus === 'finish'">
      <view>
        <text class="d-block text-center font-1h"
          >南安市维护妇女儿童合法权益实施情况调查问卷</text
        >
        <view class="mt-1 text-center">
          <AtIcon value="check-circle" size="100" color="green"></AtIcon>
          <text class="d-block my-1 fs-2">您已完成所有答题</text>
          <text class="d-block my-1 fs-1h">感谢您的参与</text>
        </view>
      </view>
    </template>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import Taro from "@tarojs/taro";

import { AtButton, AtRadio, AtCheckbox, AtToast, AtIcon } from "taro-ui-vue";
import "taro-ui-vue/dist/style/components/button.scss";
import "taro-ui-vue/dist/style/components/radio.scss";
import "taro-ui-vue/dist/style/components/icon.scss";
import "taro-ui-vue/dist/style/components/checkbox.scss";
import "taro-ui-vue/dist/style/components/toast.scss";

import "./item.scss";
export default {
  components: {
    AtButton,
    AtRadio,
    AtCheckbox,
    AtToast,
    AtIcon
  },
  data() {
    return {
      timus: [],
      answer: {},
      msg: "",
      showMsg: false,
      loading: false,
      pageStatus: 'loading',
      numlist: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
      current: 0,
    };
  },
  async created() {
    const dataRes = await Taro.request({
      url: `${REQHOST}/timu`,
      method: 'GET'
    });
    this.timus = dataRes.data;
    this.pageStatus = 'normal';
  },
  methods: {
    prev() {
      this.current--;
    },
    async handleClick() {
      if (this.current + 1 === this.timus.length) {
        if (!this.answer[this.timus[this.current].title]) {
          this.msg = '请选择答案';
          this.showMsg = true;
        } else {
          this.loading = true;
          const userInfo = Taro.getStorageSync('userInfo');
          const result = await Taro.request({
            url: `${REQHOST}/answer/save`,
            data: { ...userInfo, answer: this.answer },
            method: 'POST'
          });
          console.log("save result ...",result);
          this.loading = false;
          this.pageStatus = 'finish';
          Taro.setStorage({
            key: "userAnswerIsFinish",
            data: true,
          });
        }
      } else {
        if (!this.answer[this.timus[this.current].title]) {
          this.msg = '请选择答案';
          this.showMsg = true;
        } else {
          this.current++;
        }
      }
    },
    handleChange(value, title) {
      // console.log('handleChange ...',value,title)
      // this.answer[title] = value;
      this.$set(this.answer, title, value);
    },
    toastClose() {
      this.showMsg = false;
    }
  },
};
</script>
