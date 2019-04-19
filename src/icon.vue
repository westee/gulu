<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
import "./svg";
export default {
  name: "g-icon",
  props:{
    name:{
      type: String
    }
  }
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  /*vertical-align: -0.15em;*/
  fill: currentColor;
  margin-top: 0.15em;
  overflow: hidden;
}
</style>
