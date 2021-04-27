<template>
  <div>
    <el-row>
      <el-col :span="12">
        <c-anchor-step :stepList="stepList" @stepChange="handleScroll"></c-anchor-step>
      </el-col>
      <el-col :span="8">
    <el-row id="content" class="box">
      <el-col id="步骤1-1">
        <div class="box-one">
            步骤1-1
        </div>
      </el-col>
      <el-col id="步骤1-2">
        <div class="box-one-last">
            步骤1-2
        </div>
      </el-col>
       <!-- <el-col id="步骤2-1">
        <div class="box-two">
            步骤2-1
        </div>
      </el-col>
       <el-col id="步骤3-1">
        <div class="box-three">
            步骤3-1
        </div>
      </el-col> -->
    </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stepList: [
        {
          parent: '步骤1',
          status: '1',
          children: [
            {
              label: '步骤1-1',
              status: '1'
            },
            {
              label: '步骤1-2',
              status: '0'
            }
          ]
        },
        {
          parent: '步骤2',
          status: '0',
          children: [
            {
              label: '步骤2-1',
              status: '0'
            }]
        },
        {
          parent: '步骤3',
          status: '0',
          children: [
            {
              label: '步骤3-1',
              status: '0'
            }]
        }
      ]
    }
  },
  mounted () {
    let dom = document.getElementById('content')
    dom.addEventListener('scroll', () => {
      this.onScroll()
    })
  },
  methods: {
    handleScroll (data) {
      let height = document.getElementById(data.label)
      if (height) {
        let total = height.offsetTop
        document.getElementById('content').scrollTo({
          top: total,
          behavior: 'smooth'
        })
      }
    },
    onScroll () {
      let scrolled = document.getElementById('content').scrollTop
      this.stepList[0].children.forEach(item => {
        item.status = '0'
      })
      if (scrolled < 200) {
        this.stepList[0].children[0].status = '1'
      } else { this.stepList[0].children[1].status = '1' }
    }
  }
}
</script>
<style lang="stylus" scoped>
.box
  height 150px
  border 1p solid #f2f2f2
  overflow auto
.box-one,,.box-one-last,.box-two,.box-three
  height 200px
.box-one
  background-color #55efc4
.box-one-last
  background-color #81ecec
.box-two
  background-color #74b9ff
.box-three
  background-color #a29bfe
</style>
