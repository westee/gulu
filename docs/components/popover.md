---
title: Popover 弹出框
---
# 弹出框

## 点击弹出
<br>
<ClientOnly>
  <popover-demos></popover-demos>
</ClientOnly>

```html
<g-popover position="bottom">
    <template v-slot:content="{closeFn}">
        <div>我是内容1
            <g-button @click="closeFn">关闭</g-button>
        </div>
    </template>
    <g-button>按钮-bottom</g-button>
</g-popover>
<g-popover position="top">
    <template v-slot:content>
        <div>我是内容1
        </div>
    </template>
    <g-button>按钮-top</g-button>
</g-popover>
```
> position 可接受`top`、`bottom`、`left`、`right`四个方向。

## hover弹出
<br>
<ClientOnly>
  <popover-hover></popover-hover>
</ClientOnly>

```html
<g-popover position="bottom" trigger-type="mouseenter">
    <template v-slot:content="{closeFn}">
        <div>我是内容1
            <g-button @click="closeFn">关闭</g-button>
        </div>
    </template>
    <g-button>按钮-bottom</g-button>
</g-popover>
<g-popover position="top"  trigger-type="mouseenter">
    ...
</g-popover>
```

