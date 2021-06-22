<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-number :form-item-attr="formItemAttr" v-model="form.age" />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      formItemAttr: {
        label: "年龄"
      },
      form: {
        age: 22
      }
    }
  }

}
</script>
