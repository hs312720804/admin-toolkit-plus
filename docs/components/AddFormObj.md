# 动态添加
`c-add-form-obj`
一次性可以添加多个对象

## 示例
### 效果

<Demo>
  <AddFormObjDemo/>
</Demo>

### 代码
```vue
<template>
<c-add-form-obj :formList="form.formList" :classTypeOption="classTypeOption" :serviceOptions="serviceOptions" :inputType="inputType"></c-add-form-obj>
</template>
<script>
export default {
  data () {
    return {
        classTypeOption: [
        {
          value: 'startTrackList',
          label: '起播监测'
        },
        {
          value: 'clickTrackList',
          label: '点击监测'
        },
        {
          value: 'middleTrackList',
          label: '中点监测'
        },
        {
          value: 'endTrackList',
          label: '结束监测'
        }
      ],
      serviceOptions: [{ value: 'miaozhen', label: '秒针监测' }, { value: 'guoshuang', label: '国双监测' }],
      inputType: 'textArea',
      form: {
        formList:[
          {
            moreMediaList:[
              {
                type: 'baoguang',
                value: [
                  {
                    code: '',
                    serviceProvider: '',
                  }
                ]
              }
            ]
          }
        ]
      }	
    }
  }
}
</script>


```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| formList | Array | 传过去的对象 |见上面例子 |
| classTypeOption | Array | 首个选择框数据 |见上面例子 |
| serviceOptions | Array | 第二个选择框数据 |见上面例子 |
| inputType | String | 输入框类型 |见上面例子 |
<Comment />