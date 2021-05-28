<template>
  <div class="cell-content">
    <div class="cell-main-content" style="width: 90%" @click="handleEdit">
      <el-input
        ref="input"
        class="edit-input"
        v-if="!readonly"
        :modelValue="value"
        @update:modelValue="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div v-else class="input-place">{{ modelValue }}</div>
    </div>
    <i :class="{'icon': true, 'el-icon-edit': readonly }" @click="handleEdit" style="cursor: pointer;" />
  </div>
</template>

<script>
export default {
  name: 'CCellEdit',
  components: {},
  props: ['modelValue'],
  data () {
    return {
      value: '',
      readonly: true
    }
  },
  computed: {},
  methods: {
    handleInput (val) {
      this.value = val
      this.$emit('update:modelValue', val)
    },
    handleEdit (e) {
      this.readonly = false
      e.stopPropagation()
    },
    handleBlur () {
      this.readonly = true
      this.$emit('blur', this.value)
    },
    handleFocus (e) {
      e.target.select()
    },
    domClick (e) {
      const className = e.srcElement.getAttribute('class')
      if (!['el-input__inner', 'input-place'].includes(className)) {
        this.readonly = true
      }
    }
  },
  created () {
    window.addEventListener('click', this.domClick)
    this.value = this.modelValue
  },
  unmounted() {
    window.removeEventListener('click', this.domClick)
  },
}
</script>

<style lang="stylus" scoped>
.cell-content
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  color #606266
  cursor pointer
.icon
  visibility hidden
.cell-content:hover .icon
  visibility visible
.input-place
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
</style>
