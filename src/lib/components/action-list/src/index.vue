<template>
   <div class="action-list" :style="align === 'left' ? {'justify-content': 'flex-start'} : ''">
     <template v-if="!group">
       <el-button
            v-for="(item, key) in actions"
            :key="key"
            :type="item.type"
            @click="owner[key]()"
        >
          {{ item.text }}
       </el-button>
    </template>
    <template v-else>
      <el-button-group>
        <el-button
            v-for="(item, key) in actions"
            :key="key"
            :type="item.type"
            @click="owner[key]()"
        >
          {{ item.text }}
        </el-button>
      </el-button-group>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CActionList',
  inject: {
    actionOwner: {
      default: null
    }
  },
  props: {
    actions: {
      type: Object
    },
    target: {},
    group: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  computed: {
    owner () {
      debugger
      return this.actionOwner || this.target || this.$parent
    }
  }
}
</script>
<style lang="stylus" scoped>
.action-list
    display flex
    flex-direction row
    justify-content flex-end
</style>
