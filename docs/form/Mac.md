# Mac数据类型
 `c-form-mac`  
 只能用来输入以a-f、A-F、0-9组成的12位MAC地址,可以用来输入一个MAC地址和多个，当type为textarea时，可以用来输入多个Mac地址，以英文逗号隔开，反之只能输入一个MAC地址

## 示例  

### 效果
<Demo>
  <MacDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <c-form label-width="120px" :model="form"  :readonly="isReadonly">
      <c-form-mac label="MAC" v-model="form.mac" prop="mac" type="textarea"/>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      form: {
        mac: ''
      },
      rules: {
        // 表单规则
        noEmpty: [
          { required: true, message: '不能为空', trigger: ['blur', 'change'] } ]
      }
    }
  }
}
</script>

```

## 属性  
| 名称 | 类型 | 描述 | 默认 |  例子 |  
| ---- | ---- | ---- | ---- | ---- |
| label | String | 控件 label |  | |  
| prop | String | 和element ui prop一样，为必填项 |  | |  
| label-width | String | el-form-item的label宽度，非必填项 |  | | 
| rules | Array | 和element ui 表单rules一样|  | | 
| type | String | 和element ui el-input type 同样意思，当type为textarea时，可以输入多个MAC，反之只能输入一个| text | | 
| clearable | String | 和element ui el-input clearable 同样意思|  | | 
| placeholder | String | 和element ui el-input placeholder 同样意思|  | | 
## 事件
| 名称 | 参数 | 描述 
| ---- | ---- | ---- 
| input |  | 和element ui el-input input事件一样
| change |  | 和element ui el-input change事件一样
<Comment />