/***********************************************************************************************
 *@name   : VideoFilter
 *@desc   : 影片筛选器
 ***********************************************************************************************/
 <template>
  <div class="video-filter-cont" v-loading="loading">
        <div class="search-cont-header">
          <el-row>
            <el-col :span="14">
              <span class="search-cont-text">业务</span>
              <el-select class="search-cont-small" v-model="filterForm.businessType" @change="businessTypeChange">
                  <el-option v-for="item in businessTypeList" :key="item.name" :label="item.label" :value="item.value" :disabled="filterForm.businessType !== item.value && setIsDisabled.isBusType"></el-option>
              </el-select>
              <div v-if="filterForm.businessType === 0" class="search-cont-par">
                <span class="search-cont-text">渠道</span>
                <el-select class="search-cont-small" v-model="filterForm.partner" size="small" @change="searchChannelMovieData" :disabled="setIsDisabled.isPartner">
                    <el-option v-for="sList in queryPartnerList" size="small" :key="sList.partnerId" :label="sList.sourceTitle" :value="sList.partnerName">{{sList.sourceTitle}}</el-option>
                </el-select>
                <span class="search-cont-text">源</span>
                <el-select class="search-cont-small" v-model="filterForm.sources" size="small" @change="searchChannelSourceData" placeholder="请选择内容源" :disabled="setIsDisabled.isSources">
                    <el-option label="不限" value="">不限</el-option>
                    <el-option v-for="sList in sourceList" size="small" :key="sList.partnerId" :label="sList.sourceName" :value="sList.partnerName">{{sList.sourceName}}</el-option>
                </el-select>
                <el-cascader
                  class="search-cont-medium search-cont-medium-one"
                  @change="handleCategoryType"
                  v-if="currentSource.child"
                  :options="currentSource.child"
                  v-model="filterForm.category"
                  placeholder="选择分类"
                  popper-class="search-cont-cascader"
                  :props="{multiple: true, checkStrictly: true, value: 'categoryId', label: 'categoryName', disabled:setIsDisabled.isCategory}"
                  clearable></el-cascader>
                <el-cascader
                  class="search-cont-medium search-cont-medium-two"
                  v-if="currentCategory.child && currentCategory.child[0]"
                  @change="handleCategoryTypeTwo"
                  :options="currentCategory.child[0].tagEntities"
                  v-model="filterForm.videoTypes"
                  placeholder="二级分类"
                  popper-class="search-cont-cascader"
                  :props="{multiple: true, checkStrictly: true, value: 'tagName', label: 'tagName'}"
                  clearable></el-cascader>
              </div>
              <div v-if="filterForm.businessType === 1" class="search-cont-par">
                <span class="search-cont-text">付费类型</span>
                <el-select class="search-cont-small" v-model="filterForm.payTypes" size="small">
                  <el-option label="不限" value="">不限</el-option>
                  <el-option v-for="payType in searchCondition.payTypes" :key="payType.tagId" :label="payType.tagCnName" :value="payType.tagEnName">{{ payType.tagCnName }}</el-option>
                </el-select>
                <el-cascader
                  class="search-cont-medium search-cont-medium-three"
                  @change="handleContentProviders"
                  v-if="searchCondition.contentProviders"
                  :options="searchCondition.contentProviders"
                  v-model="filterForm.contentProviders"
                  placeholder="内容商"
                  popper-class="search-cont-cascader"
                  :props="{multiple: true, checkStrictly: true, value: 'tagCnName', label: 'tagCnName'}"
                  clearable></el-cascader>
                  <span class="search-cont-text">年龄段</span>
                  <el-select class="search-cont-small" v-model="filterForm.category" size="small" @change="handleCategoryType">
                    <el-option label="不限" value="">不限</el-option>
                    <el-option v-for="category in currentSource.child" size="small" :key="category.categoryId" :label="category.categoryName" :value="category.categoryId">{{category.categoryName}}</el-option>
                  </el-select>
              </div>
            </el-col>
            <el-col :span="10">
              <div class="search-cont-fr ">
                <el-input v-model="filterForm.title" size="small" placeholder="请输入关键词" @keyup.enter.native="search" style="width: 200px;"></el-input>
                <el-button type="primary" size="small" icon="el-icon-search" @click.stop="search">搜索</el-button>
                <el-button :icon="isMore ? 'el-icon-arrow-up' : 'el-icon-arrow-down'" size="small" @click="clickMoreBtn">{{moreText}}高级搜索</el-button>
              </div>
            </el-col>
          </el-row>
      </div>
      <div v-show="isMore" class="search-cont-form">
        <el-form :model="filterForm" ref="filterForm" label-width="80px">
            <div v-show="filterForm.businessType === 0 || filterForm.businessType === 1">
              <div class="search-cont-more">
                <el-form-item label="是否上架">
                  <el-select class="search-cont-small" v-model="filterForm.status" @change="handleStatusChange">
                    <el-option label="不限" value="">不限</el-option>
                    <el-option label="上架" :value="0"></el-option>
                    <el-option label="下架" :value="1"></el-option>
                    <el-option label="审核不通过" :value="3"></el-option>
                    <el-option label="待审核" :value="2"></el-option>
                    <el-option label="草稿" :value="6"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="牌照" v-if="mvShow">
                  <el-select class="search-cont-small" v-model="filterForm.license" size="small">
                    <el-option label="不限" value=""></el-option>
                    <el-option v-show="filterForm.sources === 'tencent'" label="共有内容" value="SNM,NewTV"></el-option>
                    <el-option v-show="filterForm.sources === 'tencent'" label="南传" value="SNM"></el-option>
                    <el-option v-show="filterForm.sources === 'tencent'" label="未来" value="NewTV"></el-option>
                    <el-option v-show="filterForm.sources === 'yinhe'" label="银河" value="GiTv"></el-option>
                    <el-option v-show="filterForm.sources === 'youku'" label="CIBN" value="CIBN"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="入库时间">
                  <el-select class="search-cont-small" v-model="filterForm.synDate" size="small">
                    <el-option label="不限" value=""></el-option>
                    <el-option v-for="synDate in searchCondition.synDate" :key="synDate.tagCnName" :label="synDate.tagCnName" :value="synDate.tagCnName">{{ synDate.tagCnName }}天</el-option>
                  </el-select>
                </el-form-item>
                <!-- <el-form-item v-if="!mvShow" label="时长">
                  <el-select class="search-cont-small" v-model="filterForm.synDate" size="small">
                    <el-option label="不限" value=""></el-option>
                  </el-select>
                </el-form-item> -->
                <el-form-item v-if="!mvShow" label="内容形式">
                  <el-select class="search-cont-small" v-model="filterForm.contentForm" size="small">
                    <el-option v-for="contentForm in searchCondition.contentForm" :key="contentForm.tagEnName" :label="contentForm.tagCnName" :value="contentForm.tagEnName">{{ contentForm.tagCnName }}</el-option>
                  </el-select>
                </el-form-item>
              </div>
              <el-form-item v-if="!mvShow" label="年级/年龄">
                  <el-checkbox-group v-model="filterForm.gradeList" size="small">
                      <el-checkbox-button v-for="category in gradeList" :key="category.tagCnName" :label="category.tagCnName">{{ category.tagCnName }}</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="!mvShow" label="内容分类">
                  <el-checkbox-group v-model="filterForm.videoTypes" v-if="currentCategory.child && currentCategory.child[0]" size="small">
                      <el-checkbox-button v-for="movie in currentCategory.child[0].tagEntities" :key="movie.tagId" :label="movie.tagName">{{ movie.tagName }}</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="mvShow" label="素材类型">
                  <el-checkbox-group v-model="filterForm.contentTypes" size="small">
                      <el-checkbox-button v-for="contentType in searchCondition.contentTypes" :key="contentType.contentTypeId" :label="contentType.contentTypeId">{{ contentType.contentType }}</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="mvShow" label="付费类型">
                  <el-checkbox-group v-model="filterForm.payTypes" size="small">
                      <el-checkbox-button v-for="payType in searchCondition.payTypes" :key="payType.tagId" :label="payType.tagEnName">{{ payType.tagCnName }}</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="mvShow" label="导演">
                  <el-checkbox-group v-model="filterForm.directors" size="small">
                      <el-checkbox-button v-for="director in searchCondition.directors" :key="director.tagId" :label="director.tagCnName">{{ director.tagCnName }}</el-checkbox-button>
                      <el-autocomplete v-model="directorsSearch" :fetch-suggestions="directorQuerySearch" @select="directorHandleSelect" :trigger-on-focus="false" size="small" style="margin-left: 5px;" placeholder="请输入导演名称"></el-autocomplete>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="mvShow" label="主演">
                  <el-checkbox-group v-model="filterForm.actors" size="small">
                      <el-checkbox-button v-for="actor in searchCondition.actors" :key="actor.tagId" :label="actor.tagCnName">{{ actor.tagCnName }}</el-checkbox-button>
                      <el-autocomplete v-model="actorsSearch" :fetch-suggestions="actorQuerySearch" @select="actorHandleSelect" :trigger-on-focus="false" size="small" style="margin-left: 5px;" placeholder="请输入演员名称"></el-autocomplete>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="mvShow" label="影片格式">
                  <el-checkbox-group v-model="filterForm.videoFormat" size="small">
                      <el-checkbox-button v-for="videoFormat in searchCondition.videoFormat" :key="videoFormat.tagEnName" :label="videoFormat.tagEnName">{{ videoFormat.tagCnName }}</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>

              <el-form-item v-if="!mvShow" label="动漫明星">
                  <el-checkbox-group v-model="filterForm.cartoonStar" size="small">
                      <el-checkbox-button v-for="actor in searchCondition.cartoonStar" :key="actor.tagId" :label="actor.tagCnName">{{ actor.tagCnName }}</el-checkbox-button>
                      <el-autocomplete v-model="cartoonStarSearch" :fetch-suggestions="cartoonStarQuerySearch" @select="cartoonStarHandleSelect" :trigger-on-focus="false" size="small" style="margin-left: 5px;" placeholder="请输入动漫明星名称"></el-autocomplete>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="!mvShow" label="课程版本">
                  <el-checkbox-group v-model="filterForm.courseVersion" size="small">
                      <el-checkbox-button v-for="videoFormat in searchCondition.courseVersion" :key="videoFormat.tagCnName" :label="videoFormat.tagCnName">{{ videoFormat.tagCnName }}</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="!mvShow" label="集数">
                  <el-checkbox-group v-model="filterForm.segmentTag" size="small">
                      <el-checkbox-button v-for="videoFormat in searchCondition.segmentTag" :key="videoFormat.tagEnName" :label="videoFormat.tagEnName">{{ videoFormat.tagCnName }}</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item v-if="!mvShow" label="是否全集">
                  <el-checkbox-group v-model="filterForm.updateStatus" size="small">
                      <el-checkbox-button  :label="0">不限</el-checkbox-button>
                      <el-checkbox-button  :label="1">是</el-checkbox-button>
                  </el-checkbox-group>
              </el-form-item>

              <el-form-item label="地区">
                  <el-checkbox-group v-model="filterForm.areas" size="small">
                      <el-checkbox-button v-for="area in searchCondition.areas" :key="area.tagId" :label="area.tagCnName">{{ area.tagCnName }}</el-checkbox-button>
                      <el-autocomplete v-model="areasSearch" :fetch-suggestions="areaQuerySearch" @select="areaHandleSelect" :trigger-on-focus="false" size="small" style="margin-left: 5px;" placeholder="请输入地区名称"></el-autocomplete>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item class="search-cont-year" v-if="mvShow" label="年代">
                <el-radio-group v-model="filterForm.yearListCurr" size="small" @change="clickYearListChange">
                    <el-radio-button v-for="item in searchCondition.yearList" :key="item.tagId" :label="item.tagEnName">{{ item.tagCnName }}</el-radio-button>
                </el-radio-group>
                <el-input class="search-cont-small" type="number" size="small" v-model="filterForm.yearStart" @blur="yearStartListen"></el-input>年 -
                <el-input class="search-cont-small" type="number" size="small" v-model="filterForm.yearEnd" @blur="yearEndListen"></el-input>年
              </el-form-item>
              <el-form-item label="内容标签">
                  <el-checkbox-group v-model="filterForm.contentTag" size="small">
                      <el-checkbox-button v-for="label in searchCondition.contentTag" :key="label.tagCnName" :label="label.tagCnName">{{ label.tagCnName }}</el-checkbox-button>
                      <el-autocomplete v-model="contentTagSearch" :fetch-suggestions="contentLabelQuerySearch" @select="contentLabelHandleSelect" :trigger-on-focus="false" size="small" style="margin-left: 5px;" placeholder="请输入内容标签"></el-autocomplete>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item label="影片标签">
                  <div v-for="(list, index) in movieTagsList" :key="index">
                      <el-select
                          v-model="list.addVideoTag"
                          filterable
                          remote
                          reserve-keyword
                          placeholder="请输入关键词"
                          :remote-method="remoteVideoTagMethod"
                          :loading="loading">
                          <el-option
                              v-for="item in videoTagList"
                              :key="item.tagId"
                              :label="item.tagCnName"
                              :value="item">
                              {{item.tagCnName}}（{{stringToName(item.pathName)}}）
                          </el-option>
                      </el-select>
                      <el-button type="primary" size="small" @click.stop="addTagsLabel(index)"><i class="el-icon-plus"></i> 选择标签</el-button>
                      <el-tag
                              v-for="(tag, index) in list.tags"
                              :key="index"
                              closable
                              :disable-transitions="false"
                              @close="handleTagsClose(tag, index)">
                          {{tag.tagCnName}}
                      </el-tag>
                  </div>
                  <el-button type="primary" size="small" @click.stop="addTagsList"><i class="el-icon-plus"></i> 且</el-button>
              </el-form-item>
              <el-form-item label="排序方式">
                  <el-radio-group v-model="filterForm.orderBy" size="small">
                      <el-radio-button v-for="order in searchCondition.orderBy" :key="order.tagId" :label="order.tagEnName" :value="order.tagEnName">{{ order.tagCnName }}</el-radio-button>
                  </el-radio-group>
                  <el-tooltip :content="orderTip">
                      <el-button :icon="filterForm.order === 'asc' ? 'el-icon-arrow-up' : 'el-icon-arrow-down'" size="mini" style="margin-right:10px" @click="changeSort()">
                          <span v-if="filterForm.order === 'asc'">升序</span>
                          <span v-else>降序</span>
                      </el-button>
                  </el-tooltip>
              </el-form-item>
            </div>
            <div class="search-cont-input-w" v-show="filterForm.businessType === 2">
              <el-form-item label="店铺名称">
                  <el-select v-model="filterForm.shopName" size="small">
                      <el-option v-for="shop in shopNameList" :key="shop.sourceId" :label="shop.sourceName" :value="shop.sourceName">{{shop.sourceName}}</el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="商品类型">
                  <el-select v-model="filterForm.goodType" size="small">
                      <el-option v-for="good in goodTypeList" :key="good.categoryId" :label="good.categoryName" :value="good.categoryName">{{good.categoryName}}</el-option>
                  </el-select>
              </el-form-item>
              <!-- <el-form-item label="价格区间" class="rotate_show_box_price">
                  <el-input v-model="filterForm.priceLow" size="small" type="text"></el-input> - <el-input v-model="filterForm.priceUp" size="small" type="text"></el-input>
              </el-form-item> -->
              <!-- <el-form-item label="更新时间">
                  <el-date-picker v-model="filterForm.startTime" type="date" placeholder="选择开始日期"></el-date-picker> - <el-date-picker v-model="filterForm.endTime" type="date" placeholder="选择结束日期"></el-date-picker>
              </el-form-item> -->
              <el-form-item label="商品名称">
                  <el-input v-model="filterForm.goodName" size="small" type="text"></el-input>
              </el-form-item>
              <el-form-item label="商品信息">
                  <el-input v-model="filterForm.tag" size="small" type="text"></el-input>
              </el-form-item>
            </div>
            <div class="search-cont-input-w" v-show="filterForm.businessType === 3">
              <el-form-item label="应用分类">
                  <el-select v-model="filterForm.appType" size="small">
                      <el-option v-for="app in appTypeList" :key="app.id" :label="app.text" :value="app.text">{{app.text}}</el-option>
                  </el-select>
              </el-form-item>
              <!-- <el-form-item label="更新时间：">
                  <el-date-picker v-model="filterForm.startTime" type="date" placeholder="选择开始日期"></el-date-picker> - <el-date-picker v-model="filterForm.endTime" type="date" placeholder="选择结束日期"></el-date-picker>
              </el-form-item> -->
              <el-form-item class="search-cont-label-w" label="应用ID/名称">
                  <el-input v-model="filterForm.appName" size="small" type="text"></el-input>
              </el-form-item>
            </div>
        </el-form>
        <div class="search-cont-ft text-center">
          <el-button type="primary" size="small" @click.stop="search">查询</el-button>
          <el-button size="small" @click="clickResetFilter">重置筛选条件</el-button>
        </div>
      </div>

      <el-dialog size="full" title="影片标签库" :visible.sync="dialogTagsLabelVisible">
        <div v-if="dialogTagsLabelVisible">
          <div class="set-tags-cont">
            <VideoTagList ref="ccMediaTag" :movieTagsList="movieTags" @get-tag-nodes="getTagNodes" />
          </div>
          <div class="text-center">
            <el-button type="primary" @click="setTagsConfirm">确认</el-button>
            <el-button @click="setTagsCancel">关闭</el-button>
          </div>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import VideoTagList from '../../video-tags/src/VideoTags'
