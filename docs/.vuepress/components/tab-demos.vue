<template>
  <div>
    <g-tab :selected="selectedName">
      <g-tab-head>
        <g-tab-item name="society">社会</g-tab-item>
        <g-tab-item name="sports">运动</g-tab-item>
      </g-tab-head>
      <g-tab-body>
        <g-tab-panel name="society">社会资讯</g-tab-panel>
        <g-tab-panel name="sports">体育新闻</g-tab-panel>
      </g-tab-body>
    </g-tab>
  </div>
</template>
<script>
import Tab from "../../../src/tabs";
import TabHead from "../../../src/tabs-head";
import TabBody from "../../../src/tabs-body";
import TabItem from "../../../src/tabs-item";
import TabPanel from "../../../src/tabs-panel";
export default {
  data() {
    return {
      selectedName: "society"
    }
  },
  components: {
    "g-tab": Tab,
    "g-tab-head": TabHead,
    "g-tab-body": TabBody,
    "g-tab-item": TabItem,
    "g-tab-panel": TabPanel
  }
};
</script>
<style lang='scss' scoped>
</style>