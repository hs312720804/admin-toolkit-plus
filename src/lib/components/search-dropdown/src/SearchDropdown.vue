<template>
  <div class="search-wrapper" @click.stop>
    <div class="search-input" :class="{'is-focus':isFocus}">
      <!-- 搜索输入框 -->
      <input
        type="text"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        autofocus
        v-model="value"
        ref="searchInput"
        spellcheck="false"
        :placeholder="placeholderValue"
        @click="changeInput"
        @keyup="clickSearch"
        @keydown.down.prevent="navigateOptions('next')"
        @keydown.up.prevent="navigateOptions('prev')"
      />

      <!-- 搜索放大镜图标 -->
      <div class="search-icons">
        <i class="el-icon-close" v-show="value" @click="clearSearchValue"></i>
        <i class="el-icon-search" v-show="!value" @click="clickSearch"></i>
      </div>
    </div>

    <!-- 搜索下拉列表 -->
    <div class="search-list" v-if="isShowList">
      <div class="search-result" ref="ul">
        <ul v-for="(item, index) in result" :key="index">
          <li
            class="select-li"
            :class="{'is-selected': item.isSelected}"
            @click="handleClickResultItem(item)"
          >
            <!-- <img class="user-avatar" src="../../images/avatar.png"> -->
            <div class="user-name">
              <span>
                {{item.keyword[0]}}
                <span class="keyword">{{item.keyword[1]}}</span>
                {{item.keyword[2]}}
              </span>
            </div>
          </li>
        </ul>

        <!-- 查询结果为空时候 -->
        <div class="result-null" v-if="value && result.length == 0">{{$t('cMessage.noResult')}}</div>
      </div>
    </div>

  </div>
