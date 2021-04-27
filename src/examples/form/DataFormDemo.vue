<template>
  <div>
    <div class="switch-readonly">
      读写模式切换
      <el-switch v-model="isReadonly" />
    </div>
    <c-form label-width="120px" ref="form" :readonly="isReadonly" :model="form" :rules="rules">
      <c-form-string label="姓名" prop="name" v-model="form.name" />
      <c-form-number label="年龄" v-model="form.age" />
      <c-form-enum
        label="性别"
        type="radio"
        confirm="是否更改性别"
        v-model="form.gender"
        :options="genderOptions"
      />
      <c-form-enum label="岗位" v-model="form.job" :options="jobOptions" />
      <c-form-enum-list type="checkbox" v-model="form.skill" label="语言技能" :options="langOptions" />
      <c-form-enum-list label="兴趣" v-model="form.hobbies" :options="hobbiesOptions" />
      <c-form-boolean type="switch" label="是否正式员工" v-model="form.isRegular" />
      <c-form-boolean label v-model="form.isIn">参加活动</c-form-boolean>
      <c-form-any label="是否已婚">
        <el-switch slot="edit" :value="!!form.isMarried" @input="form.isMarried = $event ? 1 : 0"></el-switch>
        <span slot="read">{{ form.isMarried ? '是' : '否' }}</span>
      </c-form-any>
      <el-form-item>
        <el-button type="primary" @click="saveForm">保存</el-button>
      </el-form-item>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
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
        isIn: 0,
        isMarried: 0
      },
      rules: {
        name: [{ required: true, message: '不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    saveForm () {
      this.$refs.form.$refs.form.validate(valid => {
        if (valid) {
          alert('验证通过')
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.switch-readonly
  margin 10px auto 30px auto
  text-align center
</style>
