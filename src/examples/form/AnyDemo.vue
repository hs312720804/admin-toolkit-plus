<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-any label="是否已婚">
        <el-switch slot="edit" :value="!!form.isMarried" @input="form.isMarried = $event ? 1 : 0"></el-switch>
        <span slot="read">{{ form.isMarried ? '是' : '否' }} </span>
      </c-form-any>
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      form: {
        isMarried: 0
      }
    }
  }
}
</script>
