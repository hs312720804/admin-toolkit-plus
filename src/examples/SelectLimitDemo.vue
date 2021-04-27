<template>
  <div>
    <c-select-limit
      :options="options"
      v-model="demo"
      :filterable="true"
      :multiple="true"
      :allow-create="true"
      :clearable="true"
      :limits="4"
      @inputChange="inputChange"
      @change="handleChange"
    >
    </c-select-limit>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [
        { value: 0, label: '天天' },
        { value: 1, label: '张宏' },
        { value: 2, label: '李四' },
        { value: 3, label: '张三' }
      ],
      demo: []
    }
  },
  methods: {
    inputChange (val) {
      console.log('当前输入值：', val)
    },
    handleChange () {
      console.log('当前demo值为：', this.demo)
    }
  }
}
</script>
<style lang="stylus" scoped></style>
