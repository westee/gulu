<template>
  <div>
    <g-cascader
      :source="sourceData"
      :selectedArr.sync="selectedArr"
      @update:selectedArr="xxx"
      :load-data="loadData"
    ></g-cascader>
  </div>
</template>
<script>
import Button from "./button";
import Cascader from "./cascader";
import db from "./district.js";
function ajax(id = 0) {
  return new Promise(function(resolve, reject) {
    let result = db.filter(item => {
      return item.child_id === id;
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
    loadData({id},updateSource) {
      ajax(id).then(result => {
        updateSource(result)
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
        // console.log(0)
        // console.log(lastSelected)
        // lastSelected.children = resolve;
        // console.log(1)
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
