<template>
  <el-form-item v-bind="formItemAttr">
    <template v-if="!isReadonly">
      <el-checkbox-group
        v-bind="$attrs"
        v-if="type === 'checkbox'"
        :model-value="modelValue"
        @update:modelValue="handleInputVal"
        @change="$emit('change', $event)"
      >
        <el-checkbox
          v-for="(item, key) in options"
          :disabled="item.disabled"
          :key="key"
          :label="item.value"
          >{{ item.label }}</el-checkbox
        >
      </el-checkbox-group>
      <el-select
        v-else
        :model-value="modelValue"
        v-bind="$attrs"
        :multiple="true"
        @update:modelValue="handleInputVal"
        @change="$emit('change', $event)"
        @visible-change="$emit('visible-change', $event)"
        @clear="$emit('clear', $event)"
        @remove-tag="$emit('remove-tag', $event)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
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
<script lang="ts">
import { defineComponent, inject, PropType } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: 'CFormEnumList',
  props: {
    modelValue: {
      type: Array,
      default: () => ''
    },
    confirm: {
      type: [String, Object],
      default: () => ''
    },
    options: {
      type: Array as PropType<{ label: string; value: string }[]>,
      default: () => {
        return []
      }
    },
    type: {
      type: String,
      default: () => {
        return 'select'
      }
    },
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  emits: [
    'update:modelValue',
    'change',
    'visible-change',
    'remove-tag',
    'clear',
    'blur',
    'focus'
  ],
  setup (props, ctx) {
    const { t } = useI18n()
    const _$t = t
    const getLabel = (val: string) => {
      const options = props.options || []
      const selected = options.filter(({ value }) => {
        return val.indexOf(value) > -1
      })
      if (selected.length > 0) {
        return selected.map(({ label }) => label).join(', ')
      }
    }
    const handleInputVal = (val: string | number) => {
      const confirm = props.confirm
      if (confirm) {
        let title
        let content
        if (typeof confirm === 'string') {
          title = _$t('message.cMessage.tip')
          content = confirm
        } else {
          title = confirm.title
          content = confirm.content
        }
        ElMessageBox.confirm(content, title)
          .then(() => {
            ctx.emit('update:modelValue', val)
          })
          .catch(() => {
            return ''
          })
      } else {
        ctx.emit('update:modelValue', val)
      }
    }
    const isReadonly = inject('readonly')
    return {
      getLabel,
      handleInputVal,
      isReadonly
    }
  }
})
</script>
