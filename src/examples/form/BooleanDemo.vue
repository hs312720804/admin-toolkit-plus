<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-boolean type="switch" label="是否正式员工" v-model="form.isRegular" />
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
      isReadonly: false,
      form: {
        isRegular: 1,
        isIn: 0
      }
    }
  }

}
</script>
