<template>
  <div class="toast">
    <slot></slot>
    <span class="close" v-if="closeButton" @click="closeToastNow">{{closeButton.text}}</span>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 3
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: null
        };
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 100000);
    }
  },
  methods: {
    test(){
      console.log('test')
    },
    // 关闭toast
    close() {
      this.$el.remove();
      this.$destroy();
    },
    // 立即关闭toast
    closeToastNow() {
      this.close();
      // 检测是否传递了toast的第二个参数
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>

<style lang="scss">
$toast-height: 40px;
$font-size: 14px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: $toast-bg;
  color: #fff;
  height: $toast-height;
  line-height: $toast-height;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
}
.close {
  margin-left: 1em;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border-left: 1px solid #fff;
    top: 0;
    left: -0.7em;
    height: 100%;
    // width: 50px;
  }
}
</style>
