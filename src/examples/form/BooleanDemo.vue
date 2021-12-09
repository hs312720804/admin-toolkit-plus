<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-boolean
        type="switch"
        :form-item-attr="formItemAttr"
        v-model="form.isRegular"
      />
      <c-form-boolean label="" v-model="form.isIn">
        参加活动
      </c-form-boolean>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formItemAttr: {
        label: '是否正式员工'
      },
      isReadonly: false,
      form: {
        isRegular: 1,
        isIn: 1
      }
    }
  }
}
</script>
