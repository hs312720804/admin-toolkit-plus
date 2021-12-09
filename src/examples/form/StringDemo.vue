<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-string @change="handleChange" :form-item-attr="formItemAttr" placeholder="请输入内容" v-model="form.name" />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: true,
      formItemAttr : {
        label: "姓名"
      },
      form: {
        name: '张三'
      }
    }
  },
  methods: {
    handleOK () {
      this.isReadonly = !this.isReadonly
      console.log('this.isReadonly ', this.isReadonly )
    },
    handleChange (value) {
    },
    onValidate () {
    }
  }
}
</script>
