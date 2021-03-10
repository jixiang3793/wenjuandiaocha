<template>
  <view class="index">
    <template v-if="pageStatus === 'loading'">
      <view class="text-center">
        <text class="d-block text-center font-1h"
          >南安市维护妇女儿童合法权益实施情况调查问卷</text
        >
        <view class="mt-1">
          <AtIcon value="loading-2" size="100"></AtIcon>
          <text class="d-block mt-1">正在加载中...</text>
        </view>
      </view>
    </template>
    <template v-if="pageStatus === 'normal'">
      <view>
        <text class="d-block text-center font-1h"
          >南安市维护妇女儿童合法权益实施情况调查问卷</text
        >
        <text class="d-block m-top-12">尊敬的女士：</text>
        <text class="d-block text-indent-2">您好！</text>
        <text class="d-block text-indent-2"
          >为了更好地维护妇女和儿童的合法权益，全面了解《南安市妇女发展纲要（2011—2020年）》和《南安市儿童发展纲要（2011—2020年）》实施情况，特编写这份调查问卷。该问卷题目没有标准答案，也没有对错之分，请您按自己了解的情况如实填写。感谢您的支持和配合！</text
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
import { AtButton, AtMessage, AtIcon } from "taro-ui-vue";
import Taro from "@tarojs/taro";
import "taro-ui-vue/dist/style/components/button.scss";
import "taro-ui-vue/dist/style/components/icon.scss";
import "taro-ui-vue/dist/style/components/message.scss";
import "./index.scss";
export default {
  components: {
    AtButton,
    AtMessage,
    AtIcon,
  },
  data() {
    return {
      // canIUse: wx.canIUse('button.open-type.getUserInfo')
      isUserInfo: false,
      pageStatus: "loading", // loading-在加载中,finish-已完成,normal-首页
    };
  },
  onLoad: function () {
    // Taro.showShareMenu({
    //   withShareTicket: true,
    //   showShareItems: ["wechatFriends", "wechatMoment"],
    // });
    wx.showShareMenu({
      withShareTicket: true,
      //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
      menus: ["shareAppMessage", "shareTimeline"],
    });
    // 查看是否授权
    Taro.removeStorageSync("userAnswerIsFinish");
    const that = this;
    wx.getSetting({
      success(settingRes) {
        if (settingRes.authSetting["scope.userInfo"]) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo);
              Taro.setStorage({
                key: "userInfo",
                data: res.userInfo,
              });
              that.isUserInfo = true;
              that.getIsAnswer(res);
              // console.log("isAnswerRes ...",isAnswerRes);
            },
            fail: function () {
              that.pageStatus = "normal";
            },
          });
        } else {
          that.pageStatus = "normal";
        }
      },
      fail() {
        that.pageStatus = "normal";
      },
    });
  },
  //发送给朋友
  onShareAppMessage(res) {
    // return {
    //   title: "深山工作室欢迎你",
    //   type: 0,
    //   path: "/pages/index/index",
    //   summary: "",
    //   imageUrl: "这个是分享图片地址",
    // };
    console.log("onShareAppMessage ...");
  },
  //分享到朋友圈
  onShareTimeline(res) {
    // return {
    //   title: "深山工作室欢迎你",
    //   type: 0,
    //   query: "id=" + distSource, //这个是参数
    //   summary: "",
    //   imageUrl: "这个是分享图片地址",
    // };
    console.log("onShareTimeline ...");
  },
  onShow() {
    // 返回页面时需要
    // console.log("onshow ...", this.isUserInfo);
    if (this.isUserInfo) {
      const isFinish = Taro.getStorageSync("userAnswerIsFinish");
      if (isFinish) {
        this.pageStatus = "finish";
      } else {
        this.pageStatus = "normal";
      }
      // this.getIsAnswer(Taro.getStorageSync('userInfo'));
    }
  },
  methods: {
    async getIsAnswer(res) {
      const isAnswerRes = await Taro.request({
        url: `${REQHOST}/answer`,
        data: res.userInfo,
        method: "POST",
      });
      if (isAnswerRes.data.isAnswer) {
        this.pageStatus = "finish";
      } else {
        this.pageStatus = "normal";
      }
    },
    bindGetUserInfo(e) {
      if (e.detail.errMsg.indexOf("ok") > -1) {
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
