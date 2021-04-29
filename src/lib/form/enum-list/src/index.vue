<template>
  <el-form-item class="textAlignLeft" :label="label" :prop="prop" :label-width="labelWidth" :rules="rules">
    <template v-if="!isReadonly">
      <el-checkbox-group
        v-if="type === 'checkbox'"
        :modelValue="modelValue"
        @update:modelValue="handleInputVal"
        @change="$emit('change', $event)"
        :disabled="disabled"
      >
        <el-checkbox
          v-for="(item, key) in options"
          :disabled="item.disabled"
          :key="key"
          :label="item.value"
        >{{ item.label }}</el-checkbox>
      </el-checkbox-group>

      <el-select
        v-else
        :modelValue="modelValue"
        :multiple="true"
        @update:modelValue="handleInputVal"
        @change="$emit('change', $event)"
        :disabled="disabled"
        :placeholder="placeholder || $t('message.cMessage.pleaseSelect')"
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

    <template v-else>{{ getLabel(modelValue) }}</template>
    <slot></slot>
  </el-form-item>
</template>

<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormEnumList',
  mixins: [formItemMixin],
  data () {
    return {

    }
  },
  props: ['type', 'options', 'filterable', 'allowCreate', 'confirm'],
  methods: {
    getLabel (val) {
      const options = this.options || []
      const selected = options.filter(({ value }) => val.indexOf(value) > -1)
      if (selected.length > 0) {
        return selected.map(({ label }) => label).join(', ')
      }
    },
    handleInputVal (val) {
      const confirm = this.confirm
      if (confirm) {
        let title
        let content
        if (typeof confirm === 'string') {
          title = this.$t('message.cMessage.tip')
          content = confirm
        } else {
          title = confirm.title
          content = confirm.content
        }
        this.$confirm(content, title).then(() => {
          this.$emit('update:modelValue', val)
        }).catch(() => { })
      } else {
        this.$emit('update:modelValue', val)
      }
    }
  }
}
</script>

<style>
</style>
