<template>
  <div class="popover" @click.stop="xxx">
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
    xxx() {
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let {
            top,
            left,
            width,
            height
          } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left+'px';
          this.$refs.contentWrapper.style.top = top+'px';

          document.addEventListener("click", add);
        }, 0);
      }

      let add = () => {
        this.visible = false;
        clear();
      };
      let clear = () => {
        document.removeEventListener("click", add);
      };
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