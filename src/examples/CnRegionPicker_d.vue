<template>
  <div class="outer">
    <div class="input-area" :style="`width: ${width + 30}px;`">
      <input
        type="text"
        @focus="showPicker = true"
        :value="showPickedCity"
        :title="showPickedCity"
        :class="`${inputClass || 'cn-picker-input'}`"
        :placeholder="placeholder"
        :style="`width: ${width}px;`"
      />
      <span
        class="input-close"
        v-if="showCloseBtn"
        @click.stop.prevent="handleAllStatus(false)"
      ></span>
    </div>
    <transition name="fade">
      <div
        class="picker-bg"
        v-show="showPicker"
        @click.stop.self="closeModalPicker"
      >
        <!-- 此处不能prevent -->
        <div class="picker">
          <div class="container">
            <div class="setting">
              <div class="title">选择地区</div>
              <div class="button-area">
                <button
                  class="clear warn color-button"
                  @click.stop.prevent="handleAllStatus(false)"
                >
                  全部清空
                </button>
                <button @click.stop.prevent="handleAllStatus(true)">
                  全选
                </button>
                <button @click.stop.prevent="inverse">反选</button>
                <button class="confirm color-button" @click.stop.prevent="pick">
                  确认
                </button>
                <div
                  class="close"
                  @click.stop.prevent="showPicker = false"
                ></div>
              </div>
              <!-- <div class="sort">
                <span
                  :class="`letter-item ${activeLetter === item ? 'active' : ''}`"
                  v-for="item in letter"
                  :key="item"
                  @click="clickLetter(item)"
                >{{item}}</span>
              </div> -->
            </div>
            <div class="content_t">
              <div class="scroll">
                <div v-for="item in originCityData" :key="item.id">
                  <template v-if="item.parent === 0">
                    <div class="province">
                      {{ item.name }}
                      <span @click="handleProvinceStatus(item, true)"
                        >全选</span
                      >
                      <span @click="handleProvinceStatus(item, false)"
                        >清空</span
                      >
                      <!-- <label>
                        <img
                          class="check-box"
                          :src="`${provinceStatus['p' + item.regionId] ? 'https://images.vrm.cn/2018/12/21/checked.png' : 'https://images.vrm.cn/2018/12/21/unchecked.png'}`"
                        />
                        <input
                          type="checkbox"
                          v-model="provinceStatus['p' + item.regionId]"
                          @change="onProvinceChange(item, index, $event)"
                        />
                        {{item.name}}
                      </label> -->
                    </div>
                    <div class="city">
                      <template v-for="cityItem in originCityData">
                        <div
                          v-if="
                            cityItem.parent > 0 &&
                              cityItem.parent === item.regionId
                          "
                          class="city-item"
                          :key="cityItem.index"
                        >
                          <label>
                            <img
                              class="check-box"
                              :src="
                                `${
                                  cityStatus['c' + cityItem.regionId]
                                    ? 'https://images.vrm.cn/2018/12/21/checked.png'
                                    : 'https://images.vrm.cn/2018/12/21/unchecked.png'
                                }`
                              "
                            />
                            <input
                              type="checkbox"
                              v-model="cityStatus['c' + cityItem.regionId]"
                            />
                            {{ cityItem.name }}
                          </label>
                        </div>
                      </template>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import regions from '../assets/cc-regions'
const provinceData = regions.filter(item => {
  return item.parent === 0
})
const cityData = regions.filter(item => {
  return item.parent > 0
})
const provinceLength = provinceData.length
const cityLength = cityData.length

