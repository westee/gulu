<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "g-button-group",
  mounted() {
    for (let node of this.$el.children) {
      if (node.nodeName !== "BUTTON") {
        console.error("老兄,g-button-group的子元素应该全是button");
      }
    }
  }
};
</script>

<style lang="scss">
$font-size: 14px;
$button-height: 32px;
$border-radius: 4px;
$border-color: #999;
$button-bg: #fff;
$border-cover-hover: #666;
$button-active-bg: #eee;
.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
    }
  }
}
</style>
