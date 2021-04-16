<template>
  <el-checkbox-group @input="handleInput" :value="tempVal">
    <el-checkbox-button :label="0" v-if="allText !== ''">{{
      allText
    }}</el-checkbox-button>
    <el-checkbox-button
      v-for="(item, index) in dataList"
      v-show="
        item.isShow !== null && item.isShow !== undefined ? item.isShow : true
      "
      :disabled="
        item.disabled !== null && item.disabled !== undefined
          ? item.disabled
          : false
      "
      :key="index"
      :label="item[labelKey]"
      >{{ item[valKey] }}</el-checkbox-button
    >
  </el-checkbox-group>
</template>
<script>
export default {
  name: 'CSelectChange',
  props: {
    value: {},
    allText: {
      type: String,
      default () {
        return ''
      }
    },
    allTextVal: {
      default () {
        return 0
      }
    },
    valKey: {
      type: String,
      default () {
        return 'label'
      }
    },
    labelKey: {
      type: String,
      default () {
        return 'value'
      }
    },
    dataList: {
      type: Array,
      default () {
        return []
      }
    },
    allBtnCheck: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      tempVal: []
    }
  },
  mounted () {
    this.tempVal = this.value
  },
  methods: {
    handleInput (val) {
      const index = val.findIndex(item => item === 0)
      const length = val.length
      if ((index === 0 && length < 1) || index === length - 1) {
        this.tempVal = [0]
      } else {
        this.tempVal = val.filter(item => item !== 0)
      }
      if (this.allBtnCheck) {
        if (this.dataList.length === length) {
          this.$nextTick(() => {
            this.tempVal = [0]
          })
        }
      }
      this.$emit('input', this.tempVal)
    }
    // ,
    // handleChange (val) {
    //   this.$emit('change', val)
    // }
  }
}
</script>
<style scoped></style>
