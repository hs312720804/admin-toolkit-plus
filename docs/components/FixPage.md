# 头尾固定

`c-fix-page`
新增编辑页面当内容超过可视窗口时，希望头尾固定，中间内容滚动
备注：大部分情况下该组件的直接父组件需要为相对定位，并且高度为 100vh，特殊情况特殊处理

## 示例

### 效果

<Demo>
  <FixPageDemo/>
</Demo>

### 代码

```vue
<template>
  <c-fix-page @go-back="$emit('go-back')" height="100vh">
    <template v-slot:actions>
      <div>
        <el-button
          type="text"
          size="mini"
          icon="el-icon-back"
          @click="$emit('go-back')"
          >返回</el-button
        >
      </div>
    </template>
    <template v-slot:title>
      <div>
        标题
      </div>
    </template>
    <template v-slot:default>
      <div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="sub-foot">
        <el-button type="success">保存草稿</el-button>
        <el-button type="primary">提交审核 </el-button>
      </div>
    </template>
  </c-fix-page>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
```

## 属性

| 名称   | 类型   | 描述                     | 例子       |
| ------ | ------ | ------------------------ | ---------- |
| height | String | 内容区域高度，默认 100vh | 见上面例子 |

## slot

| 名称    | 描述                |
| ------- | ------------------- |
| default | main 内容           |
| title   | header 部分         |
| actions | header 右侧动作按钮 |
| footer  | footer 部分         |
