# 分类列表    
`c-type-list`  

## 示例  

### 效果

<Demo>
  <TypeListDemo />
</Demo>

### 代码  
```vue
<template>
  <div>
    <div><el-button type="primary" icon="el-icon-edit" @click="clickEdit">{{eidtText}}</el-button></div>
    <c-type-list :lists="datas" :defaultProps="defaultProps" @currData="getNodeData" @clickTypeHandler="clickTypeHandler" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      eidtText: '编辑',
      datas: [{
          id: 1,
          label: '一级 1',
          status: 1,
          categoryFlag: 0,
          children: [{
            id: 4,
            label: '二级 1-1',
          	status: 1,
          	categoryFlag: 0,
            children: [{
              id: 9,
              label: '三级 1-1-1',
          		status: 1,
          		categoryFlag: 0
            }, {
              id: 10,
              label: '三级 1-1-2',
          		status: 1,
          		categoryFlag: 0
            }]
          }]
        }],
      defaultProps: {
        children: 'children',
        label: 'label',
        id: 'id',
        isShowCheckBox: false
      }
    };
  },
  methods: {
    clickEdit() {
      this.defaultProps.isShowCheckBox = !this.defaultProps.isShowCheckBox
      if (this.defaultProps.isShowCheckBox) this.eidtText = '退出'
      else this.eidtText = '编辑'
    },
    getNodeData(data) {
      console.log(data)
    },
    clickTypeHandler(node) {
    	console.log(node)
    }
  }
};
</script>

<style lang="stylus">
.tree-type div.is-current > .el-tree-node__content
  color #fff
  background #57b0f7

.tree-type .is-out-icon, .tree-type .is-down-icon, .tree-type .is-show-icon
    display  inline-block
    text-indent 24px
    width  20px
    height  20px
    line-height  20px
    vertical-align  middle
    background-image  url(../assets/imgs/folder-closed-grey.png)
    background-size  cover

.tree-type .is-down-icon 
    background-image url(../assets/imgs/folder-closed-blue.png)
.tree-type .is-show-icon 
    background-image url(../assets/imgs/folder-closed-green.png)

</style>
```


## 属性  
支持N级菜单  

| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| default-active | String | 默认激活的菜单对应的路由名 | |  
| lists | Array | 分类列表 | |
| defaultProps | Object | 分类列表特定属性 | |

分类项属性  
| 名称 | 类型 | 描述  | 例子 |  
| ---- | ---- | ---- | ---- |  
| id | int | 分类id | |  
| label | String | 分类名称 | | 
| status | int | 分类状态 | |  
| categoryFlag | int | 分类是否客户端显示 | |
| children | Array | 子分类项列表 | |

## 事件
| 名称 | 参数 | 描述 |  
| ---- | ---- | ---- |
| clickEdit | | 点击是否编辑分类 |
| currData | data | 选中分类项数据
| clickTypeHandler | data | 分类点击后触发事件


<Comment />