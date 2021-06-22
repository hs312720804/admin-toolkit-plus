<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-enum :form-item-attr="formItemAttr" type="radio" confirm="是否更改性别"  v-model="form.gender" :options="genderOptions" />
      <c-form-enum :form-item-attr="formItemAttr1" v-model="form.job" :options="jobOptions" />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
       formItemAttr: {
        label: '性别'
      },
       formItemAttr1: {
        label: '岗位'
      },
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
