<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-enum label="性别" type="radio" confirm="是否更改性别"  v-model="form.gender" :options="genderOptions" />
      <c-form-enum label="岗位" v-model="form.job" :options="jobOptions" />
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
      form: {
        gender: 'male',
        job: 'frontend'
      }
    }
  }

}
</script>
