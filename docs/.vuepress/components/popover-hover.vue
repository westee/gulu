<template>
  <div>
    <g-popover position="bottom" trigger-type="mouseenter">
        <template v-slot:content="{closeFn}">
            <div>我是内容1
                <g-button @click="closeFn">关闭</g-button>
            </div>
        </template>
        <g-button>按钮-bottom</g-button>
    </g-popover>
    <g-popover position="top"  trigger-type="mouseenter">
        <template v-slot:content>
            <div>我是内容1
            </div>
        </template>
        <g-button>按钮-top</g-button>
    </g-popover>
    <g-popover position="left"  trigger-type="mouseenter">
        <template v-slot:content>
            <div>我是内容1
            </div>
        </template>
        <g-button>按钮-left</g-button>
    </g-popover>
    <g-popover position="right"  trigger-type="mouseenter">
        <template v-slot:content>
            <div>我是内容1
            </div>
        </template>
        <g-button>按钮-right</g-button>
    </g-popover>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  components:{
    'g-popover': Popover,
    'g-button': Button  
  }
};
</script>
<style lang='scss' scoped>
</style>