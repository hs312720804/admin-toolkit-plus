# 有效范围时间组件
 `c-form-effective-time`
 有效期范围表单组件，有效时间范围开始时间不能小于当前时间，时间范围是当天之前的日期不可选择

## 示例  

### 效果
<Demo>
  <EffectiveTimeDemo/>
</Demo>

### 代码  
```vue
<template>
  <div>
    <c-form label-width="120px" :model="form"  :readonly="isReadonly">
      <c-form-effective-time label="有效期" v-model="form.effectiveTime" prop="effectiveTime" :rules="rules.noEmpty"/>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      form: {
        effectiveTime: ''
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
| pickerOptions | Object对象 | 和datetimerange 组件的pickerOptions一样 | 默认是当前日期之前的日期不可选 | | 
| delayTime | Number | 有效期范围开始时间比当前时间延迟的分钟数，单位为分钟 |  | |  
| label | String | 控件 label |  | |  
| prop | String | 和element ui prop一样，为必填项 |  | |  
| label-width | String | el-form-item的label宽度，非必填项 |  | | 
| rules | Array | 和element ui 表单rules一样|  | | 
| clearable | String | 和element ui el-input clearable 同样意思|  | | 
| placeholder | String | 和element ui el-input placeholder 同样意思|  | | 
## 事件
| 名称 | 参数 | 描述 
| ---- | ---- | ---- 
| input |  | 和element ui el-input input事件一样
| change |  | 和element ui el-input change事件一样
<Comment />