export default {
  name: 'CVideoFilter',
  components: {
    VideoTagList
  },
  props: {
    setVideoFilter: { // 设置筛选器参数
      type: Object,
      default: function () {
        return {}
      }
    },
    setIsDisabled: { // 是否可以禁止选择
      type: Object,
      default: function () {
        return {
          isBusType: false,
          isPartner: false,
          isSource: false,
          isCategory: false
        }
      }
    },
    searchDataList: { // 是否可以禁止选择
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      loading: false,
      filterForm: {
        title: '',
        videoKey: '', // 关键词
        partner: '', // 渠道
        sources: '', // 内容源
        license: '', // 牌照商
        category: undefined, // 频道类型
        videoTypes: [], // 影片类型
        contentTypes: [], // 素材类型
        payTypes: [], // 付费类型
        directors: [], // 导演
        actors: [], // 主演
        areas: [], // 地区
        videoFormat: [], // 影片格式
        yearListCurr: '', // 年代
        yearStart: null, // 开始年代
        yearEnd: null, // 结束年代
        synDate: '', // 同步时间
        contentForm: '0', // 内容形式
        contentTag: [], // 内容标签
        provider: [], // 供应商
        order: 'desc', // 排序方式 asc:升序，desc：降序，默认降序
        orderBy: '', // 排序字段
        orderbyJoin: '', // 排序拼接
        videoKeyTag: '', // 设置标签值
        businessType: 0, // 业务线类型:0影视,1教育
        status: 0,
        offVideo: 1,
        cartoonStar: [], // 卡通明星
        courseVersion: [], // 课程版本
        segmentTag: [], //  是否多集
        updateStatus: [], // 是否全集
        contentProviders: [], // 内容供应商
        gradeList: [], // 年级／年龄
        teachTypes: [], // 教育分类
        shopName: '', // 购物商品名称
        goodType: '', // 购物商品类型
        priceLow: '', // 购物价格区间
        priceUp: '', // 购物价格区间
        startTime: '', // 购物更新时间
        endTime: '', // 购物更新时间
        goodName: '', // 购物商品名称
        tag: '', // 购物商品信息
        appType: '', // 应用分类
        appName: '' // 应用名称
      },
      businessTypeList: [],
      searchCondition: {}, // 搜索条件
      currentSource: {}, // 当前选中的source数据
      gradeList: [],
      currentCategory: {}, // 当前选中的Category数据
      businessType: 0, // 业务类型
      directorsSearch: '', // 导演搜索字段
      actorsSearch: '', // 主演搜索字段
      contentProvidersSearch: '', // 内容商搜索字段
      cartoonStarSearch: '', // 动漫明星搜索字段
      areasSearch: '', // 地区搜索字段
      contentTagSearch: '', // 内容标签搜索字段
      orderTip: '降序排列', // 排序按钮文字提示
      shopNameList: [],
      goodTypeList: [],
      appTypeList: [],
      queryPartnerList: [],
      querySourceList: [],
      sourceList: [],
      checkMovieSource: '',
      licenseFilter: '',
      isMore: false,
      mvShow: true,
      moreText: '展开',
      movieTags: [],
      movieTagsList: [{
        addVideoTag: {},
        tags: []
      }],
      videoTagList: [],
      dialogTagsLabelVisible: false,
      isBusTypeChange: false,
      cbFun: undefined
    }
  },
  watch: {
    filterForm: {
      handler: function () {
      },
      deep: true // 深度观察
    },
    setVideoFilter: {
      handler: function () {
        this.watchFilterFun()
        this.search()
      },
      deep: true // 深度观察
    },
    setIsDisabled: {
      handler: function () {
      },
      deep: true // 深度观察
    }
  },
  methods: {
    searchChannelMovieData () { // 全部按渠道查看影片
      this.filterForm.sources = ''
      this.filterForm.license = ''
      this.getPartnerToSourceData()
    },
    getPartnerToSourceData () { // 全部按渠道查看影片
      const partnerName = this.filterForm.partner
      const souList = [].concat(this.querySourceList)
      this.sourceList = []
      if (partnerName === '') {
        this.sourceList = souList
      } else {
        let result = this.queryPartnerList.filter((item) => {
          return item.partnerName === partnerName
        })
        this.sourceList = result[0].childVideoPartnerInfoList
      }
      console.log(this.sourceList)
    },
    searchChannelSourceData () { // 全部按内容源查看影片
      // if (this.isMore) {
      //   this.clickMoreBtn()
      // }
      // this.search()
    },
    clickMoreBtn () {
      this.isMore = !this.isMore
      if (this.isMore) {
        this.moreText = '收起'
      } else {
        this.moreText = '展开'
      }
    },
    businessTypeChange (btVal) { // 业务类型改变事件
      this.currentSource = this.searchCondition.sources.filter(item => {
        let busType = ''
        if (btVal === 0) {
          busType = 'movie'
        } else if (btVal === 1) {
          busType = 'teach'
        }
        return item.name === busType
      })[0] || []

      if (btVal === 0) {
        this.mvShow = true
        this.filterForm.payTypes = []
        this.filterForm.category = []
      } else {
        this.mvShow = false
        this.filterForm.payTypes = ''
        this.filterForm.category = ''
      }
      const ctList = document.querySelectorAll('.el-cascader__tags')
      if (ctList) {
        ctList.forEach(item => {
          item.innerHTML = ''
        })
      }
      this.isBusTypeChange = true
      localStorage.businessTypeVal = btVal
      this.filterForm.businessType = btVal
      this.clickResetFilterFun()
      this.handleCategoryType(this.filterForm.category)
      // localStorage.businessTypeVal = this.filterForm.businessType
      this.$emit('get-search-params', this.filterForm)
    },
    handleCategoryType (data) { // 频道类型改变事件
      if (data === undefined || data === '') return
      this.currentCategory = []
      const child = this.currentSource.child
      if (this.filterForm.businessType === 0) {
        for (let i = 0; i < child.length; i++) {
          if (data.length === 1 && child[i].categoryId === parseInt(data[0])) {
            this.currentCategory = child[i]
            break
          }
        }
        const ctList = document.querySelector('.search-cont-medium-one .el-cascader__tags')
        if (ctList) {
          if (data.length < 1) {
            ctList.innerHTML = ''
          } else {
            ctList.innerHTML = '已选' + data.length + '项'
          }
        }
      } else if (this.filterForm.businessType === 1) {
        for (let i = 0; i < child.length; i++) {
          if (child[i].categoryId === parseInt(data)) {
            this.currentCategory = child[i]
            break
          }
        }
      }
      console.log(this.currentCategory)
      this.filterForm.videoTypes = []
      this.filterForm.gradeList = []

      let gradeList = this.searchCondition.gradeList
      let showGradeList = []
      switch (data) {
        case 44: // 幼儿
          showGradeList = gradeList.slice(0, 2)
          break
        case 45: // 小学
          showGradeList = gradeList.slice(2, 8)
          break
        case 46: // 初中
          showGradeList = gradeList.slice(8, 11)
          break
        case 47: // 高中
          showGradeList = gradeList.slice(11, 14)
          break
        default:
          showGradeList = []
      }
      this.gradeList = showGradeList
      // this.$emit('get-search-params', this.filterForm)
    },
    handleCategoryTypeTwo () {
      const len = this.filterForm.videoTypes.length
      const ctList = document.querySelector('.search-cont-medium-two .el-cascader__tags')
      if (ctList) {
        if (len < 1) {
          ctList.innerHTML = ''
        } else {
          ctList.innerHTML = '已选' + len + '项'
        }
      }
      console.log(this.filterForm.videoTypes)
    },
    handleContentProviders () {
      const len = this.filterForm.contentProviders.length
      const ctList = document.querySelector('.search-cont-medium-three .el-cascader__tags')
      if (ctList) {
        if (len < 1) {
          ctList.innerHTML = ''
        } else {
          ctList.innerHTML = '已选' + len + '项'
        }
      }
      console.log(this.filterForm.contentProviders)
    },
    clickResetFilter () {
      this.clickResetFilterFun()
    },
    clickResetFilterFun () {
      this.filterForm = {
        title: '',
        videoKey: '', // 关键词
        partner: '', // 渠道
        sources: '', // 内容源
        license: '', // 牌照商
        category: undefined, // 频道类型
        videoTypes: [], // 影片类型
        contentTypes: [], // 素材类型
        payTypes: [], // 付费类型
        directors: [], // 导演
        actors: [], // 主演
        areas: [], // 地区
        videoFormat: [], // 影片格式
        yearListCurr: '', // 年代
        yearStart: null, // 开始年代
        yearEnd: null, // 结束年代
        synDate: '', // 同步时间
        contentForm: '0', // 内容形式
        contentTag: [], // 内容标签
        provider: [], // 供应商
        order: 'desc', // 排序方式 asc:升序，desc：降序，默认降序
        orderBy: '', // 排序字段
        orderbyJoin: '', // 排序拼接
        videoKeyTag: '', // 设置标签值
        businessType: this.filterForm.businessType, // 业务线类型:0影视,1教育
        status: 0,
        offVideo: 1,
        cartoonStar: [], // 卡通明星
        courseVersion: [], // 课程版本
        segmentTag: [], //  是否多集
        updateStatus: [], // 是否全集
        contentProviders: [], // 内容供应商
        gradeList: [], // 年级／年龄
        teachTypes: [], // 教育分类
        shopName: '', // 购物商品名称
        goodType: '', // 购物商品类型
        priceLow: '', // 购物价格区间
        priceUp: '', // 购物价格区间
        startTime: '', // 购物更新时间
        endTime: '', // 购物更新时间
        goodName: '', // 购物商品名称
        tag: '', // 购物商品信息
        appType: '', // 应用分类
        appName: '', // 应用名称
        tagCodes: '' // 影视标签
      }
      if (!this.isBusTypeChange) {
        this.filterForm = Object.assign(this.filterForm, this.setVideoFilter)
      }
      this.directorsSearch = ''
      this.contentProvidersSearch = ''
      this.cartoonStarSearch = ''
      this.actorsSearch = ''
      this.areasSearch = ''
      this.contentTagSearch = ''
      this.movieTagsList = [{ addVideoTag: {}, tags: [] }]
      const ctListOne = document.querySelector('.search-cont-medium-one .el-cascader__tags')
      const ctListTwo = document.querySelector('.search-cont-medium-two .el-cascader__tags')
      const ctListThree = document.querySelector('.search-cont-medium-three .el-cascader__tags')
      if (ctListOne) ctListOne.innerHTML = ''
      if (ctListTwo) ctListTwo.innerHTML = ''
      if (ctListThree) ctListThree.innerHTML = ''
    },
    handleStatusChange (val) {
      if (val === 0) {
        this.filterForm.offVideo = 1
      } else if (val === 1) {
        this.filterForm.offVideo = 0
      } else {
        this.filterForm.offVideo = ''
      }
    },
    clickYearListChange () {
      let yearList = this.filterForm.yearListCurr.split('-')
      this.filterForm.yearStart = yearList[0]
      this.filterForm.yearEnd = yearList[1]
    },
    yearStartListen () {
      if (this.filterForm.yearStart && !+this.filterForm.yearStart) {
        alert('开始年代必须为数字')
        this.filterForm.yearStart = null
      }
    },
    yearEndListen () {
      if (this.filterForm.yearEnd && !+this.filterForm.yearEnd) {
        alert('开始年代必须为数字')
        this.filterForm.yearEnd = null
      }
    },
    querySearch (categoryName, queryString, cb) { // 输入意见查询
      let categories = this.searchCondition[categoryName]
      let tagCategoryId = categories[0] && categories[0].tagCategoryId
      let params = {
        requestCode: 1,
        tagCategoryId: tagCategoryId,
        tagName: queryString
      }
      this.cbFun = cb
      this.$emit('get-search-name-list', params)
    },
    querySearchFun (data) { // 输入意见查询
      console.log(data)
      for (let i = 0; i < data.length; i++) {
        data[i].value = data[i].tagCnName
      }
      this.cbFun(data)
    },
    handleSelect (categoryName, item, keyName) { // 处理选中输入意见事件
      let categories = this.searchCondition[categoryName]
      let c = categories.filter(function (category) { // 判断所选项是否已在列表中
        return category.tagId === item.tagId
      })
      if (c.length === 0) { // 如果不在列表中则加入列表进行显示
        categories.push(item)
      }
      this.filterForm[categoryName].push(item[keyName]) // 选中该项
      let searchInput = categoryName + 'Search'
      this[searchInput] = '' // 清空搜索框
    },
    directorQuerySearch (queryString, cb) { // 导演字段输入意见查询
      this.querySearch('directors', queryString, cb)
    },
    directorHandleSelect (item) { // 导演输入意见选择事件
      this.handleSelect('directors', item, 'tagCnName')
    },
    actorQuerySearch (queryString, cb) { // 主演字段输入意见
      this.querySearch('actors', queryString, cb)
    },
    actorHandleSelect (item) { // 主演输入意见选择事件
      this.handleSelect('actors', item, 'tagCnName')
    },
    contentProvidersQuerySearch (queryString, cb) { // 内容商字段输入意见
      this.querySearch('contentProviders', queryString, cb)
    },
    contentProvidersHandleSelect (item) { // 内容商输入意见选择事件
      this.handleSelect('contentProviders', item, 'tagCnName')
    },
    cartoonStarQuerySearch (queryString, cb) { // 动漫明星字段输入意见
      this.querySearch('cartoonStar', queryString, cb)
    },
    cartoonStarHandleSelect (item) { // 动漫明星输入意见选择事件
      this.handleSelect('cartoonStar', item, 'tagCnName')
    },
    areaQuerySearch (queryString, cb) { // 地区字段输入意见
      this.querySearch('areas', queryString, cb)
    },
    areaHandleSelect (item) { // 地区输入意见选择事件
      this.handleSelect('areas', item, 'tagCnName')
    },
    contentLabelQuerySearch (queryString, cb) { // 内容标签字段输入意见
      this.querySearch('contentTag', queryString, cb)
    },
    contentLabelHandleSelect (item) { // 内容标签输入意见选择事件
      this.handleSelect('contentTag', item, 'tagCnName')
    },
    changeSort: function () { // 修改排序按钮的点击事件
      if (this.filterForm.order === 'asc') {
        this.filterForm.order = 'desc'
        this.orderTip = '降序排列'
      } else {
        this.filterForm.order = 'asc'
        this.orderTip = '升序排列'
      }
    },
    getSearchForm () {
      let searchParams = Object.assign({}, this.filterForm)
      this.directorsSearch && searchParams.directors.push(this.directorsSearch)
      this.contentProvidersSearch && searchParams.contentProviders.push(this.contentProvidersSearch)
      this.cartoonStarSearch && searchParams.cartoonStar.push(this.cartoonStarSearch)
      this.actorsSearch && searchParams.actors.push(this.actorsSearch)
      this.areasSearch && searchParams.areas.push(this.areasSearch)
      this.contentTagSearch && searchParams.contentTag.push(this.contentTagSearch)
      if (searchParams.businessType === 1 && searchParams.category !== '') {
        searchParams.teachTypes = []
        this.currentSource.child.forEach(item => {
          if (item.categoryId === searchParams.category) {
            searchParams.teachTypes.push(item.categoryName)
          }
        })
      }
      // 将数组转为字符串
      let searchValue = {}
      for (let item in searchParams) {
        if (searchParams[item] instanceof Array) {
          if (searchParams[item].length > 0) {
            searchValue[item] = searchParams[item].join(',')
          }
        } else if (searchParams[item] !== '') {
          searchValue[item] = searchParams[item]
        }
      }
      console.log(searchValue)
      return searchValue
    },
    search () {
      if (this.isMore) {
        this.clickMoreBtn()
      }
      let mTags = []
      for (let i = 0; i < this.movieTagsList.length; i++) {
        let list = []
        for (let t = 0; t < this.movieTagsList[i].tags.length; t++) {
          list.push(this.movieTagsList[i].tags[t].tagCode)
        }
        if (this.movieTagsList[i].addVideoTag.tagCode) {
          list.push(this.movieTagsList[i].addVideoTag.tagCode)
        }
        mTags.push(list.join('@'))
      }
      this.filterForm.tagCodes = mTags.join('#')
      localStorage.businessTypeVal = this.filterForm.businessType
      this.$emit('get-search-params', this.filterForm)
    },
    watchFilterFun () {
      this.filterForm = Object.assign(this.filterForm, this.setVideoFilter)
      this.businessType = this.setVideoFilter.businessType
      if ((this.businessType === '' || this.businessType === undefined) && localStorage.businessTypeVal) {
        this.filterForm.businessType = parseInt(localStorage.businessTypeVal)
        if (this.filterForm.businessType === 0) {
          this.mvShow = true
          this.filterForm.payTypes = []
          this.filterForm.category = []
        } else {
          this.mvShow = false
          this.filterForm.payTypes = ''
          this.filterForm.category = ''
        }
      }
      this.businessTypeChange(this.filterForm.businessType)
    },
    addTagsLabel (index) {
      this.tagDialogNum = 2
      this.addTagIndex = index
      this.movieTags = [].concat(this.movieTagsList[index].tags)
      this.dialogTagsLabelVisible = true
    },
    addTagsList () {
      this.movieTagsList.push({ addVideoTag: {}, tags: [] })
    },
    remoteVideoTagMethod (query) {
      let params = {}
      params.tagCnName = query
      this.$service.getVideoTagDataList(params).then(data => {
        this.videoTagList = data.data
      }).catch(() => {
        this.$message.error('获取筛选数据失败，请重新打开页面重试')
      })
    },
    stringToName (str) {
      let arrs = str.split(',')
      return arrs.join('-')
    },
    handleTagsClose (tag, index) {
      if (index !== undefined) {
        for (let t = 0; t < this.movieTagsList[index].tags.length; t++) {
          if (this.movieTagsList[index].tags[t].tagCode === tag.tagCode) {
            this.movieTagsList[index].tags.splice(t, 1)
            break
          }
        }
      } else {
        for (let i = 0; i < this.movieTags.length; i++) {
          if (this.movieTags[i].tagCode === tag.tagCode) {
            this.movieTags.splice(i, 1)
            break
          }
        }
      }
      this.$refs.ccMediaTag.handleRemoveTag(tag)
    },
    getTagNodes: function (tagData) {
      if (tagData.length > 0) this.movieTags = [].concat(tagData)
      else this.movieTags = []
      console.log(tagData)
      this.movieTagsList[this.addTagIndex].tags = this.movieTags
      this.$refs.ccMediaTag.resetTagLoading(true)
      this.dialogTagsLabelVisible = false
    },
    setTagsConfirm: function () {
      // this.$refs.ccMediaTag.getTagDataList()
      this.dialogTagsLabelVisible = false
    },
    setTagsCancel: function () {
      // this.$refs.ccMediaTag.resetTagLoading(true)
      this.dialogTagsLabelVisible = false
    }
  },
  created () {
    this.queryPartnerList = this.searchDataList.queryRankPartnerList
    this.querySourceList = this.searchDataList.querySourceList
    this.businessTypeList = this.searchDataList.businessTypeList
    this.searchCondition = this.searchDataList.searchCondition
    this.shopNameList = this.searchDataList.shopNameList
    this.goodTypeList = this.searchDataList.goodTypeList
    this.appTypeList = this.searchDataList.appTypeList
    this.watchFilterFun()
    this.getPartnerToSourceData()
  }
}
</script>

