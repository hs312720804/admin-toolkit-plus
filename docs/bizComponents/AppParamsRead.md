# 第三方应用参数显示    
`AppParamsRead`  

## 示例  
<Demo>
  <AppParamsReadDemo />
</Demo>

## 代码  
```vue
<template>
    <el-form label-width="140px">
        <AppParamsRead :value="appParams"  />
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            appParams: {
                packagename: 'test',
                versioncode: '1.2.0',
                dowhat: 'dowhat',
                bywhat: 'bywhat',
                byvalue: 'byvalue',
                params: [
                    {
                        key: 'key1',
                        value: 'value1'
                    },
                    {
                        key: 'key2',
                        value: 'value2'
                    }
                ]
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