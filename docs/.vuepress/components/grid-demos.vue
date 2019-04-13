<template>
  <div class="demo">
    <g-row>
      <g-col :coloffset="{col:4,offset:1}"></g-col>
      <g-col :coloffset="{col:14,offset:2}"></g-col>
      <g-col :coloffset="{col:3}"></g-col>
    </g-row>
    <g-row>
      <g-col :coloffset="{col:3,offset:1}"></g-col>
      <g-col :coloffset="{col:3,offset:1}"></g-col>
      <g-col :coloffset="{col:3,offset:1}"></g-col>
      <g-col :coloffset="{col:3,offset:1}"></g-col>
      <g-col :coloffset="{col:4,offset:1}"></g-col>
      <g-col :coloffset="{col:3}"></g-col>
    </g-row>
    <g-row>
      <g-col :coloffset="{col:3}"></g-col>
      <g-col :coloffset="{col:3}"></g-col>
      <g-col :coloffset="{col:3,offset:3}"></g-col>
      <g-col :coloffset="{col:3}"></g-col>
      <g-col :coloffset="{col:3}"></g-col>
      <g-col :coloffset="{col:3,offset:3}"></g-col>
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
<style lang='scss' scoped>
.demo {
  > .row {
    margin: 10px 0;
  }
  .col {
    min-height: 32px;
    background: #eee;
  }
}
</style>