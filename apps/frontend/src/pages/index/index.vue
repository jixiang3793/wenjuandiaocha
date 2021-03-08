<template>
  <view class="index">
    <template v-if="loading">
      <view class="text-center">
        <AtIcon value='loading-2' size='100'></AtIcon>
        <text class="d-block mt-1">正在加载中...</text>
      </view>
    </template>
    <template v-if="!loading">
      <view>
        <text class="d-block text-center font-1h"
          >南安市维护妇女儿童合法权益实施情况调查问卷</text
        >
        <text class="d-block m-top-12">尊敬的女士：</text>
        <text class="d-block text-indent-2">您好！</text>
        <text class="d-block text-indent-2"
          >为了更好地维护妇女和儿童的合法权益，全面了解《南安市妇女发展纲要（2011—2020年）》和《南安市儿童发展纲要（2011—2020年）》实施情况，特编写这份调查问卷。该问卷题目没有标准答案，也没有对错之分，请您按自己了解的情况如实填写，在符合自己选项的数字上划“√”。感谢您的支持和配合！</text
        >
      </view>
      <AtButton
        type="primary"
        class="m-top-12"
        v-if="!isUserInfo"
        open-type="getUserInfo"
        :onGetUserInfo="bindGetUserInfo"
      >
        开始答题
      </AtButton>
      <AtButton
        v-if="isUserInfo"
        type="primary"
        :on-click="toList"
        class="m-top-12"
      >
        开始答题
      </AtButton>
      <AtMessage />
    </template>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtButton, AtMessage, AtIcon } from "taro-ui-vue";
import Taro from "@tarojs/taro";
import "taro-ui-vue/dist/style/components/button.scss";
import "taro-ui-vue/dist/style/components/message.scss";
import "./index.scss";
export default {
  components: {
    AtButton,
    AtMessage,
    AtIcon
  },
  data() {
    return {
      // canIUse: wx.canIUse('button.open-type.getUserInfo')
      isUserInfo: false,
      loading: true
    };
  },
  onLoad: function () {
    // 查看是否授权
    const that = this;
    wx.getSetting({
      success(settingRes) {
        if (settingRes.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: async function (res) {
              console.log(res.userInfo);
              Taro.setStorage({
                key:"userInfo",
                data: res.userInfo
              });
              that.isUserInfo = true;
              const isAnswerRes = await Taro.request({
                url: `${REQHOST}/answer`,
                data: res.userInfo,
                method: 'POST'
              });
              if (isAnswerRes.data.isAnswer) {
                Taro.navigateTo({
                  url: "/pages/success/success",
                });
              } else {
                that.loading = false;
              }
              // console.log("isAnswerRes ...",isAnswerRes);
            },
            fail: function () {
              that.loading = false;
            }
          });
        } else {
          that.loading = false;
        }
      },
      fail() {
        that.loading = false;
      }
    });
  },
  methods: {

    bindGetUserInfo(e) {
      if (e.detail.errMsg.indexOf('ok') > -1) {
        this.toList();
      } else {
        Taro.atMessage({
          message: "请授权个人信息，再继续答题",
          type: "info",
        });
      }
    },
    toList() {
      Taro.navigateTo({
        url: "/pages/item/item",
      });
    },
  },
};
</script>