export default {
  name: 'CRegionPickerCn',
  data () {
    return {
      showPicker: false,
      originCityData: Object.freeze(regions),
      provinceStatus: {},
      cityStatus: {},
      // provinceStatus: [...Array(provinceLength)].map(_ => false),
      // cityStatus: [...Array(cityLength)].map(_ => false),
      citySelect: [],
      letter: [
        '全部',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      activeLetter: '全部',
      pickData: []
    }
  },
  props: {
    placeholder: {
      type: [String],
      default: '选择城市'
    },
    showCloseBtn: {
      type: [Boolean],
      default: true
    },
    clickModal: {
      type: [Boolean],
      default: true
    },
    inputClass: {
      type: [String],
      default: null
    },
    width: {
      type: [Number],
      default: 200
    },
    pickedCity: {
      type: Array
    }
  },
  methods: {
    pick () {
      let checkedCity = [] // 勾选的城市index
      let outPutArr = []
      Object.keys(this.cityStatus).forEach(key => {
        if (this.cityStatus[key]) {
          checkedCity.push(parseInt(key.slice(1)))
        }
      })
      regions.forEach(item => {
        if (checkedCity.indexOf(item.regionId) !== -1) {
          outPutArr.push(item)
        }
      })
      this.$emit('on-pick-city', outPutArr)
      this.pickData = outPutArr
      this.showPicker = false
    },
    inverse () {
      // this.cityStatus.forEach((item, index) => {
      //   this.$set(this.cityStatus, index, !item);
      // });
      // this.provinceStatus.forEach((item, index) => {
      //   this.$set(this.provinceStatus, index, !item);
      // });
      Object.keys(this.provinceStatus).forEach(key => {
        this.provinceStatus[key] = !this.provinceStatus[key]
      })
      Object.keys(this.cityStatus).forEach(key => {
        this.cityStatus[key] = !this.cityStatus[key]
      })
    },

    handleAllStatus (bool) {
      // this.cityStatus = [...Array(cityLength)].map(_ => bool);
      // this.provinceStatus = [...Array(provinceLength)].map(_ => bool);
      Object.keys(this.provinceStatus).forEach(key => {
        this.provinceStatus[key] = bool
      })
      Object.keys(this.cityStatus).forEach(key => {
        this.cityStatus[key] = bool
      })
      if (!bool) {
        this.pickData = []
      }
    },

    clickLetter (letter) {
      this.activeLetter = letter
      let originCityData = []
      regions.forEach(item => {
        let sortCity = []
        item.city.forEach(cityItem => {
          if (cityItem.pinYin[0].toUpperCase() === letter) {
            sortCity.push(cityItem)
          }
        })
        if (sortCity.length > 0) {
          originCityData.push({
            city: sortCity,
            province: item.province
          })
        }
      })
      this.originCityData =
        letter === '全部'
          ? Object.freeze(regions)
          : Object.freeze(originCityData)
    },

    onProvinceChange (item, index, event) {
      let curProvinceCity = []
      cityData.forEach(citem => {
        if (citem.parent === item.regionId) {
          curProvinceCity.push(citem)
          this.$set(this.cityStatus, 'c' + citem.regionId, event.target.checked)
        }
      })
      this.citySelect = curProvinceCity
    },
    handleProvinceStatus (item, bool) {
      cityData.forEach(citem => {
        if (citem.parent === item.regionId) {
          this.$set(this.cityStatus, 'c' + citem.regionId, bool)
        }
      })
    },
    closeModalPicker () {
      if (this.clickModal) {
        this.showPicker = false
      }
    }
  },
  computed: {
    showPickedCity () {
      let result = ''
      this.pickData.forEach(city => {
        this.cityStatus['c' + city.regionId] = true
        result += `${city.name} `
      })
      return result
    }
  },
  created () {
    provinceData.forEach((item, index, array) => {
      this.$set(this.provinceStatus, 'p' + item.regionId, false)
    })
    cityData.forEach((item, index, array) => {
      this.$set(this.cityStatus, 'c' + item.regionId, false)
    })
    // this.pickData = this.pickedCity
  },
  watch: {
    pickedCity: {
      handler (newOne) {
        this.pickData = newOne
      }
    },
    pickData: {
      handler (newOne) {
        newOne.forEach(city => {
          this.cityStatus['c' + city.regionId] = true
        })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.outer {
  .input-area {
    position: relative;
  }
  .input-close {
    position: absolute;
    right: 0;
    top: 8px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    cursor: pointer;
    transition: 0.3s all;
  }
  .input-close:hover {
    opacity: 1;
  }
  .input-close:before,
  .input-close:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 14px;
    width: 2px;
    background-color: #333;
  }
  .input-close:before {
    transform: rotate(45deg);
  }
  .input-close:after {
    transform: rotate(-45deg);
  }
}
.picker-bg {
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  background: #000000a1;
  z-index: 9999;

  .picker {
    width: 50%;
    height: 600px;
    position: absolute;
    left: 50%;
    right: 0;
    margin: 4% auto;
    margin-left: -25%;
    background-color: #fff;
    border-radius: 8px;
    line-height: 13px;
    overflow: hidden;
    z-index: 1;
    .container {
      position: relative;
      padding-top: 1px;
    }
    .setting {
      position: absolute;
      margin: auto;
      width: 100%;
      top: 0;
      left: 0;
      padding: 1%;
      background-color: #fff;
      border-bottom: 1px solid #e5e5e5;
      z-index: 99;
      border-radius: 8px 8px 0 0;
      box-sizing: border-box;
      .title {
        float: left;
        line-height: 33px;
        padding-left: 10px;
        font-size: 14px;
      }
    }
    .content_t {
      margin-top: 53px;
      padding:20px 4% 0 4%;
      overflow: scroll;
      height: 545px;
      box-sizing: border-box;
      position: relative;
      overflow-x: hidden;
      .province {
        display: flex;
        flex-wrap: wrap;
        font-weight: bold;
        margin-bottom: 10px;
        span {
          font-weight: normal;
          padding-left: 10px;
          color: #337ab7;
          cursor: pointer;
        }
        span:hover {
          color: #409eff;
          text-decoration: underline;
        }
        label {
          font-size: 14px;
          font-weight: bold;
        }
      }
      .city {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;

        label {
          font-size: 13.3px;
        }

        .city-item {
          width: 200px;
          text-align: left;
        }
      }
    }
    .sort {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .button-area {
      text-align: right;
      // margin-bottom: 12px;
      padding-right: 40px;
      position: relative;

      .clear {
        margin-right: 40px;
      }
      .warn {
        background-color: #6c757d;
        border-color: #6c757d;
      }
      .confirm {
        background-color: #409eff;
        border-color: #409eff;
      }
      .color-button {
        color: #fff;
        border: none;
      }
      .close {
        position: absolute;
        right: 1px;
        top: 9px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
        cursor: pointer;
        transition: 0.3s all;
      }
      .close:hover {
        opacity: 1;
      }
      .close:before,
      .close:after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 16px;
        width: 2px;
        background-color: #333;
      }
      .close:before {
        transform: rotate(45deg);
      }
      .close:after {
        transform: rotate(-45deg);
      }

      button {
        background: #fff;
        border: 1px solid #dcdfe6;
        outline: none;
        cursor: pointer;
        padding: 7px 20px;
        border-radius: 4px;
        border-color: #dcdfe6;
        color: #595a5e;
        margin-right: 12px;
      }
    }
    .letter-item {
      color: #333;
      font-weight: bold;
      padding: 5px;
      font-size: 13px;
      border-radius: 4px;
      cursor: pointer;
      margin: 0 3px;
      transition: 0.3s all;

      &.active {
        background-color: #337ab7;
        color: #fff;
      }
      &:hover {
        background-color: #337ab7;
        color: #fff;
      }
    }
    label {
      cursor: pointer;
    }
    input[type="checkbox"] {
      width: 13px;
      height: 13px;
      opacity: 0;
      vertical-align: middle;
      margin-right: 5px;
    }
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    & {
      -ms-overflow-style: none;
    }
    & {
      overflow: -moz-scrollbars-none;
    }
  }
  .check-box {
    width: 18px;
    height: 18px;
    position: absolute;
    margin-top: -1px;
  }
}

.cn-picker-input {
  border: 1px solid #c0c4cc;
  line-height: 30px;
  cursor: pointer;
  padding: 0 20px 0 10px;
  border-radius: 4px;
  color: #333;
  text-overflow: ellipsis;
  outline: none;

  &::-webkit-input-placeholder {
    color: #c9ccd8;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #c9ccd8;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: #c9ccd8;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: #c9ccd8;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
