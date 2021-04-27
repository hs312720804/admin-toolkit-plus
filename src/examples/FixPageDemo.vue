<template>
  <c-fix-page @go-back="$emit('go-back')" height="80vh">
   <div slot="actions">
     <el-button type="text"  size="mini" icon="el-icon-back" @click="$emit('go-back')">返回</el-button>
   </div>
   <div slot="title">
       标题
   </div>
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
    <div class="sub-foot" slot="footer">
        <el-button
          type="success"
          @click="saveForm('draft')"
        >保存草稿</el-button>
        <el-button
          type="primary"
          @click="saveForm()"
        >提交审核
        </el-button>
    </div>
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
