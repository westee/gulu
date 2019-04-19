<template>
  <div class="cascader-item" :style="{ height: popoverHeight + 'px' }">
    <!-- 左边 -->
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="selectedItem = item">
        {{ item.name }}
        <g-icon name="right"></g-icon>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right" v-if="getSubItem">
      <cascader-item :items="getSubItem" :popover-height="popoverHeight"></cascader-item>
    </div>
  </div>
</template>
<script>
import Icon from "./icon";
const cascaderItem = {
  name: "cascaderItem",
  props: {
    items: {
      type: Array
    },
    popoverHeight: {
      type: Number
    }
  },
  components: {
    "g-icon": Icon
  },
  data() {
    return {
      selectedItem: null
    };
  },
  computed: {
    //  获得下一级的数据
    getSubItem() {
      if (this.selectedItem && this.selectedItem.children) {
        return this.selectedItem.children;
      }
      return null;
    }
  }
};
export default cascaderItem;
</script>
<style lang="scss" scoped>
@import "common.scss";
.cascader-item {
  // border: 1px solid black;
  display: flex;
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .left {
    height: 100%;
    padding: 0.3em 0;
    .label {
      padding: 0.3em 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      .icon {
        transform: scale(0.6);
        margin-left: auto;
      }
    }
  }
}
</style>
