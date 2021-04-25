# 表格概率修改
`c-probability`
封装了表格概率修改的组件，使用的过程中，需要自定义表格的数据和概率输入框失焦的方法


## 示例

### 效果

<Demo>
  <probabilityDemo />
</Demo>

### 代码
``` vue
<template>
  <div class="probability">
    <div class="probability-count">
      <span>概率总数统计：</span>
      <el-input style="width: 200px;" v-model="totalProbability" :disabled="true">{{totalProbability}}</el-input>
    </div>
    <c-probability :formdata="formData"  @probability-blur="probabilityBlur"></c-probability>
  </div>
</template>

<script>
import BigJs from 'big.js'
export default {
  data: function () {
    return {
      formData: [{
        probability: 0.1,
        id: 1
      }, {
        probability: 0.2,
        id: 2
      }
      ]
    }
  },
  computed: {
    totalProbability () {
      let result = BigJs(0)
      const awards = this.formData
      if (awards.length > 0) {
        result = awards.reduce((res, item) => {
          return res.plus(item.probability)
        }, result)
      }
      return result.valueOf()
    }
  },
  methods: {
    checkIsNumber (num) {
      if (num === null || num === '') {
        this.$message({
          type: 'error',
          message: '该值不能为空'
        })
        return false
      } else if (num < 0) {
        this.$message({
          type: 'error',
          message: '该值不能小于0'
        })
        return false
      } else if (num >= 0) {
        return true
      } else {
        this.$message({
          type: 'error',
          message: '该数字不合法'
        })
        return false
      }
    },
    probabilityBlur: function (event, row) {
      this.newValue = event.currentTarget.innerText.trim()
      if (this.checkIsNumber(this.newValue)) {
        if (!/^(1|0|0\.\d{1,5})$/.test(this.newValue)) {
          this.$message({
            type: 'error',
            message: '概率只能是0与1之间，最多精确到5位小数'
          })
        } else {
          this.$set(row, 'probability', parseFloat(this.newValue))
        }
      } else {
        event.currentTarget.innerText = row.probability
        return false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .probability-count
        margin 20px
</style>
```

## 属性
| 名称 | 类型 | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
| formdata | [] |  json数组 | [{probability: 0.1,id: 1}, {probability: 0.2,id: 2}] |

## 方法
| 名称 | 参数  | 描述 | 例子 |
| ---- | ---- | ---- | ---- |
| probability-blur | event, row | 用于自定义选择概率输入框失去焦点的事件 |见上述例子 |

