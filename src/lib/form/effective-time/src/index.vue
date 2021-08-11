
<script>
import { h , defineComponent} from 'vue'
import { ElFormItem ,ElDatePicker} from 'element-plus'
import moment from 'moment'
export default defineComponent({
  name: 'CFormEffectiveTime',
  inject: ['dataForm'],
  data () {
    var validatEffectiveTime = (rule, value, callback) => {
      if (value === null) {
         this.$emit('update:modelValue', '')
      }
      const startTime = new Date(value[0]).getTime()
      const currentTime = new Date().getTime()
      if (startTime < currentTime) {
         callback(new Error(this.$t('message.cMessage.startGEnd')))
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
  methods: {
    disabledDate (time) {
      return time.getTime() > Date.now() + (this.validDay - 1) * 24 * 60 * 60 * 1000 || time.getTime() < Date.now() - 24 * 60 * 60 * 1000
    },
    setDefaultValue () {
      let currentDate = new Date()
      currentDate.setMinutes(currentDate.getMinutes() + parseInt(this.delayTime))
      let now = currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds()
      return [new Date(2000, 1, 1, currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()),  new Date(2000,1,1,23, 59, 59)]
    }
  },
  created () {
    this.effectiveTimeRules = this.formItemAttr.rules ? this.effectiveTimeRules.concat(this.formItemAttr.rules) : this.effectiveTimeRules
  },
  render () {
    let content = ''
    if (this.dataForm.readonly) {
      const modelValue = this.modelValue
      if (modelValue!=='' && modelValue!==undefined ) {
        content = moment(modelValue[0]).format('YYYY-MM-DD HH:mm:ss')
      }
    } else {
      content = h(ElDatePicker, {
        ref: 'effectiveTime',
        ...this.$attrs,
        type: "datetimerange",
        defaultTime: this.defaultValue,
        disabledDate: this.disabledDate,
        modelValue: this.modelValue,
        'onChange': $event => this.$emit('change', $event),
        'onBlur': $event => this.$emit('blur', $event),
        'onFocus': $event => this.$emit('focus', $event),
        'onUpdate:modelValue': $event => this.$emit('update:modelValue', $event)
      })
    }
    return (
      h(ElFormItem, {
        ref: 'effectiveTimeFormItem',
        class: 'textAlignLeft',
        ...this.formItemAttr,
        rules: this.effectiveTimeRules
      }, { default: () => content })
    )
  }
})
</script>

<style>
</style>
