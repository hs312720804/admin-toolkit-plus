<template>
  <el-form-item v-bind="ElFormItemAttr">
    <el-date-picker
      v-if="!isReadonly"
      :model-value="modelValue"
      v-bind="$attrs"
      type="datetimerange"
      :disabled-date="disabledDate"
      :default-time="setDefaultValue()"
      @update:modelValue="$emit('update:modelValue', $event)"
      @focus="setDefaultValue"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
    ></el-date-picker>
    <template v-else>
      <template v-if="modelValue !== '' && modelValue !== undefined">
        {{ $moment(modelValue[0]).format('YYYY-MM-DD HH:mm:ss') }} ~
        {{ $moment(modelValue[1]).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
    </template>
  </el-form-item>
</template>
<script>
import { inject, defineComponent } from 'vue'
import moment from 'moment'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: 'CFormEffectiveTime',
  props: {
    modelValue: {},
    validDay: {
      type: Number,
      default: 7 // 天
    },
    delayTime: {
      type: Number,
      default: 10 // 默认分钟
    },
    formItemAttr: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'focus'],
  setup (props, ctx) {
    const { t } = useI18n()
    const _$t = t
    const isReadonly = inject('readonly')
    const disabledDate = time => {
      return (
        time.getTime() >
          Date.now() + (props.validDay - 1) * 24 * 60 * 60 * 1000 ||
        time.getTime() < Date.now() - 24 * 60 * 60 * 1000
      )
    }
    const setDefaultValue = () => {
      let currentDate = new Date()
      currentDate.setMinutes(
        currentDate.getMinutes() + parseInt(props.delayTime)
      )
      let now =
        currentDate.getHours() +
        ':' +
        currentDate.getMinutes() +
        ':' +
        currentDate.getSeconds()
      return [
        new Date(
          2000,
          1,
          1,
          currentDate.getHours(),
          currentDate.getMinutes(),
          currentDate.getSeconds()
        ),
        new Date(2000, 1, 1, 23, 59, 59)
      ]
    }
    const validatEffectiveTime = (rule, value, callback) => {
      if (value === null) {
        ctx.emit('update:modelValue', '')
      }
      const startTime = new Date(value[0]).getTime()
      const currentTime = new Date().getTime()
      if (startTime < currentTime) {
        callback(new Error(_$t('message.cMessage.startGEnd')))
      } else {
        callback()
      }
    }
    const effectiveTimeRules = [
      { validator: validatEffectiveTime, trigger: ['blur', 'change'] }
    ]
    const ElFormItemAttr = props.formItemAttr
    ElFormItemAttr.rules = props.formItemAttr.rules
      ? effectiveTimeRules.concat(props.formItemAttr.rules)
      : effectiveTimeRules
    return {
      isReadonly,
      disabledDate,
      setDefaultValue,
      ElFormItemAttr
    }
  }
})
</script>

<style></style>
