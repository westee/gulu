<template>
  <div class="popover" ref="popover">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import { Stream } from "stream";
export default {
  props: {
    position: {
      type: String,
      default: "top",
      validator(val) {
        return ["top", "bottom", "right", "left"].indexOf(val) >= 0;
      }
    },
    triggerType: {
      type: String,
      default: "click",
      validator(val) {
        return ["click", "mouseenter"].indexOf(val) >= 0;
      }
    }
  },
  mounted() {
    this.selectTriggerType();
  },
  computed: {},
  data() {
    return {
      visible: false
    };
  },
  methods: {
    selectTriggerType() {
      if (this.triggerType === "click") {
        this.$refs.popover.addEventListener("click", this.clickPopover);
      } else {
        this.$refs.popover.addEventListener("mouseenter", this.displayPopover);
        this.$refs.popover.addEventListener("mouseleave", this.closePopover);
      }
    },
    // 根据触发器设置popover的位置
    popoverContentPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      let { contentWrapper } = this.$refs;
      let {
        top,
        left,
        width,
        height
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      // 获得popover的宽度
      let {
        height: contentWrapperHeight
      } = this.$refs.contentWrapper.getBoundingClientRect();
      let positionArr = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + window.scrollY + height
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY - (contentWrapperHeight - height) / 2
        },
        right: {
          left: left + window.scrollX + width,
          top: top + window.scrollY - (contentWrapperHeight - height) / 2
        }
      };
      contentWrapper.style.left = positionArr[this.position].left + "px";
      contentWrapper.style.top = positionArr[this.position].top + "px";
    },
    // 点击整个文档
    clickDocument(e) {
      // 单击document时，如果目标是popover,或者是popover内容，则return
      if (
        (this.$refs.popover && this.$refs.popover.contains(e.target)) ||
        this.$refs.contentWrapper.contains(e.target)
      ) {
        return;
      } else {
        // 取消监听器
        this.closePopover();
      }
    },
    // 展示popover
    displayPopover() {
      this.visible = true;
      // 保证元素挂载到dom上了。
      this.$nextTick(() => {
        this.popoverContentPosition();
        document.addEventListener("click", this.clickDocument);
      });
    },
    // 关闭popover
    closePopover() {
      this.visible = false;
      document.removeEventListener("click", this.clickDocument);
    },
    clickPopover() {
      if (this.visible) {
        this.closePopover();
      } else {
        this.displayPopover();
      }
    }
  }
};
</script>

<style lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  word-break: break-all;
  max-width: 20em;
  position: absolute;
  background: #fff;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    position: absolute;
    width: 0;
    height: 0;
  }
  // popover在顶部
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  // popover在底部
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  // popover在左边
  &.position-left {
    transform: translateX(calc(-100% - 10px));
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
      // 向上移动本身高度
      transform: translateY(-100%);
    }
  }
  // popover在右边
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: black;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
      // 向上移动本身高度
      transform: translateY(-100%);
    }
  }
}
</style>