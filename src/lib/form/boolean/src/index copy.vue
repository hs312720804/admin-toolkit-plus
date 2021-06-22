<template>
  <el-form-item class="textAlignLeft" :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <template v-if="!isReadonly">
      <el-switch
        v-if="type === 'switch'"
        :modelValue="getBoolVal(modelValue)"
        @update:modelValue="handleInputVal"
        @change="handleChange"
        :disabled="disabled"
      ></el-switch>

      <el-checkbox
        v-else
        :modelValue="getBoolVal(modelValue)"
        @update:modelValue="handleInputVal"
        @change="handleChange"
        :disabled="disabled"
      >
        <slot></slot>
      </el-checkbox>
    </template>

    <template v-else>
      <span v-if="type === 'switch'">{{ getBoolVal(modelValue) ? $t('message.cMessage.yes') : $t('message.cMessage.no')  }}</span>
      <el-checkbox v-else :disabled="true" :modelValue="getBoolVal(modelValue)"></el-checkbox>
      <slot></slot>
    </template>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormBoolean',
  mixins: [formItemMixin],
  data () {
    return {

    }
  },
  props: {
    type: String,
    trueVal: {
      default () {
        return true
      }
    },
    faseVal: {
      default () {
        return false
      }
    }
  },
  methods: {
    handleInputVal (val) {
      this.$emit('update:modelValue', this.parseVal(val))
    },
    handleChange (val) {
      this.$emit('change', this.parseVal(val))
    },
    parseVal (val) {
      return val ? this.trueVal : this.faseVal
    },
    getBoolVal (val) {
      return !!val
    }
  }
}
</script>

<style>
</style>
