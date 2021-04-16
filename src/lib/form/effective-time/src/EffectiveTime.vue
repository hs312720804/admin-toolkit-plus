<template>
  <el-form-item :label="label" :prop="prop" :label-width="labelWidth" :rules="effectiveTimeRules">
    <el-date-picker
        v-if="!isReadonly"
        :value="value"
        clearable
        type="datetimerange"
        align="right"
        :disabled="disabled"
        :placeholder="placeholder"
        :picker-options="pickerOptions"
        :default-time="defaultValue"
        @focus="setDefaultValue"
        @input="$emit('input', $event)"
        @change="$emit('change', $event)"
    ></el-date-picker>
    <template v-else>
      <template v-if="value!=='' && value!==undefined">
          {{ $moment(value[0]).format('YYYY-MM-DD HH:mm:ss') }} ~ {{ $moment(value[1]).format('YYYY-MM-DD HH:mm:ss') }}
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
        return callback(new Error(this.$t('cMessage.startGEnd')))
      } else {
        callback()
      }
    }
    return {
      effectiveTimeRules: [
        { validator: validatEffectiveTime, trigger: ['blur', 'change'] }
      ],
      defaultValue: []
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
      this.defaultValue = [now, '23:59:59']
    }
  },
  created () {
    this.effectiveTimeRules = this.rules ? this.effectiveTimeRules.concat(this.rules) : this.effectiveTimeRules
  }
}
</script>

<style>
</style>
