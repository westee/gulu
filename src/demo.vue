<template>
  <div>
    <g-cascader :source.sync="sourceData" :selectedArr.sync="selectedArr" :load-data="loadData"></g-cascader>
  </div>
</template>
<script>
import Button from "./button";
import Cascader from "./cascader";
import db from "./district.js";
function ajax(id = 0) {
  return new Promise(function(resolve, reject) {
    let result = db.filter(item => item.parent_id == id);
    result.forEach(node => {
      // 子元素的parent_id 存在于当前渲染项中，说明当前项有子选项。即不是叶子，叶子无下一级元素。
      if (db.filter(item => item.parent_id === node.id).length > 0) {
        node.isLeaf = false;
      } else {
        node.isLeaf = true;
      }
    });
    resolve(result);
  });
}
export default {
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      sourceData: [], // 源数据
      height: 100,
      selectedArr: []
    };
  },
  methods: {
    loadData({ id }, updateSource) {
      ajax(id).then(result => {
        updateSource(result);
      });
    },
    /**
     * data是选中的下一集数据
     */
    xxx(data) {
      let id = data[0].id;
      ajax(id).then(resolve => {
        let lastSelected = this.sourceData.filter(item => item.id === id)[0];
        this.$set(lastSelected, "children", resolve);
        // lastSelected.children = resolve;
      });
    }
  },
  created() {
    ajax(0).then(resolve => {
      this.sourceData = resolve;
    });
  }
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-cover-hover: #666;
}
</style>
