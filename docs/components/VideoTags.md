# 标签列表    
`c-video-tags`  

## 示例  

### 效果

<Demo>
  <VideoTagsDemo />
</Demo>

### 代码  
```vue
<template>
  <div class="cc-video-tag">
    已选标签：
    <el-tag
            :key="tag.tagId"
            v-for="tag in movieTags"
            closable
            :disable-transitions="false"
            @close="handleTagsClose(tag)">
        {{tag.tagCnName}}
    </el-tag>
    <c-video-tags ref="ccMediaTag" :tagData="tagData" :tagDataBakInit="tagDataBak" :pageSize="pageSize" @currTagData="getCurrTagData" @getTagNodes="getTagNodes" @updateTagData="updateTagData" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      urls: {
        getTagPageListUrl: '/ccGlobalMediaTag/pageList.html'
      },
      tagData: [{
        tagCodeOn: '',
        tagNode: [],
        child: [],
        nodeTotal: 0,
        nodePage: 1,
        currentPage: 1
      }],
      tagDataBak: [],
      rows: [{
        "createdDate": "2019-05-16 18:59:44",
        "creater": 31,
        "lastUpdateDate": "2019-05-16 18:59:44",
        "level": 1,
        "modifier": 31,
        "nodeType": 0,
        "parentCode": "-1",
        "path": "1",
        "tagCnName": "媒资",
        "tagCode": "1",
        "tagId": 1,
        "tagStatus": 1,
        "videoCount": 0
      },
      {
        "createdDate": "2019-05-27 17:14:06",
        "creater": 31,
        "lastUpdateDate": "2019-05-27 17:14:06",
        "level": 1,
        "modifier": 31,
        "nodeType": 0,
        "parentCode": "-1",
        "path": "4",
        "tagCnName": "应用（勿动）",
        "tagCode": "4",
        "tagId": 4,
        "tagStatus": 1,
        "videoCount": 0
      },
      {
        "createdDate": "2019-05-27 17:14:13",
        "creater": 97,
        "lastUpdateDate": "2019-05-27 17:14:13",
        "level": 1,
        "modifier": 31,
        "nodeType": 0,
        "parentCode": "-1",
        "path": "9",
        "tagCnName": "购物（勿动）",
        "tagCode": "9",
        "tagId": 9,
        "tagStatus": 1,
        "videoCount": 0
      }],
      tagNodeUrl: [{
          perId: '',
          perUrl: []
      },{
          perId: 1,
          perUrl: [1, 5, 11]
      },{
          perId: 2,
          perUrl: [1, 5, 11]
      },{
          perId: 3,
          perUrl: [1, 5, 11]
      },{
          perId: 4,
          perUrl: [1, 5, 11]
      },{
          perId: 5,
          perUrl: [1, 5, 11]
      },{
          perId: 14,
          perUrl: [1, 5, 408]
      },{
          perId: 22,
          perUrl: [1, 5, 526]
      }],
      setNodeUrl: [],
      movieTags: [],
      setNodeFlag: false,
      setNodeIndex: 0,
      setNodePerId: 0,
      tagNodeIndex: 0,
      tagParentCode: '-1',
      tagCodeValue: '',
      tagNodeName: '',
      currentPage: 1, // 当前页
      pageSize: 1000000, // 每页记录数 默认先设置为数据列表显示形式的对应值
      isMoreIndex: 0
    };
  },
  created: function () {
      var _this = this;
      //_this.getTagPageList(); //初始化接口数据
      _this.getTagList();
  },
  methods: {
      clone: function (obj) {
          var _this = this;
          var o;
          switch (typeof obj) {
              case 'undefined':
                  break;
              case 'string':
                  o = obj + '';
                  break;
              case 'number':
                  o = obj - 0;
                  break;
              case 'boolean':
                  o = obj;
                  break;
              case 'object':
                  if (obj === null) {
                      o = null;
                  } else {
                      if (obj instanceof Array) {
                          o = [];
                          for (var i = 0, len = obj.length; i < len; i++) {
                              o.push(_this.clone(obj[i]));
                          }
                      } else {
                          o = {};
                          for (var k in obj) {
                              o[k] = _this.clone(obj[k]);
                          }
                      }
                  }
                  break;
              default:
                  o = obj;
                  break;
          }
          return o;
      },
      handleTagsClose(tag) {
        let _this = this;
        _this.movieTags.forEach(function (item, i) {
            if (item.tagCode === tag.tagCode) {
                _this.movieTags.splice(i, 1);
                return false
            }
        });
        _this.handleRemoveTag(tag)
      },
      handleRemoveTag(removeTagData) {
          let _this = this;
          let index = 0;
          if (removeTagData.level) {
              index = removeTagData.level - 1;
          }
          if (index < _this.tagData.length) {
              let tagNodes = _this.tagData[index].tagNode;
              tagNodes.forEach(function (item, i) {
                  if (item.tagCode === removeTagData.tagCode) {
                      _this.tagData[index].tagNode.splice(i, 1);
                      return false
                  }
              })
          }
      },
      setTagNodeUrl(perId) {
          let _this = this;
          _this.tagData.splice(1, _this.tagData.length);
          _this.tagData[0].tagNode = [];
          _this.setNodePerId = perId;
          _this.tagNodeUrl.forEach(function (item, i) {
              if (item.perId === perId) {
                  _this.setNodeUrl = item.perUrl;
                  return false
              }
          })
          _this.setNodeIndex = 0;
          if (_this.setNodeUrl.length > 0) {
              let tagNodes = _this.tagData[_this.setNodeIndex].child;
              let tags = [];
              for (let t=0; t<tagNodes.length; t++) {
                  if (tagNodes[t].tagCode == _this.setNodeUrl[_this.setNodeIndex]) {
                      _this.tagData[_this.setNodeIndex].tagNode.push(tagNodes[t]);
                      tags.push(tagNodes[t]);
                      break
                  }
              }
              _this.setNodeFlag = true;
              _this.ccMediaTag.changeTag(_this.setNodeIndex, tags);
          }
      },
      resetTagLoading(flag) {
          if (flag) {
              this.tagParentCode = -1;
              this.currentPage = 1;
              this.pageSize = 100;
              this.tagNodeIndex = 0;
              this.tagData = [{
                  tagCodeOn: '',
                  tagNode: [],
                  child: [],
                  nodeTotal: 0,
                  nodePage: 1,
                  currentPage: 1
              }];
              this.getTagPageList();
          }
      },
      getTagList: function () {  //测试数据
          let _this = this;
          let params = {};
          let nIndex = _this.tagData.length;
          params.parentCode = _this.tagParentCode;
          params.page = _this.currentPage;
          params.rows = _this.pageSize;
          if (_this.setNodeIndex === _this.setNodeUrl.length-1 && (_this.tagParentCode == 10 || _this.tagParentCode == _this.setNodeUrl[_this.setNodeUrl.length-1])) {
              params.perspectiveId = _this.setNodePerId;
          }
          let lists = [{
            "createdDate": "2019-05-16 18:59:44",
            "creater": 31,
            "lastUpdateDate": "2019-05-16 18:59:44",
            "level": _this.tagNodeIndex+1,
            "modifier": 31,
            "nodeType": 1,
            "parentCode": _this.tagNodeIndex,
            "path": "1",
            "tagCnName": "子标签" + _this.tagNodeIndex + '00',
            "tagCode": _this.tagNodeIndex,
            "tagId": _this.tagNodeIndex,
            "tagStatus": 1,
            "videoCount": 0
          },
          {
            "createdDate": "2019-05-27 17:14:06",
            "creater": 31,
            "lastUpdateDate": "2019-05-27 17:14:06",
            "level": _this.tagNodeIndex+1,
            "modifier": 31,
            "nodeType": 1,
            "parentCode":  + (_this.tagNodeIndex + 1),
            "path": "4",
            "tagCnName":  "子标签" + (_this.tagNodeIndex + 1) + '00',
            "tagCode":  (_this.tagNodeIndex + 1),
            "tagId":  (_this.tagNodeIndex + 1),
            "tagStatus": 1,
            "videoCount": 0
          },
          {
            "createdDate": "2019-05-27 17:14:13",
            "creater": 97,
            "lastUpdateDate": "2019-05-27 17:14:13",
            "level": _this.tagNodeIndex+1,
            "modifier": 31,
            "nodeType": 1,
            "parentCode": (_this.tagNodeIndex + 2),
            "path": "9",
            "tagCnName":  "子标签" + (_this.tagNodeIndex + 2) + '00',
            "tagCode": (_this.tagNodeIndex + 2),
            "tagId": (_this.tagNodeIndex + 2),
            "tagStatus": 1,
            "videoCount": 0
          }];
          if (_this.tagNodeIndex >= nIndex) {
            let tagJson = {
                tagCodeOn: '',
                tagNode: [],
                child: [],
                nodeTotal: 0,
                nodePage: 1,
                currentPage: 1
            }
            tagJson.child = lists;
            if (lists.length > 0) {
                _this.tagData.push(tagJson)
                //_this.tagData[_this.tagNodeIndex].nodeTotal = data.data.total;
                //_this.tagData[_this.tagNodeIndex].nodePage = Math.ceil(data.data.total/_this.pageSize);
                _this.tagData[_this.tagNodeIndex].nodeTotal = 0;
                _this.tagData[_this.tagNodeIndex].nodePage = 1;
                if (_this.tagData[_this.tagNodeIndex].child.length > 0) {
                    _this.tagData[_this.tagNodeIndex].child.forEach(function (item, i) {
                        if (_this.movieTags.length > 0) {
                            _this.movieTags.forEach(function (tag, t) {
                                if (item.tagCode === tag.tagCode) {
                                    _this.tagData[_this.tagNodeIndex].tagNode.push(tag);
                                    return false
                                }
                            })
                        }
                    })
                }
            }
        } else {
            if (_this.isMoreIndex > 0) {
                _this.tagData[_this.tagNodeIndex].child = _this.tagData[_this.tagNodeIndex].child.concat(_this.rows);
            } else {
                _this.tagData[_this.tagNodeIndex].child = _this.rows;
            }
            //_this.tagData[_this.tagNodeIndex].nodeTotal = data.data.total;
            _this.tagData[_this.tagNodeIndex].nodeTotal = 0;
            //_this.tagData[_this.tagNodeIndex].nodePage = Math.ceil(data.data.total/_this.pageSize);
            _this.tagData[_this.tagNodeIndex].nodePage = 1;
            if (_this.tagData[_this.tagNodeIndex].child.length > 0) {
                _this.tagData[_this.tagNodeIndex].child.forEach(function (item, i) {
                    if (_this.movieTags.length > 0) {
                        _this.movieTags.forEach(function (tag, t) {
                            if (item.tagCode === tag.tagCode) {
                                _this.tagData[_this.tagNodeIndex].tagNode.push(tag);
                                return false
                            }
                        })
                    }
                })
            }
        }
        let tagNodes = [];
        if (_this.tagData.length > 0) {
            _this.tagData.forEach(function (item, i) {
                tagNodes = tagNodes.concat(item.tagNode)
            });
        }
        _this.tagDataBak = _this.clone(_this.tagData);
        if (_this.setNodeIndex < _this.setNodeUrl.length-1 && _this.setNodeFlag) {
            _this.setNodeIndex++;
            let tagNodes = _this.tagData[_this.setNodeIndex].child;
            let tags = [];
            for (let t=0; t<tagNodes.length; t++) {
                if (tagNodes[t].tagCode == _this.setNodeUrl[_this.tagNodeIndex]) {
                    _this.tagData[_this.tagNodeIndex].tagNode.push(tagNodes[t]);
                    tags.push(tagNodes[t]);
                    break
                }
            }
            _this.ccMediaTag.changeTag(_this.setNodeIndex, tags);
        } else {
            _this.setNodeFlag = false
        }
      },
      getTagPageList: function () {   //接口数据
          let _this = this;
          let params = {};
          let nIndex = _this.tagData.length;
          params.parentCode = _this.tagParentCode;
          params.page = _this.currentPage;
          params.rows = _this.pageSize;
          if (_this.setNodeIndex === _this.setNodeUrl.length-1 && (_this.tagParentCode == 10 || _this.tagParentCode == _this.setNodeUrl[_this.setNodeUrl.length-1])) {
              params.perspectiveId = _this.setNodePerId;
          }
          _this.getTagPageListUrl(params)
              .done(function (data) {
                  if (_this.tagNodeIndex >= nIndex) {
                      let tagJson = {
                          tagCodeOn: '',
                          tagNode: [],
                          child: [],
                          nodeTotal: 0,
                          nodePage: 1,
                          currentPage: 1
                      }
                      tagJson.child = data.data.rows;
                      if (data.data.rows.length > 0) {
                          _this.tagData.push(tagJson)
                          _this.tagData[_this.tagNodeIndex].nodeTotal = data.data.total;
                          _this.tagData[_this.tagNodeIndex].nodePage = Math.ceil(data.data.total/_this.pageSize);
                          if (_this.tagData[_this.tagNodeIndex].child.length > 0) {
                            _this.tagData[_this.tagNodeIndex].child.forEach(function (item, i) {
                                if (_this.movieTags.length > 0) {
                                    _this.movieTags.forEach(function (tag, t) {
                                        if (item.tagCode === tag.tagCode) {
                                            _this.tagData[_this.tagNodeIndex].tagNode.push(tag);
                                            return false
                                        }
                                    })
                                }
                            })
                        }
                      }
                  } else {
                      if (_this.isMoreIndex > 0) {
                          _this.tagData[_this.tagNodeIndex].child = _this.tagData[_this.tagNodeIndex].child.concat(data.data.rows);
                      } else {
                          _this.tagData[_this.tagNodeIndex].child = data.data.rows;
                      }
                      _this.tagData[_this.tagNodeIndex].nodeTotal = data.data.total;
                      _this.tagData[_this.tagNodeIndex].nodePage = Math.ceil(data.data.total/_this.pageSize);
                      if (_this.tagData[_this.tagNodeIndex].child.length > 0) {
                        _this.tagData[_this.tagNodeIndex].child.forEach(function (item, i) {
                            if (_this.movieTags.length > 0) {
                                _this.movieTags.forEach(function (tag, t) {
                                    if (item.tagCode === tag.tagCode) {
                                        _this.tagData[_this.tagNodeIndex].tagNode.push(tag);
                                        return false
                                    }
                                })
                            }
                        })
                    }
                  }
                  let tagNodes = [];
                  if (_this.tagData.length > 0) {
                    _this.tagData.forEach(function (item, i) {
                        tagNodes = tagNodes.concat(item.tagNode)
                    });
                  }
                  _this.tagDataBak = _this.clone(_this.tagData);
                  if (_this.setNodeIndex < _this.setNodeUrl.length-1 && _this.setNodeFlag) {
                      _this.setNodeIndex++;
                      let tagNodes = _this.tagData[_this.setNodeIndex].child;
                      let tags = [];
                      for (let t=0; t<tagNodes.length; t++) {
                          if (tagNodes[t].tagCode == _this.setNodeUrl[_this.tagNodeIndex]) {
                              _this.tagData[_this.tagNodeIndex].tagNode.push(tagNodes[t]);
                              tags.push(tagNodes[t]);
                              break
                          }
                      }
                      _this.changeTag(_this.setNodeIndex, tags);
                  } else {
                      _this.setNodeFlag = false
                  }
              })
              .fail(function () {
                  _this.$message('网络问题，请重试')
              })
      },
      getTagPageListUrl: function (data) {
          const _this = this;
          //针对不同的系统取不同的标签树
          let firstParams = '?tagCode=';  //设置tagCode的值 空为全部 1媒资，2主页，3广告，4购物
          if (_this.tagNodeIndex > 0) firstParams = '?tagCode=';
          return common.postAjax({
              url: _this.urls.getTagPageListUrl+firstParams,
              data: data
          })
      },
      getCurrTagData: function (tagCode, index) {
        this.tagParentCode = tagCode;
        this.tagNodeIndex = index;
        this.getTagList()
        //this.getTagPageList()
      },
      getTagNodes: function (movieTags, tagDataBak) {
        this.movieTags = movieTags;
        this.tagDataBak = tagDataBak
      },
      updateTagData: function (tagData) {
        this.tagData = tagData
      },
  }
};
</script>

<style lang="stylus">
.cc-video-tag .el-tag {
    margin: 3px;
}
</style>
```


## 属性  
支持N级层级展示 

| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| ref | Array | 标签组件名称 | |  
| tagData | Array | 标签数据列表 | |  
| tagDataBakInit | Array | 备份标签列表 | |  
| pageSize | Array | 标签分页数 | |

标签列表属性  
| 名称 | 类型 | 描述  | 例子 |  
| ---- | ---- | ---- | ---- |  
| tagId | int | 标签id | |  
| tagCnName | String | 标签名称 | | 
| tagCode | string | 标签Code | |  
| parentCode | string | 标签父级Code | |
| nodeType | int | 标签分类类型 | | 
| level | int | 层级 | |  
| path | string | 标签路径 | |  
| tagStatus | int | 状态 | |  
| videoCount | int | 次数 | |  
| creater | int | 创建人 | |  
| modifier | int | 最后修改人 | |  
| createdDate | date | 创建时间 | |  
| lastUpdateDate | date | 最后更改时间 | |  

## 事件
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |
| currTagData | | 点击标签返回值 |
| getTagNodes | data | 获取已选标签列表
| updateTagData | data | 更新标签列表


<Comment />