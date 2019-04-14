---
title: Tab 标签
---
# 标签
<ClientOnly>
  <tab-demos>
  </tab-demos>
</ClientOnly>

```html
<g-tab selected="society">
  <g-tab-head>
    <g-tab-item name="society">社会</g-tab-item>
    <g-tab-item name="sports">运动</g-tab-item>
  </g-tab-head>
  <g-tab-body>
    <g-tab-panel name="society">社会资讯</g-tab-panel>
    <g-tab-panel name="sports">体育新闻</g-tab-panel>
  </g-tab-body>
</g-tab>
```

tab结构:

<pre>
<code>
+ tab
| 
|———head
|     |———item
|
|———body
|     |———panel
</code>
</pre>
