<template>
  <div>
    <el-form :model="form" ref="form" :rules="formRules" label-width="100px">
      <el-form-item label="投放名称" prop="launchName">
        <el-input size="small" v-model="form.launchName" placeholder="投放名称"></el-input>
      </el-form-item>
      <c-father-son-link
        :parentData="strategyList"
        :childData="crowdList"
        parantField="strategyName"
        childField="crowdName"
        :parantLabel="parantLabel"
        :childLabel="childLabel"
        @get-children-list="getChildrenList"
        @get-children-value="getChildrenValue"
      ></c-father-son-link>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      parantLabel: '选择策略',
      childLabel: '选择人群',
      form: {
        launchName: null,
        strategyName: null,
        crowdName: null
      },
      formRules: {
        launchName: [
          { required: true, message: '请输入投放名称', trigger: 'blur' }
        ],
        strategyName: [
          { required: true, message: '请选择策略', trigger: 'blur' }
        ],
        crowdName: [{ required: true, message: '请选择人群', trigger: 'blur' }]
      },
      strategyList: [
        {
          name: '策略1',
          id: 1
        },
        {
          name: '策略2',
          id: 2
        }
      ],
      crowdList: [],
      crowdList_data: [
        {
          id: 1,
          data: [
            {
              name: '人群1',
              id: 1
            },
            {
              name: '人群2',
              id: 2
            }
          ]
        },
        {
          id: 2,
          data: [
            {
              name: '人群3',
              id: 3
            },
            {
              name: '人群4',
              id: 4
            }
          ]
        }
      ]
    }
  },
  methods: {
    getChildrenList (id) {
      this.form.strategyName = id
      this.form.crowdName = null
      this.crowdList = this.crowdList_data.reduce(function (result, current) {
        if (id.includes(current.id + '') === true) {
          result = result.concat(current.data)
        }
        return result
      }, [])
    },
    getChildrenValue (id) {
      this.form.crowdName = id
    },
    submitForm () {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 保存接口
          this.$message('保存')
        }
      })
    }
  }
}
</script>
