<template>
  <div class="cc-product-list">
    <el-select v-model="businessType" @change="businessTypeChange">
        <el-option label="影视" :value="0"></el-option>
        <el-option label="教育" :value="1"></el-option>
    </el-select>
    <c-product-list ref="proList" :proData="proData" :setProductAttr="setProductAttr" :partnerList="partnerList"></c-product-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      urls: {
        getProductListUrl: '/ccVideoPermissionRls/dataList.html' // 产品包列表
      },
      businessType: 0,
      proDataMovie: [
        {
          sourceId: 120,
          sourceName: '腾讯产品包',
          sourceSign: 'tencent',
          partnerName: 'tencent',
          company: 'tencent_yst'
        },
        {
          sourceId: 121,
          sourceName: '爱奇艺产品包',
          sourceSign: 'yinhe',
          partnerName: 'yinhe',
          company: 'yinhe_mix_voole'
        },
        {
          sourceId: 122,
          sourceName: '优酷产品包',
          sourceSign: 'youku',
          partnerName: 'youku',
          company: 'youku'
        }
      ],
      proDataTeach: [
        {
          sourceId: 123,
          sourceName: '教育产品包',
          sourceSign: 'teach',
          partnerName: 'teach',
          company: 'teach'
        }
      ],
      proData: [],
      setProductAttr: {
        businessType: 0,
        partnerArr: [],
        productCurrList: []
      },
      partnerList: [{ 'partnerStatus': 1, 'createdDate': '2019-09-10 17:36:25', 'partnerCode': '000001', 'partnerName': 'tencent', 'lastUpdateDate': '2019-09-10 17:36:33', 'partnerValue': 1, 'partnerModel': 0, 'sdkType': 0, 'sourceTitle': '腾讯电视', 'partnerId': 1, 'sourceName': '腾讯' }, { 'partnerStatus': 1, 'createdDate': '2018-03-20 14:36:22', 'partnerCode': '000010', 'partnerName': 'yinhe', 'lastUpdateDate': '2019-04-25 22:46:00', 'partnerValue': 2, 'partnerModel': 0, 'sdkType': 0, 'sourceTitle': '爱奇艺电视', 'partnerId': 2, 'sourceName': '爱奇艺' }, { 'partnerStatus': 1, 'createdDate': '2019-09-10 17:37:48', 'partnerCode': '000100', 'partnerName': 'youku', 'lastUpdateDate': '2019-09-10 17:37:48', 'partnerValue': 4, 'partnerModel': 0, 'sdkType': 0, 'sourceTitle': '优酷电视', 'partnerId': 22, 'sourceName': '优酷' }]
    }
  },
  methods: {
    businessTypeChange (val) {
      this.setProductAttr.businessType = val
      if (val === 0) {
        this.proData = this.proDataMovie
      } else if (val === 1) {
        this.proData = this.proDataTeach
      }
    }
  },
  created () {
    this.proData = this.proDataMovie
  }
}
</script>
