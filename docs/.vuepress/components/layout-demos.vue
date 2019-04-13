<template>
  <div>
    <g-layout>
      <g-header>header</g-header>
      <g-content>content</g-content>
      <g-footer>footer</g-footer>
    </g-layout>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Sider from "../../../src/sider";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
import Header from "../../../src/header";
export default {
  components: {
    "g-layout": Layout,
    "g-sider": Sider,
    "g-content": Content,
    "g-footer": Footer,
    "g-header": Header
  }
};
</script>
<style lang='scss' scoped>
.layout {
  height:40vh;
  .header {
    background: #eee;
  }
  .content {
    background: #ccc;
    width: 100%;
    box-sizing: border-box;
  }
  .footer {
    background: #ddd;
  }
}
</style>