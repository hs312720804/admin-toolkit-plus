<template>
  <div>
    <el-form-item :label="parantLabel" :prop="parantField" class="multipleSelect">
      <el-select v-model="parentValue" multiple :placeholder="parantLabel" @change="getChildren">
        <el-option
          v-for="item in parentData"
          :key="item.id+''"
          :label="item.name"
          :value="item.id+''"
        >{{item.name}}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item :label="childLabel" :prop="childField" v-if="showWhich">
      <el-form-item v-for="v in childData" :label="v.name" :key="v.id">
        <el-checkbox-group v-model="childrenValue" @change="changeCheckboxValue">
          <el-checkbox
            v-for="item in v.children"
            :label="item.id"
            :key="item.id+''"
            :value="item.id"
          >
          {{item.name}}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form-item>
    <el-form-item :label="childLabel" :prop="childField" v-else>
      <el-checkbox-group v-model="childrenValue" @change="changeCheckboxValue">
        <el-checkbox
          v-for="item in childData"
          :label="item.id"
          :key="item.name"
          :value="item.id"
        >{{item.name}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'CFatherSonLink',
  props: {
    parentData: {
      type: Array
    },
    childData: {
      type: Array
    },
    parantField: {
      type: String
    },
    childField: {
      type: String
    },
    parantLabel: {
      type: String
    },
    childLabel: {
      type: String
    }
  },
  data () {
    return {
      parentValue: [],
      childrenValue: []
    }
  },
  computed: {
    /*
    判断显示哪一个模式
     */
    showWhich: function () {
      if (this.childData.length > 0) { return typeof this.childData[0].children !== 'undefined' } else return false
    }
  },
  methods: {
    getChildren (id) {
      this.childrenValue = []
      this.$emit('get-children-list', id)
    },
    changeCheckboxValue (id) {
      this.$emit('get-children-value', id)
    }
  }
}
</script>
