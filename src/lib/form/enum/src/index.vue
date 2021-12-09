<template>
  <el-form-item v-bind="formItemAttr">
    <template v-if="!isReadonly">
      <el-radio-group
        v-if="type === 'radio'"
        v-bind="$attrs"
        :model-value="modelValue"
        @update:modelValue="handleInputVal"
        @change="$emit('change', $event)"
      >
        <el-radio
          v-for="(item, key) in options"
          :key="key"
          :disabled="item.disabled"
          :label="item.value"
        >
          {{ item.label }}
        </el-radio>
      </el-radio-group>
      <el-select
        v-else
        ref="select"
        v-bind="$attrs"
        :model-value="modelValue"
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
          :key="key"
          :disabled="item.disabled"
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
import { useI18n } from 'vue-i18n'
import { ElMessageBox } from 'element-plus'
export default defineComponent({
  name: 'CFormEnum',
  props: {
    modelValue: {
      type: [String, Number],
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
      interface AA {
        label: string
        value: string
      }
      const selected = options.filter(
        (e): Boolean => {
          return val.indexOf(e.value) > -1
        }
      )
      if (selected.length > 0) {
        return selected
          .map(({ label }) => {
            return label
          })
          .join(', ')
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
