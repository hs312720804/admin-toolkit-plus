<template>
  <div class="click-and-select-wrapper">
    <div @click="handleSelectStart">
      <slot>
        <Button>
          {{ title }}
        </Button>
      </slot>
    </div>
    <Dialog
      class="click-and-select-dialog"
      :custom-class="customClass"
      :show-close="showClose"
      :fullscreen="fullscreen"
      :visible.sync="showDialog"
      :append-to-body="true">
      <div slot="title">
        <slot name="title"> {{ title }}</slot>
      </div>
      <slot name="content" :is-show="showDialog">
      </slot>
    </Dialog>
  </div>
</template>
<script>
import { Button, Tag, Dialog } from 'element-ui'
export default {
  name: 'CSelectDialog',
  components: {
    Button,
    Dialog,
    Tag
  },
  props: {
    title: {
      type: String,
      default () {
        return this.$t('cMessage.selectText')
      }
    },
    fullscreen: {
      type: Boolean,
      default () {
        return true
      }
    },
    filter: Object,
    filterSchema: Object,
    pagination: Object,
    customClass: String,
    showClose: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      showDialog: false,
      showContent: false
    }
  },
  methods: {
    handleSelectStart () {
      this.showDialog = true
      this.$emit('select-start')
    },
    // handleSelectEnd () {
    //   this.showDialog = false
    //   this.$emit('select-end')
    // },
    handleSelectCancel () {
      this.showDialog = false
      // this.$emit('select-cancel')
    }
  },
  created () {
  }
}
</script>
<style lang="stylus" scoped>
.click-and-select-wrapper
  display inline-block
.click-and-select-dialog >>> .el-dialog
  display flex
  flex-direction column
.click-and-select-dialog >>> .el-dialog__header
  padding-top 10px
.click-and-select-dialog >>> .el-dialog__body
  padding 0 20px
  overflow hidden
  flex 1
</style>
