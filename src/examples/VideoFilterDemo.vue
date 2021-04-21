<template>
  <div class="cc-video-filter">
    <c-video-filter ref="videoFilter" :setVideoFilter="setVideoFilter" :setIsDisabled="setIsDisabled" :searchDataList="searchDataList" @get-search-name-list="getSearchNameList" @is-loading-end="clickLoadingClose" @get-search-params="getSearchParams"></c-video-filter>
  </div>
</template>
<script>
export default {
  data () {
    return {
      urls: {
        getVideoConditionUrl: 'http://dev-mgr-media.tc.cc0808.com/contentSearch/getCondition.html', // 影视筛选列表
        getTeachConditionUrl: 'http://dev-mgr-media.tc.cc0808.com/contentSearch/getConditionForTeach.html', // 教育筛选列表
        getAppTypeListUrl: 'http://dev-mgr-media.tc.cc0808.com/ownMediaResManage/appTypeDataList.html', // 应该筛选列表
        getShopNameListUrl: 'http://dev-mgr-media.tc.cc0808.com/ownMediaResManage/shopDataList.html', // 购物筛选列表
        getGoodTypeListUrl: 'http://dev-mgr-media.tc.cc0808.com/ownMediaResManage/goodTypeDataList.html' // 购物筛选列表
      },
      setVideoFilter: {
        businessType: 0
      },
      setIsDisabled: {
        isSource: true,
        isCategory: false
      },
      searchDataList: {
        searchCondition: {},
        shopNameList: [],
        goodTypeList: [],
        appTypeList: [],
        queryPartnerList: [{ 'partnerStatus': 1, 'partnerCode': '', 'partnerName': '', 'lastUpdateDate': '2019-04-11 10: 36: 26', 'partnerValue': 0, 'partnerModel': 0, 'sdkType': 0, 'sourceTitle': '全部', 'partnerId': 0, 'sourceName': '' }, { 'partnerStatus': 1, 'createdDate': '2019-09-10 17: 36: 25', 'partnerCode': '000001', 'partnerName': 'tencent', 'lastUpdateDate': '2019-09-10 17: 36: 33', 'partnerValue': 1, 'partnerModel': 0, 'sdkType': 0, 'sourceTitle': '腾讯电视', 'childVideoPartnerInfoList': [{ 'partnerStatus': 1, 'createdDate': '2018-03-20 14: 36: 26', 'partnerCode': '000001', 'partnerName': 'tencent', 'lastUpdateDate': '2019-04-25 22: 46: 00', 'partnerValue': 1, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 4, 'sourceName': '腾讯' }], 'partnerId': 1, 'sourceName': '腾讯' }, { 'partnerStatus': 1, 'createdDate': '2018-03-20 14: 36: 22', 'partnerCode': '000010', 'partnerName': 'yinhe', 'lastUpdateDate': '2019-04-25 22: 46: 00', 'partnerValue': 2, 'partnerModel': 0, 'sdkType': 0, 'sourceTitle': '爱奇艺电视', 'childVideoPartnerInfoList': [{ 'partnerStatus': 1, 'createdDate': '2018-03-20 14: 36: 30', 'partnerCode': '000010', 'partnerName': 'yinhe', 'lastUpdateDate': '2019-04-25 22: 46: 00', 'partnerValue': 2, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 7, 'sourceName': '爱奇艺' }], 'partnerId': 2, 'sourceName': '爱奇艺' }, { 'partnerStatus': 1, 'createdDate': '2019-09-10 17: 37: 48', 'partnerCode': '000100', 'partnerName': 'youku', 'lastUpdateDate': '2019-09-10 17: 37: 48', 'partnerValue': 4, 'partnerModel': 0, 'sdkType': 0, 'sourceTitle': '优酷电视', 'childVideoPartnerInfoList': [{ 'partnerStatus': 1, 'createdDate': '2019-09-10 17: 37: 48', 'partnerCode': '000100', 'partnerName': 'youku', 'lastUpdateDate': '2019-09-10 17: 37: 48', 'partnerValue': 4, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 23, 'sourceName': '优酷' }], 'partnerId': 22, 'sourceName': '优酷' }],
        querySourceList: [{ 'partnerStatus': 1, 'createdDate': '2018-03-20 14: 36: 26', 'partnerCode': '000001', 'partnerName': 'tencent', 'lastUpdateDate': '2019-04-25 22: 46: 00', 'partnerValue': 1, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 4, 'sourceName': '腾讯' }, { 'partnerStatus': 1, 'createdDate': '2018-03-20 14: 36: 27', 'partnerCode': '000111', 'partnerName': '4KGarden', 'lastUpdateDate': '2019-04-25 22: 46: 00', 'partnerValue': 7, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 5, 'sourceName': '4K花园' }, { 'partnerStatus': 1, 'createdDate': '2018-03-20 14: 36: 30', 'partnerCode': '000010', 'partnerName': 'yinhe', 'lastUpdateDate': '2019-04-25 22: 46: 00', 'partnerValue': 2, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 7, 'sourceName': '爱奇艺' }, { 'partnerStatus': 1, 'createdDate': '2018-03-20 14: 36: 34', 'partnerCode': '000111', 'partnerName': 'teach', 'lastUpdateDate': '2019-04-25 22: 46: 00', 'partnerValue': 7, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 9, 'sourceName': '教育' }, { 'partnerStatus': 1, 'createdDate': '2019-09-10 17: 37: 48', 'partnerCode': '000111', 'partnerName': 'coocaa', 'lastUpdateDate': '2019-09-10 17: 37: 48', 'partnerValue': 7, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 10, 'sourceName': '酷开' }, { 'partnerStatus': 1, 'createdDate': '2019-09-10 17: 37: 48', 'partnerCode': '000100', 'partnerName': 'youku', 'lastUpdateDate': '2019-09-10 17: 37: 48', 'partnerValue': 4, 'partnerModel': 1, 'sdkType': 0, 'sourceTitle': '', 'partnerId': 23, 'sourceName': '优酷' }],
        businessTypeList: [{ label: '影视', name: 'movie', value: 0 }, { label: '教育', name: 'teach', value: 1 }, { label: '购物', name: 'goods', value: 2 }, { label: '应用', name: 'app', value: 3 }]
      } // 搜索条件
    }
  },
  methods: {
    getSearchCondition () { // 获取查询条件
      // 获取影视查询条件
      this.searchDataList.searchCondition = {
        actors: [{ 'tagId': 576, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '赵丽颖', 'tagSource': '' }, { 'tagId': 577, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '黄晓明', 'tagSource': '' }, { 'tagId': 578, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '邓超', 'tagSource': '' }],
        sources: [
          { 'name': 'movie', 'child': [{ 'tagId': 1, 'categoryName': '电视剧', 'categoryId': 1, 'child': [{ 'tagEntities': [{ 'tagId': 253, 'partnerValue': 5, 'tagName': '动作' }, { 'tagId': 254, 'partnerValue': 5, 'tagName': '爱情' }, { 'tagId': 255, 'partnerValue': 1, 'tagName': '犯罪' }, { 'tagId': 256, 'partnerValue': 5, 'tagName': '战争' }, { 'tagId': 257, 'partnerValue': 5, 'tagName': '武侠' }] }] }] },
          { 'name': 'movie', 'child': [{ 'tagId': 1, 'categoryName': '电视剧', 'categoryId': 1, 'child': [{ 'tagEntities': [{ 'tagId': 253, 'partnerValue': 5, 'tagName': '动作' }, { 'tagId': 254, 'partnerValue': 5, 'tagName': '爱情' }, { 'tagId': 255, 'partnerValue': 1, 'tagName': '犯罪' }, { 'tagId': 256, 'partnerValue': 5, 'tagName': '战争' }, { 'tagId': 257, 'partnerValue': 5, 'tagName': '武侠' }] }] }] }
        ],
        areas: [{ 'tagId': 576, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '赵丽颖', 'tagSource': '' }, { 'tagId': 577, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '黄晓明', 'tagSource': '' }, { 'tagId': 578, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '邓超', 'tagSource': '' }],
        contentForm: [{ 'tagId': 576, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '赵丽颖', 'tagSource': '' }, { 'tagId': 577, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '黄晓明', 'tagSource': '' }, { 'tagId': 578, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '邓超', 'tagSource': '' }]
      }

      this.getAppTypeList()
      this.getShopNameList()
      this.getGoodTypeList()
    },
    getShopNameList () {
      this.searchDataList.shopNameList = [{ 'sourceId': 10045, 'sourceName': '上海形趣信息科技有限公司' }, { 'sourceId': 10044, 'sourceName': '优翼生活' }, { 'sourceId': 10043, 'sourceName': '小悠娱乐旗舰店' }, { 'sourceId': 10042, 'sourceName': '体感总动员' }, { 'sourceId': 10038, 'sourceName': '和润国际' }, { 'sourceId': 10037, 'sourceName': '三佑雅越' }, { 'sourceId': 10036, 'sourceName': '四川新希望营养饮品有限公司' }, { 'sourceId': 10035, 'sourceName': '启鸿星科技' }, { 'sourceId': 10034, 'sourceName': '北京流金岁月文化传播股份有限公司' }, { 'sourceId': 10033, 'sourceName': '大连新锐天地传媒有限公司' }, { 'sourceId': 10032, 'sourceName': '美淘淘' }, { 'sourceId': 10031, 'sourceName': '深圳讯声智控科技有限公司' }, { 'sourceId': 10030, 'sourceName': '苏州运智互动科技有限公司' }, { 'sourceId': 10029, 'sourceName': '深圳市泽希生物科技有限公司' }, { 'sourceId': 10028, 'sourceName': '湖南拍形文化传播有限公司' }, { 'sourceId': 10027, 'sourceName': '深圳新游畅玩科技有限公司' }, { 'sourceId': 10026, 'sourceName': '中视购物' }, { 'sourceId': 10025, 'sourceName': '重庆勾正数据科技有限公司' }, { 'sourceId': 10024, 'sourceName': 'CIBN-拓亚' }, { 'sourceId': 67, 'sourceName': '聚好拍-小宇商贸' }, { 'sourceId': 66, 'sourceName': '德腾泰达' }, { 'sourceId': 65, 'sourceName': '八零商贸' }, { 'sourceId': 64, 'sourceName': '山东海莱' }, { 'sourceId': 63, 'sourceName': '百盈优品' }, { 'sourceId': 62, 'sourceName': '来次购' }, { 'sourceId': 61, 'sourceName': '酷开官网' }, { 'sourceId': 60, 'sourceName': '养生堂' }, { 'sourceId': 58, 'sourceName': '风尚购物' }, { 'sourceId': 54, 'sourceName': '飞利浦' }, { 'sourceId': 46, 'sourceName': '测试专用的一个商户账号' }, { 'sourceId': 45, 'sourceName': '周边商家' }, { 'sourceId': 43, 'sourceName': '家有购物' }, { 'sourceId': 42, 'sourceName': '环球购物' }, { 'sourceId': 41, 'sourceName': 'CIBN' }, { 'sourceId': 8, 'sourceName': '酷开科技-总店' }]
    },
    getGoodTypeList () {
      this.searchDataList.goodTypeList = []
    },
    getAppTypeList () {
      let data = [{ 'children': [{ 'children': [{ 'id': 101, 'text': '系统工具' }, { 'id': 102, 'text': '生活实用' }, { 'id': 103, 'text': '学习教育' }, { 'id': 113, 'text': '运动健康' }, { 'id': 116, 'text': '图文资讯' }, { 'id': 123, 'text': '购物理财' }, { 'id': 124, 'text': '旅行美食' }], 'name': '软件', 'id': 1, 'state': 'open' }, { 'children': [{ 'id': 104, 'text': '休闲益智' }, { 'id': 105, 'text': '体育竞技' }, { 'id': 106, 'text': '策略冒险' }, { 'id': 117, 'text': '桌游棋牌' }, { 'id': 118, 'text': '跑酷竞速' }, { 'id': 119, 'text': '动作射击' }, { 'id': 120, 'text': '格斗游戏' }, { 'id': 121, 'text': '角色扮演' }, { 'id': 122, 'text': '儿童乐园' }, { 'id': 125, 'text': '遥控器' }, { 'id': 126, 'text': '手柄游戏' }], 'name': '游戏', 'id': 2, 'state': 'open' }, { 'children': [{ 'id': 107, 'text': '视频' }, { 'id': 109, 'text': '音乐' }, { 'id': 185, 'text': '全部影音' }], 'name': '影音', 'id': 3, 'state': 'open' }, { 'children': [{ 'id': 183, 'text': '最新上线' }], 'name': '最新上线父分类', 'id': 184, 'state': 'open' }], 'name': '全部', 'id': '', 'state': 'open' }]
      data[0].children.forEach((item, i) => {
        item.children.forEach((child, j) => {
          this.searchDataList.appTypeList.push(child)
        })
      })
    },
    clickLoadingClose (flag) {
      // this.search()
    },
    getSearchParams (params) {
      let vBusType = params.businessType
      // if (vBusType === 0) {
      //   this.options.initTableColumns = this.options.tableColumns
      //   this.isMovieOrTeach = true
      // } else if (vBusType === 1) {
      //   this.options.initTableColumns = this.options.tableColumnsTeach
      //   this.isMovieOrTeach = true
      // } else if (vBusType === 2) {
      //   this.options.initTableColumns = this.options.tableColumnsShop
      //   this.isMovieOrTeach = false
      // } else if (vBusType === 3) {
      //   this.options.initTableColumns = this.options.tableColumnsApp
      //   this.isMovieOrTeach = false
      // }
      // this.search()
    },
    getSearchNameList (params) {
      console.log(params)
      let list = []
      if (params.tagName === '赵丽颖') {
        list = [{ 'tagId': 576, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '赵丽颖', 'tagSource': '' }]
      } else {
        list = [{ 'tagId': 576, 'tagCategoryId': 55, 'tagEnName': '', 'tagCnName': '其他', 'tagSource': '' }]
      }
      this.$refs.videoFilter.querySearchFun(list)
    }
  },
  created () {
    this.getSearchCondition()
  }
}
</script>
