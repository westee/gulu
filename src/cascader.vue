<template>
  <div class="cascader" ref="cascader">
    <div class="trigger" @click="toggle">
      <!-- <slot></slot> -->
      {{getResult || '&nbsp;'}}
    </div>
    <div class="popover" v-show="popoverVisible">
      <cascader-item
        :items="source"
        :popover-height="popoverHeight"
        :selected-arr="selectedArr"
        :load-data="loadData"
        @update:selectedArr="onSelectedArrChange"
      ></cascader-item>
    </div>
  </div>
</template>
<script>
import CascaderItem from "./cascader-item";
export default {
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: Number,
      default: 100
    },
    selectedArr: {
      type: Array,
      default: () => {
        return [];
      }
    },
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      // 是否弹出选择栏
      popoverVisible: false
    };
  },
  components: {
    cascaderItem: CascaderItem
  },
  methods: {
    onClickDocument(e) {
      let { cascader } = this.$refs;
      let { target } = e;
      if(target === cascader || cascader.contains(target)){
        return
      }
      this.close()
    },
    open() {
      this.popoverVisible = true;
      document.addEventListener("click", this.onClickDocument);
    },
    close() {
      this.popoverVisible = false;
    },
    toggle() {
      if (this.popoverVisible) {
        this.close();
      } else {
        this.open();
      }
    },
    // cascader-item组件发来的通知，由于cascader组件的selectedArr也是props值，
    // 因此他也不能更改，继续通知上一级。
    onSelectedArrChange(data) {
      /**
       * @todo
       * 感觉selectedArr名字取得不好，要改
       */
      this.$emit("update:selectedArr", data);
      // let selectedItem = data[0];
      let selectedItem = data[data.length - 1];
      // 寻找children数组中是否包含要查找的数据
      let simplest = (children, id) => {
        // console.log(children.filter(item => item.id === id))
        return children.filter(item => item.id === id)[0];
      };

      let complex = (children, id) => {
        let hasChildren = [];
        let noChildren = [];

        // 按有无后代将children数据分类
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        // 查找noCHildren中是否有目标项
        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          // noChildren中未查找到，则从hasChildren中查找。
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            // noChildren中仍没有找到，则从子级中继续查找。
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      // 回调函数
      let updateSource = result => {
        let deepcopy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(deepcopy, selectedItem.id);
        toUpdate.children = result;
        this.$emit("update:source", deepcopy);
      };
      if (this.loadData && !selectedItem.isLeaf) {
        this.loadData(selectedItem, updateSource);
      }
    }
  },
  computed: {
    getResult() {
      let result = this.selectedArr
        .map(item => {
          return item.name;
        })
        .join("/");
      return result;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "common.scss";
.cascader {
  display: inline-block;
  position: relative;
  .trigger {
    height: $height;
    border: 1px solid black;
    min-width: 150px;
    border-radius: $border-radius;
    border-color: $border-color;
    display: flex;
    align-items: center;
    padding: 0.05em 1em;
    font-size: $font-size;
  }
  .popover {
    display: flex;
    @extend .my-shadow;
    position: absolute;
    top: 100%;
  }
}
</style>
