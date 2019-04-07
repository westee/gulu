<template>
  <div class="toast" :class="`position-${toastPosition}`">
    <slot v-if="!closeButton.enable"></slot>
    <!-- 支持html -->
    <div v-else-if="closeButton.enable" v-html="$slots.default"></div>
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
          callback: null,
          enable: false
        };
      }
    },
    toastPosition: {
      type: String,
      default: "position-top",
      validator(val) {
        return ["top", "bottom", "middle"].indexOf(val) >= 0;
      }
    }
  },
  computed: {
    positionClass() {
      return {
        [`position-${this.toastPosition}`]: true
      };
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 100);
    }
  },
  methods: {
    test() {
      console.log("test");
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
  display: flex;
  align-items: center;
  position: fixed;
  background: $toast-bg;
  color: #fff;
  min-height: $toast-height;
  line-height: 1.6;
  padding: 4px 16px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

  .close {
    margin-left: 1em;
    flex-shrink: 0;
    // min-width: 4em;
    &::after {
      content: "";
      position: absolute;
      border-left: 1px solid #fff;
      top: 0;
      right: 3.7em;
      height: 100%;
      // width: 50px;
    }
  }
  &.position-top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } 
}
</style>
