<template>
  <div class="filter-form">
    <c-form @submit.native.prevent @keyup.native.enter="handleFilter" :label-width="showLabel ? labelWidth : ''">
      <template v-for="(item, key) in formItems">
        <template v-if="!item.queryExclude">
          <c-form-string
            v-if="!item.inputType || item.inputType === 'string'"
            :key="key"
            :label="showLabel ? item.label: ''"
            :placeholder="(item.placePrefix ? item.placePrefix : '请输入') + item.label"
            v-model="formData[item.prop]"
          >
          </c-form-string>
          <c-form-enum
            v-if="item.inputType === 'enum'"
            :key="key"
            :label="showLabel ? item.label: ''"
            v-model="formData[item.prop]"
            :prop="item.prop"
            :options="item.options"
            :placeholder="item.label"
            clearable
          />
          <c-form-any
            v-if="item.inputType === 'date'"
            :prop="item.prop"
            :key="key"
            :label="showLabel ? item.label: ''"
          >
            <template v-slot:edit>
              <div>
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="date"
                  :placeholder="item.label"
                >
                </el-date-picker>
              </div>
            </template>
          </c-form-any>
          <slot name="loop" :data="item"></slot>
        </template>
      </template>
      <slot name="outloop"></slot>
      <div style="margin-left:0; margin-bottom:14px;">
        <el-button-group v-if="isButton">
          <el-button class="text-btn" @click="handleFilter"
            >{{genButtonText.query}}</el-button
          >
          <el-button class="text-btn" @click="handleFilterReset"
            >{{genButtonText.reset}}</el-button
          >
          <template v-if="!hiddenExpandButton">
            <el-button
              v-if="expand"
              class="text-btn"
              @click="handleFilterExpand"
              >{{genButtonText.packUp}}<i class="el-icon-arrow-up"></i
            ></el-button>
            <el-button
              v-else
              class="text-btn"
              @click="handleFilterExpand"
              >{{genButtonText.expand}}<i class="el-icon-arrow-down"></i
            ></el-button>
          </template>
        </el-button-group>
        <template v-else>
          <el-button type="text" class="text-btn" @click="handleFilter"
            >{{genButtonText.query}}</el-button
          >
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" class="text-btn" @click="handleFilterReset"
            >{{genButtonText.reset}}</el-button
          >
          <template v-if="!hiddenExpandButton">
            <el-divider direction="vertical"></el-divider>
            <el-button
              v-if="expand"
              type="text"
              class="text-btn"
              @click="handleFilterExpand"
              >{{genButtonText.packUp}} <i class="el-icon-arrow-up"></i
            ></el-button>
            <el-button
              v-else
              type="text"
              class="text-btn"
              @click="handleFilterExpand"
              >{{genButtonText.expand}} <i class="el-icon-arrow-down"></i
            ></el-button>
            
          </template>
        </template>
      </div>
    </c-form>
  </div>
</template>

<script>
export default {
  name: 'CListFilter',
  data () {
    return {
      filter: {},
      expand: ''
    }
  },
  props: {
    options: {
      type: Array
    },
    formData: {
      type: Object
    },
    isExpand: {
      type: Boolean,
      default: false
    },
    length: {
      type: Number
    },
    hiddenExpandButton: {
      type: Boolean
    },
    isButton: {
      type: Boolean,
      default: true
    },
    showLabel: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    buttonText: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    formItems () {
      if (this.length) {
        return this.options.slice(0, this.length)
      } else {
        return this.options
      }
    },
    genButtonText () {
      return {
        query: '查询',
        reset: '重置',
        expand: '展开',
        packUp: '收起',
        ...this.buttonText
      }
    }
  },
  methods: {
    handleFilter () {
      this.$emit('filter')
    },
    handleFilterReset () {
      this.$emit('reset')
    },
    handleFilterExpand () {
      this.expand = !this.expand
      this.$emit('filter-expand', this.expand)
    }
  },
  created () {
    this.expand = this.isExpand
  }
}
</script>
<style lang="stylus" scoped>
>>>.el-form
  display flex
  flex-wrap wrap
  flex-direction row
  .el-form-item
    min-width 220px
    margin-right 10px
    margin-bottom 14px !important
    align-self flex-start
</style>