</template>
<script>
const PinyinMatch = require('pinyin-match')
export default {
  name: 'CSearchDropdown',
  props: {
    keyValue: {
      type: String
    },
    placeholderValue: {
      type: String,
      default: () => {
        return this.$t('cMessage.search') + '...'
      }
    },
    FuzzySearchList: {
      type: Array,
      default: () => []
    }

  },

  data () {
    return {
      isFocus: false, // 搜索框是否获取了焦点
      value: '', // 输入的搜索关键字
      result: [], // 全部搜索结果
      curIndex: 0, // 选中的搜索结果的下标
      selectItem: {}, // 选中的搜索结果
      isShowList: false // 是否展示下拉列表
    }
  },
  watch: {
    value (val) {
      // console.log('this.key===' + val)
      this.$emit('input', val)
      if (val === '') {
        this.$emit('cancel', val)
      }
    },
    keyValue (val) {
      this.value = val
    }
  },
  mounted () {
    this.value = this.keyValue // 在生命周期中，把获取的value值获取给key

    document.body.addEventListener(
      'click',
      () => {
        // 鼠标单击组件之外时收起下拉列表
        this.isFocus = false
        // this.value = ''
        this.isShowList = false
      },
      false
    )
  },

  methods: {
    changeInput () {
      // 单击搜索框时获取焦点
      this.isFocus = true
    },
    clearSearchValue () {
      // 清空输入的查询条件
      if (this.value) {
        this.value = '' // 搜索关键字
        this.result = [] // 全部搜索结果
        this.curIndex = 0 // 选中的搜索结果的下标
        this.selectItem = {} // 选中的搜索结果
        this.$refs.searchInput.focus() // 输入查询条件清空后获取焦点
      }
    },

    clickSearch () {
      // 回车后查询
      if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
        // 上下键
        return
      }
      if (event.code === 'Enter' && this.selectItem) {
        this.handleClickResultItem(this.selectItem) // 有搜索结果时按下enter直接选中第一项
        return
      }
      this.result = [] // 全部搜索结果
      this.curIndex = 0 // 选中的搜索结果的下标
      this.selectItem = {} // 选中的搜索结果
      if (this.value.trim()) {
        for (let i = 0; i < this.FuzzySearchList.length; i++) {
          // 根据所有人员名字匹配
          let name = this.FuzzySearchList[i].name
          let search = PinyinMatch.match(name, this.value)
          if (search && search.length > 0) {
            this.FuzzySearchList[i].keyword = this.getKeyWord(name, search)
            this.FuzzySearchList[i].isSelected = false
            this.result.push(this.FuzzySearchList[i])
          }
        }
        if (this.result && this.result[0]) {
          this.result[0].isSelected = true
          this.curIndex = 0 // 选中的搜索结果的下标
          this.selectItem = this.result[0] // 选中的搜索结果
        }
      } else {
        this.$refs.searchInput.focus() // 没有输入查询条件焦点不应该失去
      }

      // 搜索数据大于0，显示下拉框
      if (this.result.length > 0) {
        this.isShowList = true
      }
    },

    getKeyWord (name, search) {
      // 关键字
      let keyword = []
      keyword[0] = name.substring(0, search[0])
      if (search[0] === search[1]) {
        keyword[1] = name.charAt(search[0]) // 匹配到的作为关键字
        keyword[2] = name.substring(search[0] + 1)
      } else {
        keyword[1] = name.substring(search[0], search[1] + 1) // 匹配到的作为关键字
        keyword[2] = name.substring(search[1] + 1)
      }
      return keyword
    },

    handleClickResultItem (data) {
      // 单击下拉列表中的选项

      // 全部选项选中状态为 false
      this.result.map(item => {
        item.isSelected = false
      })
      data.isSelected = true
      // console.log('data==' + JSON.stringify(data))

      // 设置输入框值
      this.value = data.keyword.join('')

      // 关闭下拉框
      this.isShowList = false
      this.isFocus = false
      this.$emit('confirm', data)
    },

    navigateOptions (direction) {
      // 搜索结果上下键选择
      let resultLength = this.result.length
      if (resultLength === 0 || resultLength === 1) {
        return
      }
      let lastIndex = this.curIndex
      if (direction === 'next') {
        // 向下
        this.curIndex++
        if (this.curIndex === resultLength) {
          this.curIndex = 0
        }
      }
      if (direction === 'prev') {
        // 向上
        this.curIndex--
        if (this.curIndex < 0) {
          this.curIndex = resultLength - 1
        }
      }
      if (lastIndex < resultLength) {
        this.result[lastIndex].isSelected = false
      }
      if (this.curIndex > -1 < resultLength) {
        this.selectItem = this.result[this.curIndex]
        this.selectItem.isSelected = true

        // this.result[this.curIndex].isSelected = true;
        this.$set(this.result, this.curIndex, this.selectItem)
      }
      this.resetScrollTop()
    },

    resetScrollTop () {
      // 设置滚动条的位置
      let maxShowCount = this.$refs.ul.clientHeight / 50
      let diff = this.curIndex - maxShowCount
      diff += 4
      this.$refs.ul.scrollTop = diff * 50 + 60
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  // background-color: $--color-primary;
  // height: 580px;
  width: 100%;
  // overflow: hidden;
  border-radius: 3px;
  font-family: 'Microsoft YaHei';
  box-sizing: border-box;
  // padding: 10px;
  position: relative;
  .search-input {
    position: relative;

    input {
      width: 100%;
      height: 35px;
      box-sizing: border-box;
      border: 0;
      border-radius: 3px;
      margin: 0;
      padding: 0px 40px 0px 10px;
      outline: 0;
      font-size: 14px;
      color: #222;
      // background-color: #209df7;
      background-color: #fff;
      border: 1px solid #dcdfe6;
    }

    input::-webkit-input-placeholder {
      color: #E5EAEE;
    }

    .search-icons {
      position: absolute;
      top: 7px;
      right: 10px;
      color: #209df7;
      font-size: 17px;
    }
  }

  .is-focus {
    overflow: visible !important;

    input {
      color: #222 !important;
      // border: 1px solid #fff !important;
      // background-color: #fff !important;
      // box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 15px hsla(0, 0%, 100%, 0.3) !important;
    }

    .search-icons {
      .el-icon-close {
        color: #111;
        background-color: #d8d8d8;
        border-radius: 50%;
        padding: 2px;
        box-sizing: border-box;
        font-size: 15px;
        cursor: pointer;
      }

      .el-icon-close:hover {
        color: #fff;
        background-color: #209df7;
      }
    }
  }

  .search-list {
    border: 0 none;
    border-radius: 3px;
    // box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    position: absolute;
    width: 100%;

    .search-result {
      max-height: 480px;
      overflow-x: hidden;
      overflow-y: auto;
      border: 1px solid #dcdfe6;
      ul, li {
        margin: 0px;
        padding: 0px;
      }

      li {
        list-style-type: none;
      }

      .select-li {
        // cursor: pointer;
        // padding: 8px 10px;
        // overflow: hidden;
        // border-bottom: 1px solid #ebebeb;
        font-size: 14px;
        padding: 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
        .user-avatar {
          border-radius: 50%;
          float: left;
          width: 40px;
          height: 40px;
          background-size: cover;
        }

        .user-name {
          // width: 200px;
          // float: left;
          // margin-left: 15px;
          // line-height: 40px;

          .keyword {
            color: #008cee;
          }
        }
      }

      .select-li:hover {
        background-color: #f5f7fa; //element
      }

      .is-selected {
        background-color: rgba(140, 197, 255, 0.46);
      }
    }

    .result-null {
      text-align: center;
      font-size: 16px;
      padding: 30px;
    }
  }
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* 滑动轨道 */
::-webkit-scrollbar-track-piece {
  background-color: transparent;
  -webkit-border-radius: 6px;
}

/* 竖向滚动条 */
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgb(161, 161, 161);
  -webkit-border-radius: 6px;
}

/* 横向滚动条 */
::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: rgb(143, 144, 145);
  -webkit-border-radius: 6px;
}
</style>>
