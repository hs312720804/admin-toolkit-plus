<!---add by wanghaihua 2018-10-31 多行单行文本都可以-->
<template>
 <el-popover
    placement="top-start"
    title=""
    trigger="hover"
    :content="content">
    <div class="ellipsis" slot="reference" :style="style">
      {{ content }}
    </div>
  </el-popover>

</template>
<script>
export default {
  name: 'CEllipsis',
  props: ['content', 'width', 'height'],
  computed: {
    style () {
      const style = {}
      const { width, height } = this
      if (width !== undefined) {
        style.width = width + 'px'
      }
      if (height !== undefined) {
        style.height = height + 'px'
      }
      return style
    }
  }
}
</script>
<style lang="stylus"  scoped>
.ellipsis
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
</style>
