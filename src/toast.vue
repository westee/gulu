<template>
  <div class="wrapper" :class="`position-${toastPosition}`">
    <div class="toast">
      <slot v-if="!closeButton.enableHTML"></slot>
      <!-- 支持html -->
      <div v-else-if="closeButton.enableHTML" v-html="$slots.default"></div>
      <span class="close" v-if="closeButton" @click="closeToastNow">{{closeButton.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: null,
          enableHTML: false
        };
      }
    },
    toastPosition: {
      type: String,
      default: "top",
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
    this.execAutoClose();
  },
  methods: {
    // 关闭toast时可以执行的函数
    test() {
      // console.log("test");
    },
    // 关闭toast
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    // 立即关闭toast
    closeToastNow() {
      this.close();
      // 检测是否传递了toast的第二个参数
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
    // 是否开启了自动关闭toast
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'common.scss';
*{
  box-sizing: border-box;
}
.wrapper {
  z-index: 20;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      animation: slide-down 0.3s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      animation: slide-up 0.3s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade-in 0.3s;
    }
  }
}
.toast {
  display: flex;
  align-items: center;
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
      right: 3.55em;
      height: 100%;
      // width: 50px;
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-down {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
