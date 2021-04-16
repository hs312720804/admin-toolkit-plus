<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{$t('cMessage.dropDownMenu')}}<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="(item, index) in droplist"
        :key="index"
        :to="item.to"
        v-on:click.native ="goto"
      ><a :href="item.to">{{ item.name }}</a></el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
import { Dropdown } from 'element-ui'
export default {
  name: 'CDropdown',
  components: {
    'el-dropdown': Dropdown
  },
  props: ['droplist'],
  methods: {
    goto () {
      this.$emit('goto')
    }
  }
}
</script>
