<template>
  <div>
    <ul>
      <li>
        <g-input value="默认"></g-input>
      </li>
      <li>
        <g-input value="禁用" disabled></g-input>
      </li>
      <li>
        <g-input value="只读" readonly></g-input>
      </li>
      <li>
        <g-input error="提示信息"></g-input>
      </li>
    </ul>
  </div>
</template>

<script>
import Input from "../../../src/input";
export default {
  components: {
    "g-input": Input
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.wrapper {
  margin: 10px 0;
}
</style>

