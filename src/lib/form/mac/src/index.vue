<template>
  <el-form-item v-bind="ElFormItemAttr">
    <el-input
      v-if="!isReadonly"
      :model-value="modelValue"
      v-bind="$attrs"
      @update:modelValue="$emit('update:modelValue', $event)"
      @change="$emit('change', $event)"
    />
    <template v-else>{{ modelValue }}</template>
  </el-form-item>
</template>
<script lang="ts">
import { defineComponent, inject } from 'vue'
import _ from 'lodash'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: 'CFormMac',
  props: {
    modelValue: {},
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup (props, ctx) {
    const isReadonly = inject('readonly')
    let ElFormItemAttr = props.formItemAttr
    const { t } = useI18n()
    const _$t = t
    const validateMac = (rule: object, value: string, callback: Function) => {
      const reg = /^[a-fA-F0-9]{12}$/
      value = _.trim(value)
      if (value !== '' && !reg.test(value)) {
        callback(new Error(_$t('message.cMessage.inputRuleMac')))
      } else {
        callback()
      }
    }
    const validateMacs = (rule: object, value: string, callback: Function) => {
      const reg = /^[a-fA-F0-9]{12}$/
      if (value.indexOf('，') > -1) {
        callback(new Error(_$t('message.cMessage.useEnglishComma')))
      }
      const values = value.split(',')
      try {
        values.forEach((e, index) => {
          if (e !== '' && !reg.test(_.trim(e))) {
            throw Error(
              _$t('message.cMessage.the') +
                (index + 1) +
                _$t('message.cMessage.macError')
            )
          }
        })
        callback()
      } catch (e: any) {
        callback(new Error(e.message))
      }
    }
    const rules = props.formItemAttr.rules
    const type = ctx.attrs.type
    let macRules
    const customRules = {
      singleMac: [{ validator: validateMac, trigger: 'blur' }],
      multipleMac: [{ validator: validateMacs, trigger: 'blur' }]
    }
    if (type === 'textarea') {
      macRules = rules ? customRules.multipleMac.concat(rules) : customRules.multipleMac
    } else {
      macRules = rules ? customRules.singleMac.concat(rules) : customRules.singleMac
    }
    ElFormItemAttr.rules = macRules
    return {
      isReadonly,
      ElFormItemAttr
    }
  }
})
</script>
