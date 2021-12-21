<template>
  <!-- <c-card :title="title" @go-back="goBack"> -->
    <div class="content font-class" style="display: block;">
      <div @click="getIconClassName" v-if="isUseInitialIcon">
        <ul class="demo-icon-list">
          <li class="icon-item" v-for="(iconName, index) in elIcons" :key="index">
            <span class="demo-svg-icon">
              <el-icon><component :is="iconName"></component></el-icon>
              <span class="icon-name">{{ iconName }}</span>
            </span>
            <!-- <span class="icon iconfont el-icon-cc-denglu"></span>
            <div class="code-name">.el-icon-cc-denglu</div> -->
          </li>
        </ul>
      </div>
      
      <div v-if="!isUseInitialIcon" @click="getIconClassName">
        <slot name="addIcon"></slot>
      </div>
    </div>
  <!-- </c-card> -->
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as ElIconModules from '@element-plus/icons-vue'

export default defineComponent({
  name: 'CIconSelect',
  props: {
    title: {
      type: String
    },
    isUseInitialIcon: {
      type: Boolean,
      default: true
    },
    goBackIcon: {
      type: String
    }
  },
  emits: ['go-back', 'getIcon'],
  setup (props, { emit }) {
    let elIcons = ref<Array<string>>([])
    // 统一注册Icon图标
    for (const iconName in ElIconModules) {
      if (Reflect.has(ElIconModules, iconName)) {
        elIcons.value.push(iconName)
      }
    }
    function getIconClassName (event) {
      let className = event.target.innerText || event.target.target.innerText
      emit('getIcon', className)
    }

    function goBack () {
      emit('go-back')
    }

    return {
      elIcons,
      goBack,
      getIconClassName
    }
  }
  // data () {
  //   return {
  //     elIcons: []
  //   }
  // },
  // methods: {
  //   // getIconClassName (event) {
  //   //   // let classNames = event.toElement.getAttribute('class')
  //   //   // let name = event.toElement.nextElementSibling.textContent
  //   //   // if (classNames.indexOf('icon') >= 0) {
  //   //     //   let iconName = classNames.split(' ')[2]
  //   //   //   this.$emit('get-icon', iconName, name)
  //   //   // }
  //   //   let className = event.target.getAttribute('class').split(' ')[2]
  //   //   this.$emit('getIcon', className)
  //   // },
  //   goBack () {
  //     this.$emit('go-back')
  //   }
  // },
  // created() {
  //   // 统一注册Icon图标
  //   for (const iconName in ElIconModules) {
  //     if (Reflect.has(ElIconModules, iconName)) {
  //       this.elIcons.push(iconName)
  //     }
  //   }
  // }
})
</script>
<style scoped>
.demo-icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border-top: 1px solid var(--el-border-color-base);
  border-left: 1px solid var(--el-border-color-base);
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7,1fr);
  margin-bottom: 50px
}
.icon-item {
  text-align: center;
  color: var(--el-text-color-regular);
  height: 90px;
  font-size: 13px;
  border-right: 1px solid var(--el-border-color-base);
  border-bottom: 1px solid var(--el-border-color-base);
  transition: background-color var(--el-transition-duration);
} 
.icon-item:hover {
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}
.demo-svg-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}
.icon-name{
  margin-top: 8px;
}
</style>

/* <style scoped src="../../../../assets/icon/iconfont.css">
</style> */
