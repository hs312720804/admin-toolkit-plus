<template>
  <el-form-item :label="label" :label-width="labelWidth" :prop="prop" :rules="rules">
    <template v-if="!isReadonly">
      <el-radio-group
        v-if="type === 'radio'"
        :value="value"
        @input="handleInputVal"
        @change="$emit('change', $event)"
        :disabled="disabled"
      >
        <el-radio
          v-for="(item, key) in options"
          :disabled="item.disabled"
          :key="key"
          :label="item.value"
        >{{ item.label }}</el-radio>
      </el-radio-group>

      <el-select
        v-else
        :value="value"
        ref="select"
        @input="handleInputVal"
        @change="$emit('change', $event)"
        :clearable="clearable"
        :disabled="disabled"
        :placeholder="placeholder || $t('cMessage.pleaseSelect')"
        :filterable="filterable"
        :allow-create="allowCreate"
      >
        <el-option
          v-for="(item, key) in options"
          :disabled="item.disabled"
          :key="key"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </template>

    <template v-else>{{ getLabel(value) }}</template>
    <slot></slot>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormEnum',
  mixins: [formItemMixin],
  data () {
    return {

    }
  },
  props: ['type', 'options', 'filterable', 'allowCreate', 'confirm', 'clearable'],
  methods: {
    getLabel (val) {
      const options = this.options || []
      const selected = options.find(({ value }) => value === val)
      if (selected) {
        return selected.label
      }
    },
    handleInputVal (val) {
      const confirm = this.confirm
      if (confirm) {
        let title
        let content
        if (typeof confirm === 'string') {
          title = this.$t('cMessage.tip')
          content = confirm
        } else {
          title = confirm.title
          content = confirm.content
        }
        this.$confirm(content, title).then(() => {
          this.$emit('input', val)
        }).catch(() => { })
      } else {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style>
</style>
