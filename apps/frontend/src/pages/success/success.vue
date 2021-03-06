<template>
  <view class="success">
    <view class="pt-5 text-center">
      <AtIcon value='check-circle' size='100' color='green'></AtIcon>
      <text class="d-block my-1 fs-2">您已完成所有答题</text>
      <text class="d-block my-1 fs-1h">感谢您的参与</text>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtIcon } from "taro-ui-vue";
import "taro-ui-vue/dist/style/components/icon.scss";
import "./success.scss";
export default {
  components: {
    AtIcon
  },
  data() {
    return {
    };
  }
};
</script>
