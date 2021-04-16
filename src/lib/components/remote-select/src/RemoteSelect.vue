<template>
  <div>
    <Button type="primary" @click="handleSelectStart">
      {{ title }}
    </Button>
    <Dialog
      :title="title"
      :custom-class="customClass"
      :visible.sync="showDialog"
      :append-to-body="true"
      width="90vw"
    >
      <slot name="selected">
        <div v-if="showSelection" class="selected">
          <Tag type="info" class="selected__tip">{{$t('cMessage.selected')}}: </Tag>
          <Tag
            v-for="item in selected"
            closable
            :key="item.id"
            @close="handleRemoveSelected(item)"
          >
            {{item.label}}
          </Tag>
        </div>
      </slot>
      <slot></slot>
      <div slot="footer" class="dialog-footer">
        <Button v-if="showClearSelectionBtn" style="float:left" type="danger" @click="handleClearSelected">{{$t('cMessage.clearSelected')}}</Button>
        <Button @click="handleSelectCancel">{{$t('cButton.cancel')}}</Button>
        <Button type="primary" @click="handleSelectEnd">{{$t('cButton.ok')}}</Button>
      </div>
    </Dialog>
  </div>
</template>
<script>
import { Button, Tag, Dialog } from 'element-ui'
export default {
  name: 'CRemoteSelect',
  components: {
    Button,
    Dialog,
    Tag
  },
  props: {
    title: {
      type: String,
      default () {
        return this.$t('cPlaceholder.select')
      }
    },
    selected: {
      type: Array,
      default () {
        return []
      }
    },
    customClass: {

    },
    showSelection: {
      type: Boolean,
      default () {
        return true
      }
    },
    showClearSelectionBtn: {
      type: Boolean,
      default () {
        return true
      }
    }
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    handleSelectStart () {
      this.showDialog = true
      this.$emit('select-start')
    },
    handleSelectEnd () {
      this.showDialog = false
      this.$emit('select-end')
    },
    handleSelectCancel () {
      this.showDialog = false
      this.$emit('select-cancel')
    },
    handleRemoveSelected (item) {
      this.$emit('selection-remove', item)
    },
    handleClearSelected () {
      this.$emit('selection-clear')
    }
  }
}
</script>
<style lang="stylus" scoped>
.selected
  >>> .el-tag
    margin-left 10px
  .selected__tip
    border-color #fff
    background #fff
    color #000
    margin-left 0
    padding 0
</style>
