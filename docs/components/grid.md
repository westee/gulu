---
title: Grid 网格
---
# 网格布局

## Column

### col && offset
<ClientOnly>
  <grid-demos></grid-demos>
</ClientOnly>

#### col和offset的选项
| Options        | 对应宽度           
| -------------  |:-------------:| 
| phone          | <=576px       | 
| pad            | >=577px       | 
| narrowPc       | >=769px       | 
| pc             | >=993px       |
| bigPc stripes  | >+1201px      | 

```html
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
  <g-col :coloffset="{col:3}"></g-col>
  <g-col :coloffset="{col:3}"></g-col>
  <g-col :coloffset="{col:3}"></g-col>
  <g-col :coloffset="{col:3}"></g-col>
</g-row>
```
## Row
### gutter
<ClientOnly>
  <grid-gutter></grid-gutter>
</ClientOnly>

```html
<g-row gutter="10">
  <g-col :coloffset="{col:4}">
    <div class="demo-content">4</div>
  </g-col>
  <g-col :coloffset="{col:4}">
    <div class="demo-content">4</div>
  </g-col>
  <g-col :coloffset="{col:4}">
    <div class="demo-content">4</div>
  </g-col>
  <g-col :coloffset="{col:4}">
    <div class="demo-content">4</div>
  </g-col>
  <g-col :coloffset="{col:4}">
    <div class="demo-content">4</div>
  </g-col>
  <g-col :coloffset="{col:4}">
    <div class="demo-content">4</div>
  </g-col>
</g-row>
<g-row gutter="20">
  ...
</g-row>
```
> 注意gutter设置的是像素值。

### align
如果一行内有空格，可以设置左对齐，右对齐，居中。
```
<g-row align="center">
  ...
</g-row>
```
