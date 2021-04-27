# 简单图片走马灯
`carousel`
基于element-ui Carousel封装的走马灯

## 示例
<Demo>
  <ContentCardDemo />
</Demo>

## 代码
```vue
<template>
  <c-carousel :carouselList = carousel />
</template>
<script>
export default {
  data () {
    return {
      carousel: [
        {
          img: '#',
          title: '哈哈'
        },
        {
          img: '#',
          title: '嘻嘻'
        },
        {
          img: '#',
          title: '呜呜'
        }
      ]
    }
  }
}
</script>

```

## 属性
| 名称 | 类型 | 描述 | 例子|
| ---- | ---- | ---- | ---- |
| carouselList | Array | { img: String, title: String } | ---- |

## slot
| 名称 | 描述 |
| ---- | ---- |
| title | 走马灯标题 |
