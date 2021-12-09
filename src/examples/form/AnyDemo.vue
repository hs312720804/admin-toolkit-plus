<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-any :form-item-attr="formItemAttr">
        <template v-slot:edit>
          <el-switch  :value="!!form.isMarried" @input="form.isMarried = $event ? 1 : 0"></el-switch>
        </template>
        <template v-slot:read>
          <span>{{ form.isMarried ? '是' : '否' }} </span>
        </template>
      </c-form-any>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      formItemAttr: {
        label: '是否已婚'
      },
      form: {
        isMarried: 0
      }
    }
  }
}
</script>
