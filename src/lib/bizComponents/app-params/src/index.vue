<template>
  <div>
    <el-form-item
      :label="$t('message.cMessage.packageName')"
      :prop="formProp('packagename')"
      :rules="rules.packagename"
    >
      <el-input v-model.trim="inputValue.packagename"></el-input>
    </el-form-item>
    <el-form-item
      :label="$t('message.cMessage.versionCode')"
      :prop="formProp('versioncode')"
      :rules="rules.versioncode"
    >
      <el-input v-model.trim="inputValue.versioncode"></el-input>
    </el-form-item>
    <el-form-item
      :label="$t('message.cMessage.dowhat')"
      :prop="formProp('dowhat')"
      :rules="rules.dowhat"
      class="textAlignLeft"
    >
      <el-select v-model="inputValue.dowhat">
        <el-option
          v-for="(item, index) in dowhatOptions"
          :key="index"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      :label="$t('message.cMessage.bywhat')"
      :prop="formProp('bywhat')"
      :rules="rules.bywhat"
      class="textAlignLeft"
    >
      <el-select v-model="inputValue.bywhat">
        <el-option
          v-for="(item, index) in bywhatOptions"
          :key="index"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item
      :label="$t('message.cMessage.byvalue')"
      :prop="formProp('byvalue')"
      :rules="rules.byvalue"
     
    >
      <el-input type="textarea" v-model.trim="inputValue.byvalue"></el-input>
    </el-form-item>
    <slot></slot>
    <el-form-item  :label="$t('message.cMessage.extendParams')" class="textAlignLeft">
      <div
        class="app-extend-params"
        v-for="(param, index) in inputValue.params"
        :key="index"
      >
        <el-form-item
          label="key:"
          label-width="60px"
          :prop="formProp('params.' + index + '.key')"
          :rules="rules.params.key"
        >
          <el-input v-model.trim="param.key"></el-input>
        </el-form-item>
        <el-form-item
          label="value:"
          label-width="60px"
          :prop="formProp('params.' + index + '.value')"
          :rules="rules.params.value"
        >
          <el-input v-model.trim="param.value"></el-input>
        </el-form-item>
        <a class="app-params__remove-param" @click="handleRemoveParam(index)">
          <i class="el-icon-minus"></i>
        </a>
      </div>
      <el-button size="small" type="primary" plain @click="handleAddParam">
        <i class="el-icon-plus"></i>&nbsp;{{$t('message.cButton.add')}}
      </el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'CAppParams',
  data () {
    function validateKV (rule, value, cb) {
      if (/[！￥……（）——【】：；“”‘’、《》，。？\s+]/.test(value)) {
        cb(new Error(this.$t('message.cRules.notSpeAndSpaceCharacters')))
      } else {
        cb()
      }
    }
    return {
      inputValue: {
        packagename: undefined,
        versioncode: undefined,
        dowhat: undefined,
        bywhat: undefined,
        byvalue: undefined,
        params: [],
        exception: {}
      },
      rules: {
        packagename: [
          { required: true, message: this.$t('message.cRules.required'), trigger: 'blur' }
        ],
        versioncode: [
          { required: true, message: this.$t('message.cRules.required'), trigger: 'blur' }
        ],
        dowhat: [
          { required: true, message: this.$t('message.cRules.required'), trigger: 'change' }
        ],
        bywhat: [
          { required: true, message: this.$t('message.cRules.required'), trigger: 'change' }
        ],
        byvalue: [
          { required: true, message: this.$t('message.cRules.required'), trigger: 'blur' }
        ],
        params: {
          key: [
            { required: true, message: this.$t('message.cRules.required'), trigger: 'blur' },
            { validator: validateKV, trigger: 'blur' }
          ],
          value: [
            { required: true, message: this.$t('message.cRules.required'), trigger: 'blur' },
            { validator: validateKV, trigger: 'blur' }
          ]
        }
      }
    }
  },
  props: {
    modelValue: {},
    propPrefix: {},
    dowhatOptions: {
      default () {
        return [
          {
            label: 'startActivity',
            value: 'startActivity'
          },
          {
            label: 'startService',
            value: 'startService'
          },
          {
            label: 'sendBroadcast',
            value: 'sendBroadcast'
          }
        ]
      }
    },
    bywhatOptions: {
      default () {
        return [
          {
            label: 'action',
            value: 'action'
          },
          {
            label: 'class',
            value: 'class'
          },
          {
            label: 'uri',
            value: 'uri'
          },
          {
            label: 'activity',
            value: 'activity'
          }
        ]
      }
    }
  },
  watch: {
    modelValue: 'setInputValue'
  },
  methods: {
    formProp (key) {
      return (this.propPrefix || '') + key
    },
    genDefaultValue () {
      return {
        packagename: undefined,
        versioncode: undefined,
        dowhat: undefined,
        bywhat: undefined,
        byvalue: undefined,
        params: []
      }
    },
    setInputValue (val) {
      if (val !== this.inputValue) {
        this.inputValue = Object.assign(this.genDefaultValue(), val)
      }
    },
    emitInputValue (val) {
      this.$emit('update:modelValue', this.inputValue)
    },
    handleAddParam () {
      this.inputValue.params.push({
        key: undefined,
        value: undefined
      })
    },
    handleRemoveParam (index) {
      this.inputValue.params.splice(index, 1)
    }
  },
  created () {
    if (this.modelValue) {
      this.setInputValue(this.modelValue)
    }
    this.$watch('inputValue', this.emitInputValue, {
      deep: true
    })
  }
}
</script>
<style scoped>
.textAlignLeft :deep(.el-form-item__content) {
  text-align: left;
}
.app-extend-params .el-form-item,
.app-extend-params .el-form-item__label,
.app-extend-params .el-form-item__content,
.app-extend-params .app-params__remove-param {
  display: inline-block;
}
.app-extend-params .el-form-item {
  margin-bottom: 24px;
  margin-right: 15px;
}
.app-params__remove-param {
  cursor: pointer;
  border: 1px solid #999;
  border-radius: 13px;
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  color: #999;
  margin-left: 5px;
}
</style>