<style lang='stylus'>
.video-filter-cont
  position relative
  margin 0px
  border 1px dashed #9eb6d0
  padding 3px 0
.search-cont-header
  padding 0px 3px 0px 9px
.search-cont-par
  display inline-block
.search-cont-text
  font-size 14px
  color #555555
  margin 0px 3px
.search-cont-small
  margin-right 10px
  width 80px
.search-cont-medium
  margin-right 10px
  width 100px
.search-cont-medium .el-cascader__tags
  padding-left 3px
  color #409eff
.search-cont-medium .el-cascader__tags .el-tag
  background-color #c3e6ff
.search-cont-fr
  text-align right
  > .el-button
    margin-left 3px
.video-filter-cont .el-icon-refresh-left
  position absolute
  right 0px
  top 0px
  z-index 999999
  width 20px
  height 20px
  line-height 20px
  text-align center
  background-color #e6a23c
  color #FFF
  cursor pointer
.video-filter-cont label
  margin-bottom 3px
.video-filter-cont .el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled)
  box-shadow none
.video-filter-cont .el-form-item--mini.el-form-item, .video-filter-cont .el-form-item--small.el-form-item
  margin-bottom 10px
.video-filter-cont .el-autocomplete
  vertical-align top
.search-cont-cascader .el-cascader-menu__wrap
  width 400px
.search-cont-cascader .el-cascader-node, .search-cont-cascader .el-cascader-menu:last-child .el-cascader-node
  padding 0px 10px
  display inline-block
.search-cont-form
  padding-top 15px
.search-cont-more .el-form-item
  display inline-block
.search-cont-year .el-checkbox-group
  margin-right 5px
  display inline-block
  vertical-align middle
.search-cont-year .el-input--small .el-input__inner
  padding 0px 5px !important
  > el-radio-group
    margin-right 5px
.search-cont-input-w .el-form-item
  display inline-block
.search-cont-input-w .el-input
  width 200px
.search-cont-label-w label
  width 95px !important
.search-cont-label-w .el-form-item__content
  margin-left 95px !important
.text-center
  text-align center
.search-cont-ft
  padding 5px 0 10px
  > .el-button:first-child
    width 200px
  > .el-button:last-child
    float right
    margin-right 10px
</style>
