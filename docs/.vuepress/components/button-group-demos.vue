<template>
  <div>
    <g-button-group>
      <g-button icon-position='left' icon='left'>按钮</g-button>
      <g-button>按钮</g-button>
      <g-button icon-position='right' icon='right'>按钮</g-button>
    </g-button-group>
  </div>
</template>

<script>
import ButtonGroup from "../../../src/button-group";
import Button from "../../../src/button";
export default {
  components: {
    "g-button-group": ButtonGroup,
    "g-button": Button
  }
};
</script>