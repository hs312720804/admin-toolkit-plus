<template>
   <div class="action-list" :style="align === 'left' ? {'justify-content': 'flex-start'} : ''">
     <template v-if="!group">
       <Button
            v-for="(item, key) in actions"
            :key="key"
            :type="item.type"
            @click="owner[key]()"
        >
          {{ item.text }}
       </Button>
    </template>
    <template v-else>
      <el-button-group>
        <Button
            v-for="(item, key) in actions"
            :key="key"
            :type="item.type"
            @click="owner[key]()"
        >
          {{ item.text }}
        </Button>
      </el-button-group>
    </template>
  </div>
</template>

<script>
import { Row, Button } from 'element-ui'
export default {
  name: 'CActionList',
  components: {
    Row,
    Button
  },
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
