<template>
  <div class="cascader-item" :style="{ height: popoverHeight + 'px' }">
    <!-- 左边 -->
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
        {{ item.name }}
        <div class="icons">
          <template v-if="item.name === loadItem.name">
            <g-icon class="loading" name="loading"></g-icon>
          </template>
          <template v-else>
            <g-icon v-if="listArrowVisible(item)" name="right"></g-icon>
          </template>
        </div>
      </div>
    </div>
    <!-- 右边 -->
    <div class="right" v-if="getSubItem">
      <cascader-item
        :items="getSubItem"
        :popover-height="popoverHeight"
        :selected-level="selectedLevel+1"
        :selected-arr="selectedArr"
        :load-data="loadData"
        :load-item="loadItem"
        @update:selectedArr="onChangeSelected"
      ></cascader-item>
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
    },
    // 选中的每一级的数据
    selectedArr: {
      type: Array,
      default: () => []
    },
    selectedLevel: {
      type: Number,
      default: 0
    },
    loadData: {
      type: Function
    },
    loadItem: {
      type: Object
    }
  },
  components: {
    "g-icon": Icon
  },
  computed: {
    //  获得下一级的数据
    getSubItem() {
      if (this.selectedArr[this.selectedLevel]) {
        let selected = this.items.filter(
          item => item.name === this.selectedArr[this.selectedLevel].name
        );
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children;
        }
      }
    }
  },
  methods: {
    onClickLabel(item) {
      // 深拷贝selectedArr
      let deepCopy = JSON.parse(JSON.stringify(this.selectedArr));
      deepCopy[this.selectedLevel] = item;
      // 点击当前选项后把这一项之后的内容全部清除，目的是点击前面
      deepCopy.splice(this.selectedLevel + 1);
      this.$emit("update:selectedArr", deepCopy);
    },
    onChangeSelected(newData) {
      this.$emit("update:selectedArr", newData);
    },
    listArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children;
    }
  }
};
export default cascaderItem;
</script>
<style lang="scss" scoped>
@import "common.scss";
.cascader-item {
  display: flex;
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow-y: auto;
    .label {
      padding: 0.3em 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      cursor: pointer;
      .icons .loading {
        animation: spin 2s infinite linear;
      }
      .icon {
        transform: scale(0.6);
        margin-left: auto;
      }
    }
  }
}
</style>
