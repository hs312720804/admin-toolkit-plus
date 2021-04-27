<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-string label="姓名" v-model="form.name" />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      form: {
        name: '张三'
      }
    }
  }
}
</script>
