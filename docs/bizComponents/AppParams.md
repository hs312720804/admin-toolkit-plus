# 第三方应用参数输入    
`c-app-params`  

## 示例  
<Demo>
  <AppParamsDemo />
</Demo>

## 代码  
```vue
<template>
    <el-form :model="form" label-width="140px">
        <c-app-params prop-prefix="appParams" v-model="form.appParams" />
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                appParams: {
                    packagename: undefined,
                    versioncode: undefined,
                    dowhat: undefined,
                    bywhat: undefined,
                    byvalue: undefined,
                    params: [],
                    exception: {}
                }
            }
        }
    }
}
</script>

```

## 参数  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |   
| value | Object | 与组件绑定的值，包含的属性见下方 | |  
| prop-prefix | String | 用于 element-ui 表单验证 | |  

value 包含下面属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| packagename | String | 包名 | | 
| versioncode | String | 版本号 |  | 
| dowhat | String | | | 
| bywhat | String | | | 
| byvalue | String | 启动参数 | | 
| params | Array | 扩展参数 | |  
| exception | Object | 例外 | |

扩展参数数组里每个元素包含属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| key | String | | |  
| value | String | | | 


<Comment />