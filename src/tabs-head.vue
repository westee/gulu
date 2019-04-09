<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="action-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "g-tabs-head",
  inject: ["eventBus"],
  created() {}
};
</script>

<style lang="scss">
$tab-height: 40px;
.tabs-head {
  display: flex;
  min-height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  .action-wrapper{
    margin-left: auto;
  }
}
</style>