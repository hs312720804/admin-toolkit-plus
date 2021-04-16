<template>
  <div>
    <el-form class="demo-ruleForm" label-width="130px">
          <div class="box" v-for="(item,key) in formList" :key="key" >
            <div class="el-form-item" style="padding: 0px 16px" v-for="(m,index) in item.moreMediaList" :key="index" >
              <div class="el-form-item__label" style="width: 128px">
                <el-select v-model="m.type" v-if="m.type !== 'baoguang'" @change="getCodeType($event,key,index)">
                  <el-option
                    :key="item.value"
                    v-for="item in classTypeOption"
                    :value="item.value"
                    :label="item.label"
                  ></el-option>
                </el-select>
                <template v-if="m.type === 'baoguang'">{{$t('cMessage.ExposureM')}}</template>
              </div>
              <div class="el-form-item__content">
                <div class="monitor-form" v-for="(c,i) in m.value" :key="i">
                  <el-row :gutter="10">
                    <el-col :span="6">
                      <el-select v-model="c.serviceProvider" @change="getserviceProvider($event,key,index,i,m.type)">
                        <el-option
                          v-for="item in serviceOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          >
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="14">
                      <el-input
                      v-if="inputType === 'textArea'"
                      type="textarea"
                      :autosize="{ minRows: 3, maxRows: 5}"
                      :placeholder="$t('cMessage.content')"
                      v-model="c.code"
                      @change="handleIputCode($event,key,index,i,m.type)"
                      >
                      </el-input>
                       <el-input
                       v-else
                      :placeholder="$t('cMessage.content')"
                      v-model="c.code"
                      @change="handleIputCode($event,key,index,i,m.type)"
                      >
                      </el-input>
                    </el-col>
                    <el-col :span="2">
                      <el-button :disabled="m.value.length > 1 ? false : true " @click="handleDeleteExposure(key,index,i,m.type)">{{$t('cButton.del')}}</el-button>
                    </el-col>
                  </el-row>
                </div>
                <el-row>
                  <el-col>
                    <el-button class="normal-btn-orange" @click="handleAddExposure(key,index,m.type)">{{$t('cButton.add')}}</el-button>
                  </el-col>
                </el-row>
              </div>
            </div>
            <el-row>
              <el-col>
                <p class="add-code-more" @click="handleAddCode(key)">+{{$t('cButton.addMore')}}</p>
              </el-col>
            </el-row>
          </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'CAddFormObj',
  props: {
    formList: {
      type: Array,
      default: () => []
    },
    classTypeOption: {
      type: Array,
      default: () => []
    },
    serviceOptions: {
      type: Array,
      default: () => []
    },
    inputType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    getserviceProvider (value, key, index, i, type) {
      this.formList[key].moreMediaList[index].value[i].serviceProvider = value
    },
    handleIputCode (value, key, index, i, type) {
      let code = value.replace(/\s*/g, '').replace(/[\r\n]/g, '')
      this.formList[0].moreMediaList[index].value[i].code = code
    },
    handleAddExposure (key, index, type) {
      this.formList[key].moreMediaList[index].value.push({
        code: '',
        serviceProvider: ''
      })
    },
    handleDeleteExposure (key, index, i, type) {
      this.formList[key].moreMediaList[index].value.splice(i, 1)
    },
    handleAddCode (index) {
      this.formList[index].moreMediaList.push(
        {
          type: '',
          value: [
            {
              code: '',
              orderId: '',
              scheduleId: '',
              serviceProvider: '',
              trackType: 1,
              trackTypeModel: 1
            }
          ]
        }
      )
    },
    getCodeType (val, key, index) {
      this.formList[key].moreMediaList[index].type = val
    }
  },
  created () {
  }
}
</script>
<style lang="scss" scoped>
// 11111
.add-code-more{
  border: none;
  color: #409EFF;
  cursor: pointer;
  font-size: 14px;
  padding: 0px 16px;
}

</style>

<style lang="stylus" scoped>
.el-row
  margin 0
>>>.el-select
  display flex
.monitor-form
  margin-bottom 10px
>>> .el-radio-button__orig-radio:checked + .el-radio-button__inner
  background-color #FC4C00
  border-color #FC4C00
// .add-code-more{
//   border: none;
//   color: #FC4C00;
//   cursor: pointer;
//   font-size: 14px;
//   padding: 0px 16px;
// }
.box
  border 1px solid #d8d8d8
  margin-bottom 16px
.el-form-item__content
  display flex
  flex-direction column
.box-header
  background #eae8e7
  padding 5px
  font-size 14px
  color #333
  margin-bottom 16px
.demo-ruleForm
  margin-top 30px
>>>.el-radio-button__inner,>>>.el-radio-button__orig-radio:checked + .el-radio-button__inner
  width 161px
  height 32px
  padding 0px
  line-height 32px
>>> .el-radio-button__orig-radio:checked + .el-radio-button__inner
  background-color #FC4C00
  border-color #FC4C00
>>> .el-button
  padding-top 0px
  padding-bottom 0px
  line-height 32px
  height 32px
.code-tabs>>>.el-tabs__header
  display none
</style>
