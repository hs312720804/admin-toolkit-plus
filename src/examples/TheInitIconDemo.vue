<template>
  <div>
    <div v-show="isShowMainPage">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="选择图标">
          <el-input v-model="iconName" placeholder="选择图标"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="selectIcon">选择图标</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="!isShowMainPage">
      <c-icon-select
        @get-icon="getIcon"
        :title="title"
        :go-back-icon="'el-icon-cc-arrowleft'"
        :isUseInitialIcon="true"
        @go-back="goBack"
      ></c-icon-select>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowMainPage: true,
      iconName: '',
      title: '选择图标'
    }
  },
  methods: {
    selectIcon () {
      this.isShowMainPage = false
    },
    /**
     * 得到icon
     */
    getIcon (iconName, name) {
      this.iconName = iconName
      this.isShowMainPage = true
    },
    /**
     * 返回
     */
    goBack () {
      this.isShowMainPage = true
    }
  }
}
</script>
