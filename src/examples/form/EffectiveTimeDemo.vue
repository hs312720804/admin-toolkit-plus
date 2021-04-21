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
