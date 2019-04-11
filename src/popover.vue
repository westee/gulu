<template>
  <div class="popover" ref="popover" @click="clickPopover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    // 根据触发器设置popover的位置
    popoverContentPosition() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        top,
        left,
        width,
        height
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    // 点击整个文档
    clickDocument(e) {
      // 单击document时，如果目标是popover,或者是popover内容，则return
      if((this.$refs.popover && this.$refs.popover.contains(e.target)) || this.$refs.contentWrapper.contains(e.target)){
        return 
      } else {
        // 取消监听器
        this.closePopover()
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
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>