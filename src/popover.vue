<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
      setTimeout(() => {
        document.addEventListener("click", add);
      }, 0);
      let add = () => {
        this.visible = false;
        clear()
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
  > .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>