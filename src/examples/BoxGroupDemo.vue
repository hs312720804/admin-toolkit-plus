<template>
  <c-box-group :option="option" :value="select"  @input="handleInput" selectType="multiple"/>
</template>
<script>
export default {
  data () {
    return {
      select: 1,
      option: [
        {
          label: '图片',
          value: 1
        },
        {
          label: '视频',
          value: 2
        },
        {
          label: '网页',
          value: 3
        }
      ]
    }
  },
  methods: {
    handleInput (val) {
      this.$confirm('是否修改素材类型?', {
        type: 'warning'
      }).then(() => {
        this.select  = val
      }).catch(() => {})
    }
  }
}
</script>