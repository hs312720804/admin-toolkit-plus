<template>
  <div class="global-media-tag-data">
        <ul class="global-media-tag-ul">
            <li v-for="(tag, pIndex) in tagData" :key="pIndex">
                <div class="global-media-tag-data-intro">
                    <span>第<b>{{sectionToChinese(pIndex+1)}}</b>层</span>
                </div>
                <div class="global-media-tag-data-cont">
                    <el-checkbox-group v-model="tag.tagNode" size="small" @change="changeTag(pIndex, tag.tagNode)">
                        <el-checkbox-button v-for="item in tag.child" :key="item.tagId" :label="item" :class="[item.nodeType === 0 ? 'is-node-type' : 'is-node-tag', isCurrClass(item, tag.tagNode) ? 'is-checked' : '']">{{ item.tagCnName }}<label><!--<i @click.stop="getChildTagNode(pIndex, item)" :class="item.tagCode === tag.tagCodeOn ? 'el-icon-remove' : 'el-icon-circle-plus'"></i>--><input v-if="item.nodeType === 1" @click.stop="clickCheckedTagNode(pIndex, item)" class="global-media-tag-data-cont-input" type="checkbox" :checked="isCurrClass(item, tag.tagNode)"></label></el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div v-if="tag.nodeTotal > pageSize && tag.currentPage < tag.nodePage" class="global-media-tag-data-more text-center">
                    <span @click="getMoreNode(pIndex, tag.nodeTotal, tag.nodePage)">加载更多</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CVideoTags',
  props: {
    tagData: {
      type: Array,
      default: function () {
        return []
      }
    },
    movieTags: {
      type: Array,
      default: function () {
        return []
      }
    },
    tagDataBakInit: {
      type: Array,
      default: function () {
        return []
      }
    },
    pageSize: {
      type: Number,
      default: function () {
        return 0
      }
    }
  },
  watch: {
    tagData: {
      handler () {},
      deep: true
    },
    movieTags: {
      handler () {},
      deep: true
    },
    tagDataBakInit: {
      handler () {},
      deep: true
    },
    pageSize: {
      handler () {},
      deep: true
    }
  },
  data () {
    return {
      loading: false,
      tagDataBak: [],
      tagNodeIndex: 0,
      tagParentCode: '-1',
      tagCodeValue: '',
      tagNodeName: '',
      currentPage: 1, // 当前页
      isMoreIndex: 0
    }
  },
  methods: {
    clone: function (obj) {
      var _this = this
      var o
      switch (typeof obj) {
        case 'undefined':
          break
        case 'string':
          o = obj + ''
          break
        case 'number':
          o = obj - 0
          break
        case 'boolean':
          o = obj
          break
        case 'object':
          if (obj === null) {
            o = null
          } else {
            if (obj instanceof Array) {
              o = []
              for (var i = 0, len = obj.length; i < len; i++) {
                o.push(_this.clone(obj[i]))
              }
            } else {
              o = {}
              for (var k in obj) {
                o[k] = _this.clone(obj[k])
              }
            }
          }
          break
        default:
          o = obj
          break
      }
      return o
    },
    isCurrClass: function (item, tags) {
      let flag = false
      for (let i = 0; i < tags.length; i++) {
        if (item.tagCode === tags[i].tagCode) {
          flag = true
          break
        }
      }
      return flag
    },
    changeTag: function (index, tags) {
      console.log(tags)
      let _this = this
      if (tags === undefined) {
        return false
      }
      _this.tagDataBak = _this.tagDataBakInit
      let tagDataBakNode = []
      if (_this.tagDataBakInit.length > 0) {
        tagDataBakNode = _this.tagDataBak[index].tagNode
      }
      let tagDataNode = _this.tagData[index].tagNode
      let tagIndex = _this.tagData.length
      if (tagDataBakNode.length > tagDataNode.length) {
        // 减
        if (tagDataBakNode) {
          for (let t = 0; t < tagDataBakNode.length; t++) {
            let tag = tagDataBakNode[t]
            let flag = true
            for (let i = 0; i < tagDataNode.length; i++) {
              if (tag.tagCode === tagDataNode[i].tagCode) {
                flag = false
                break
              }
            }
            if (flag && tag.nodeType === 1) {
              for (let i = 0; i < _this.movieTags.length; i++) {
                if (tag.tagCode === _this.movieTags[i].tagCode) {
                  _this.movieTags.splice(i, 1)
                  _this.tagData.splice(index + 1, tagIndex)
                  _this.tagDataBak.splice(index + 1, tagIndex)
                  break
                }
              }
              break
            } else if (flag) {
              _this.tagData.splice(index + 1, tagIndex)
              _this.tagDataBak.splice(index + 1, tagIndex)
              break
            }
          }
        }
      } else {
        // 增
        let tagLast = tags[tags.length - 1]
        let flag = true
        if (tagLast.nodeType === 1) {
          if (_this.movieTags) {
            for (let i = 0; i < _this.movieTags.length; i++) {
              if (tagLast.tagCode === _this.movieTags[i].tagCode) {
                flag = false
                break
              }
            }
          }
          if (flag && tagLast.nodeType === 1) {
            _this.movieTags.push(tagLast)
          }
        } else {
          let arrList = []
          if (tagDataNode) {
            tagDataNode.forEach(function (item, i) {
              if (item.nodeType === 1 || i === tagDataNode.length - 1) {
                arrList.push(item)
              }
            })
          }
          _this.tagData[index].tagNode = [].concat(arrList)
        }
        _this.getChildTagNode(index, tagLast)
      }
      _this.tagDataBak = _this.clone(_this.tagData)
      _this.$emit('getTagNodes', _this.movieTags, _this.tagDataBak)
    },
    getChildTagNode: function (index, tags) {
      if (tags === undefined) {
        return false
      }
      this.isMoreIndex = 0
      this.currentPage = 1
      this.tagCodeValue = tags.tagCode
      this.tagParentCode = tags.tagCode
      this.tagNodeIndex = index + 1
      this.tagData[index].currentPage = 1
      this.tagData[index].tagCodeOn = tags.tagCode
      this.tagData.splice(index + 1, this.tagData.length)
      // this.getTagPageList()
      this.$emit('updateTagData', this.tagData)
      this.$emit('currTagData', this.tagParentCode, this.tagNodeIndex)
    },
    clickCheckedTagNode: function (index, tag) {
      let _this = this
      if (tag === undefined) {
        return false
      }
      let flag = true
      let tagNode = _this.tagData[index].tagNode
      if (tagNode) {
        for (let i = 0; i < tagNode.length; i++) {
          if (tag.tagCode === tagNode[i].tagCode) {
            tagNode.splice(i, 1)
            flag = false
            break
          }
        }
        for (let i = 0; i < this.movieTags.length; i++) {
          if (tag.tagCode === this.movieTags[i].tagCode) {
            this.movieTags.splice(i, 1)
            flag = false
            break
          }
        }
      }
      if (flag) {
        tagNode.push(tag)
        if (tag.nodeType === 1) {
          this.movieTags.push(tag)
        }
      }
      this.tagDataBak = this.clone(this.tagData)
      this.$emit('getTagNodes', this.movieTags, this.tagDataBak)
      this.$emit('updateTagData', this.tagData)
      // this.changeTag(index, tagNode)
    },
    getMoreNode: function (index, total, page) {
      if (total < this.pageSize) {
        return
      }
      let tagData = this.tagData[index - 1]
      if (index === 0) {
        this.tagCodeValue = ''
      } else {
        this.tagCodeValue = tagData.tagNode.tagCode
        this.tagParentCode = tagData.tagNode.tagCode
        this.tagNodeIndex = index
      }
      this.isMoreIndex = index
      tagData.currentPage++
      if (tagData.currentPage <= page) {
        this.currentPage = tagData.currentPage
        // this.getTagPageList()
        this.$emit('updateTagData', this.tagData)
        this.$emit('currTagData', this.tagParentCode, this.tagNodeIndex)
      }
    },
    sectionToChinese: function (section) {
      var chnNumChar = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
      var chnUnitChar = ['', '十', '百', '千']
      var strIns = ''; var chnStr = ''
      var unitPos = 0
      var zero = true
      while (section > 0) {
        var v = section % 10
        if (v === 0) {
          if (!zero) {
            zero = true
            chnStr = chnNumChar[v] + chnStr
          }
        } else {
          zero = false
          strIns = chnNumChar[v]
          strIns += chnUnitChar[unitPos]
          chnStr = strIns + chnStr
        }
        unitPos++
        section = Math.floor(section / 10)
      }
      return chnStr
    }
  }
}
</script>
<style lang="stylus">
    ul, li {
        list-style: none;
    }
    .global-media-tag-data .custom-collapse .el-checkbox-button, .global-media-tag-data .el-checkbox-button, .global-media-tag-data .el-radio-button {
        margin: 5px;
    }
    .global-media-tag-data .custom-collapse .el-checkbox-button__inner {
        width: 120px;
        border-left: 1px solid #dcdfe6;
        border-radius: 4px;
    }
    .global-media-tag-data .el-checkbox-button__inner, .global-media-tag-data .el-radio-button__inner {
        min-width: 120px;
        border-left: 1px solid #dcdfe6;
        border-radius: 4px;
    }
    .global-media-tag-data .custom-collapse .el-checkbox-button.is-checked .el-checkbox-button__inner,
    .global-media-tag-data .el-checkbox-button.is-checked .el-checkbox-button__inner,
    .global-media-tag-data .el-radio-button.is-active .el-radio-button__inner {
        border-left: 0;
    }
    .global-media-tag-data .el-checkbox-button:last-child .el-checkbox-button__inner,
    .global-media-tag-data .el-checkbox-button:first-child .el-checkbox-button__inner,
    .global-media-tag-data .el-radio-button:last-child .el-radio-button__inner {
        border-radius: 4px;
    }
    .global-media-tag-ul li {
        margin-bottom: 10px;
    }
    .el-checkbox-button.is-node-tag.is-checked .el-checkbox-button__inner {
        background-color: #20a0ff;
    }
    .el-checkbox-button.is-node-tag .el-checkbox-button__inner {
        border-color: #20a0ff;
    }
    .is-node-tag .el-checkbox-button__inner, .is-node-tag .el-radio-button__inner {
        border-left: 1px solid #20a0ff;
    }
    .el-checkbox-button.is-node-type.is-checked .el-checkbox-button__inner {
        background-color: #999;
        border-color: #999;
        box-shadow: -1px 0 0 0 #999;
    }
    .global-media-tag-data-cont label.el-checkbox-button {
        position: relative;
        margin-right: 26px;
    }
    .el-checkbox-button__inner .el-icon-remove, .el-checkbox-button__inner .el-icon-circle-plus {
        position: absolute;
        right: -18px;
        top: 5px;
        font-size: 14px;
        color: #333;
        width: 15px;
        height: 15px;
        line-height: 14px;
        font-weight: bold;
        border: 1px solid #ddd;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
    }
    .el-checkbox-button__inner .global-media-tag-data-cont-input {
        position: absolute;
        right: -28px;
        top: 1px;
        font-size: 14px;
        color: #333;
        width: 20px;
        height: 20px;
        line-height: 14px;
        font-weight: bold;
        border: 1px solid #ddd;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
    }
    .el-checkbox-button__inner .el-icon-remove, .el-checkbox-button__inner .el-icon-circle-plus:hover {
        background: #20a0ff;
        color: #FFF;
    }
    .el-icon-remove:before {
        content: "-";
    }
    .el-icon-circle-plus:before {
        content: "+";
    }
    .global-media-tag-data-more {
        font-size: 14px;
        color: #00b7ee;
        cursor: pointer;
    }
    .global-media-tag-data-cont {
        max-height:350px;
        overflow-y: auto;
    }
</style>
