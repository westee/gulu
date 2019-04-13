<template>
  <div class="demo">
    <g-row gutter="10">
      <g-col :coloffset="{col:4}">
        <div class="demo-content">4</div>
      </g-col>
      <g-col :coloffset="{col:4}">
        <div class="demo-content">4</div>
      </g-col>
      <g-col :coloffset="{col:4}">
        <div class="demo-content">4</div>
      </g-col>
      <g-col :coloffset="{col:4}">
        <div class="demo-content">4</div>
      </g-col>
      <g-col :coloffset="{col:4}">
        <div class="demo-content">4</div>
      </g-col>
      <g-col :coloffset="{col:4}">
        <div class="demo-content">4</div>
      </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col :coloffset="{col:6}">
        <div class="demo-content">6</div>
      </g-col>
      <g-col :coloffset="{col:6}">
        <div class="demo-content">6</div>
      </g-col>
      <g-col :coloffset="{col:6}">
        <div class="demo-content">6</div>
      </g-col>
      <g-col :coloffset="{col:6}">
        <div class="demo-content">6</div>
      </g-col>
    </g-row>
  </div>
</template>
<script>
import Row from "../../../src/row";
import Col from "../../../src/column";
export default {
  components: {
    "g-row": Row,
    "g-col": Col
  }
};
</script>
<style lang='scss' >
* {
  box-sizing: border-box;
}
.demo {
  > .row {
    margin: 10px 0;
  }
  .col {
    .demo-content {
      min-height: 32px;
      background: #eee;
    }
  }
}
</style>