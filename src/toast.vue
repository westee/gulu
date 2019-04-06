<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted(){
  }
}
</script>

<style lang="scss">
  $toast-height: 40px;
  $font-size: 14px;
  $toast-bg: rgba(0,0,0,0.75);
  .toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: $toast-bg;
    color: #fff;
    height: $toast-height;
    line-height: $toast-height;
    padding: 0 16px;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
  }
</style>
