<template>
  <el-form-item class="textAlignLeft" :label="label" :prop="prop" :label-width="labelWidth" :rules="effectiveTimeRules">
    <el-date-picker
        v-if="!isReadonly"
        :modelValue="modelValue"
        clearable
        type="datetimerange"
        align="right"
        :disabled="disabled"
        :placeholder="placeholder"
        :default-time="defaultValue"
        :picker-options="pickerOptions"
        @update:modelValue="$emit('update:modelValue', $event)"
        @change="$emit('change', $event)"
    ></el-date-picker>
    <template v-else>
      <template v-if="modelValue!=='' && modelValue!==undefined">
          {{ $moment(modelValue[0]).format('YYYY-MM-DD HH:mm:ss') }} ~ {{ $moment(modelValue[1]).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
      </template>
  </el-form-item>
</template>
<script>
import formItemMixin from '../../formItemMixin'
export default {
  name: 'CFormEffectiveTime',
  mixins: [formItemMixin],
  data () {
    var validatEffectiveTime = (rule, value, callback) => {
      const startTime = new Date(value[0]).getTime()
      const currentTime = new Date().getTime()
      if (startTime < currentTime) {
        return callback(new Error(this.$t('message.cMessage.startGEnd')))
      } else {
        callback()
      }
    }
    return {
      effectiveTimeRules: [
        { validator: validatEffectiveTime, trigger: ['blur', 'change'] }
      ],
      defaultValue: this.setDefaultValue()
    }
  },
  props: {
    pickerOptions: {
      type: Object,
      default: function () {
        return {
          disabledDate (time) {
            return time.getTime() < new Date().getTime() - 3600 * 1000 * 24 * 1
          }
        }
      }
    },
    delayTime: {
      type: Number,
      default: 10 // 默认分钟
    }
  },
  methods: {
    setDefaultValue () {
      let currentDate = new Date()
      currentDate.setMinutes(currentDate.getMinutes() + this.delayTime)
      let now = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds()
      return [new Date(2000, 1, 1, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()),  new Date(2000,1,1,23, 59, 59)]
    }
  },
  created () {
    this.effectiveTimeRules = this.rules ? this.effectiveTimeRules.concat(this.rules) : this.effectiveTimeRules
  }
}
</script>

<style>
</style>
