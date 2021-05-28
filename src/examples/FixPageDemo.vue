<template>
  <c-fix-page @go-back="$emit('go-back')" height="100vh">
    <template v-slot:actions>
      <div >
      <el-button type="text"  size="mini" icon="el-icon-back" @click="$emit('go-back')">返回</el-button>
    </div>
    </template>
    <template v-slot:title>
    <div>
        标题
    </div>
    </template>
     <template v-slot:default>
      <div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
        <div>测试</div>
      </div>
    </template>
     <template v-slot:footer>
      <div class="sub-foot">
          <el-button
            type="success"
          >保存草稿</el-button>
          <el-button
            type="primary"
          >提交审核
          </el-button>
      </div>
     </template>
  </c-fix-page>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
