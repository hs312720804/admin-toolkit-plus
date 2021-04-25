# 表单  
`c-form`
数据表单根组件，所有数据表单组件应放本组件里面  

## 示例  

### 效果
<Demo>
  <DataFormDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <div class="switch-readonly">读写模式切换 <el-switch v-model="isReadonly" /></div>
    <c-form label-width="120px" :readonly="isReadonly"> 
      <c-form-string label="姓名" v-model="form.name" />
      <c-form-number label="年龄" v-model="form.age" />
      <c-form-enum label="性别" type="radio" confirm="是否更改性别"  v-model="form.gender" :options="genderOptions" />
      <c-form-enum label="岗位" v-model="form.job" :options="jobOptions" />
      <c-form-enum-list type="checkbox" v-model="form.skill" label="语言技能" :options="langOptions" />
      <c-form-enum-list label="兴趣" v-model="form.hobbies" :options="hobbiesOptions" />
      <c-form-boolean type="switch" label="是否正式员工" v-model="form.isRegular" />
      <c-form-boolean label="" v-model="form.isIn">
        参加活动
      </c-form-boolean>
    </c-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReadonly: false,
      genderOptions: [
        {
          label: '男',
          value: 'male'
        },
        {
          label: '女',
          value: 'female'
        },
        {
          label: '保密',
          value: 'unknown',
          disabled: true
        }
      ],
      langOptions: [
        {
          label: 'javascript',
          value: 'javascript'
        },
        {
          label: 'java',
          value: 'java'
        },
        {
          label: 'haskell',
          value: 'haskell',
          disabled: true
        }
      ],
      jobOptions: [
        {
          label: '前端工程师',
          value: 'frontend'
        },
        {
          label: '后端工程师',
          value: 'backend'
        }
      ],
      hobbiesOptions: [
        {
          label: '足球',
          value: 'football'
        },
        {
          label: '音乐',
          value: 'music'
        },
        {
          label: '网球',
          value: 'tennis'
        }
      ],
      form: {
        name: '张三',
        age: 22,
        gender: 'male',
        job: 'frontend',
        skill: [],
        hobbies: ['music'],
        isRegular: 1,
        isIn: 0

      }
    }
  }

}
</script>

<style lang="stylus" scoped>
.switch-readonly
  margin 10px auto 30px auto
  text-align center
</style>
```


## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| readonly | Boolean | 是否只读 | 见上面例子 |

<Comment />
