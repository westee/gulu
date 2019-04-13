---
title: Layout 默认布局
---

## 上中下
<ClientOnly>
  <layout-demos></layout-demos>
</ClientOnly>


```html
<g-header>header</g-header>
<g-content>content</g-content>
<g-footer>footer</g-footer>
```
## 上 中(左右) 下
<ClientOnly>
  <layout-sider></layout-sider>
</ClientOnly>

```html
<g-header>header</g-header>
  <g-layout>
    <g-sider>sider</g-sider>
    <g-content>content</g-content>
  </g-layout>
  <g-footer>footer</g-footer>
</g-layout>
```

## 左(sider)右
<ClientOnly>
  <layout-out-sider></layout-out-sider>
</ClientOnly>

```html
<g-layout>
  <g-sider>sider</g-sider>
  <g-layout>
    <g-header>header</g-header>
    <g-content>content</g-content>
    <g-footer>footer</g-footer>
  </g-layout>
</g-layout>
```
