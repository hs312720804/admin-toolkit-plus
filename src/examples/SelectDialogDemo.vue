<template>
  <div>
    <section>
    <h2>默认按钮</h2>
    <c-select-dialog
      title="选择数据2"
      @select-start="handleSelectStart"
      ref="selectDialog">
      <div slot="content">
        <base-selector-demo
        @select-end="handleSelectEnd"
        @select-cancel="$refs.selectDialog.handleSelectCancel()"
        ></base-selector-demo>
      </div>
    </c-select-dialog>
    </section>
    <section>
      <h2>自定义点击元素</h2>
      <c-select-dialog
        title="选择海报"
        @select-start="handleSelectStart"
        >
        <el-button type="primary">请选择</el-button>
        <div slot="title" style="color: red">
          自定义标题
        </div>
        <div slot="content" slot-scope="{isShow}">
          <template v-show="isShow">
            通过content slot 插入数据列表, 可以通过 isShow 来控制内容的渲染
          </template>
        </div>
      </c-select-dialog>
    </section>
  </div>
</template>

<script>
import BaseSelectorDemo from './BaseSelectorDemo.vue'
export default {
  componets: {
    BaseSelectorDemo
  },
  methods: {
    handleSelectStart () {
    },
    handleSelectEnd () {

    }
  }
}
</script>

<style>

</style>
