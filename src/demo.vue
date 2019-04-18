<template>
  <div>
    <g-button>hi</g-button>
    <g-cascader :source="districtData"></g-cascader>
  </div>
</template>
<script>
import Button from "./button";
import Cascader from "./cascader";
export default {
  components: {
    "g-button": Button,
    "g-cascader": Cascader
  },
  data() {
    return {
      districtData: [
        {
          name: "山东",
          children: [
            {
              name: "济南",
              children: [
                {
                  name: "历城区"
                },
                {
                  name: "历下区"
                },
                {
                  name: "市中区"
                }
              ]
            },
            {
              name: "青岛",
              children: [
                {
                  name: "黄岛区"
                },
                {
                  name: "胶州区"
                },
                {
                  name: "平度市"
                }
              ]
            }
          ]
        },
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                {
                  name: "上城区"
                },
                {
                  name: "下城区"
                },
                {
                  name: "江干"
                }
              ]
            },
            {
              name: "嘉兴",
              children: [
                {
                  name: "南湖区"
                },
                {
                  name: "秀洲区"
                },
                {
                  name: "海宁县"
                }
              ]
            }
          ]
        }
      ],
      height: 100
    };
  }
};
</script>
<style lang='scss' scoped>
</style>