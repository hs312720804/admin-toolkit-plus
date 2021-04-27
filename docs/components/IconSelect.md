# 图标组件
`c-icon-select`   
图标组件依赖于阿里图标库，所以需要引入iconfont.css样式

## 示例1
### 使用初始的图标  

<Demo>
  <TheInitIconDemo/>
</Demo>

### 代码  
```vue
<template>
  <div>
    <div v-show="isShowMainPage">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="选择图标">
          <el-input v-model="iconName" placeholder="选择图标"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="selectIcon">选择图标</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="!isShowMainPage">
      <c-icon-select @get-icon="getIcon" :title="title" :isUseInitialIcon="true" @go-back="goBack">
      </c-icon-select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowMainPage: true,
      iconName: "",
      title: "选择图标"
    };
  },
  methods: {
    selectIcon() {
      this.isShowMainPage = false;
    },
    /**
     * 得到icon
     */
    getIcon(iconName, name) {
      this.iconName = iconName;
      this.isShowMainPage = true;
    },
    /**
     * 返回
     */
    goBack() {
      this.isShowMainPage = true;
    }
  }
};
</script>
```
## 示例2
### 通过插槽自定义图标
<Demo>
  <TheCustomIconDemo/>
</Demo>

### 代码  
```vue
<template>
  <div>
    <div v-show="isShowMainPage">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="选择图标">
          <el-input v-model="iconName" placeholder="选择图标"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="selectIcon">选择图标</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="!isShowMainPage">
      <TheIcon @get-icon="getIcon" :title="title" :isUseInitialIcon="false" @go-back="goBack">
        <ul>
          <li>
            <span class="icon iconfont el-icon-cc-denglu"></span>
            <div class="name">登录</div>
          </li>
          <li>
            <span class="icon iconfont el-icon-cc-toufangfangan"></span>
            <div class="name">投放方案</div>
          </li>
        </ul>
      </TheIcon>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowMainPage: true,
      iconName: "",
      title: "选择图标"
    };
  },
  methods: {
    selectIcon() {
      this.isShowMainPage = false;
    },
    /**
     * 得到icon
     */
    getIcon(iconName, name) {
      this.iconName = iconName;
      this.isShowMainPage = true;
    },
    /**
     * 返回
     */
    goBack() {
      this.isShowMainPage = true;
    }
  }
};
</script>
<style scoped>
ul {
  width: 100% !important;
  overflow: hidden;
  *zoom: 1;
}

ul li {
  min-width: 100px;
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 20px;
  text-align: center;
  list-style: none !important;
  cursor: default;
}

ul li .code-name {
  line-height: 1.2;
}

ul .icon {
  display: block;
  cursor: pointer;
  line-height: 50px;
  font-size: 40px;
  margin: 10px auto;
  color: #333;
  -webkit-transition: font-size 0.25s linear, width 0.25s linear;
  -moz-transition: font-size 0.25s linear, width 0.25s linear;
  transition: font-size 0.25s linear, width 0.25s linear;
}

ul .icon:hover {
  font-size: 50px;
}

ul .svg-icon {
  /* 通过设置 font-size 来改变图标大小 */
  width: 1em;
  /* 图标和文字相邻时，垂直对齐 */
  vertical-align: -0.15em;
  /* 通过设置 color 来改变 SVG 的颜色/fill */
  fill: currentColor;
  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
      normalize.css 中也包含这行 */
  overflow: hidden;
}

ul li .name,
ul li .code-name {
  color: #666;
  font-size: 12px;
}
li {
  cursor: pointer;
}
</style>

```
## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |
| title | String | 标题 |见上面例子 |
| isUseInitialIcon | Boolean | 是否使用初始图标，true为使用false为不使用 |见上面例子 |
## 事件
| 名称 | 参数 |描述| 例子 |  
| ---- | ---- | ---- | ---- |
| go-back | 无 | 返回按钮出发的事件 | 见上面例子 |
| get-icon | (iconName:String,name:String) | 得到图标icon值和名称 | 见上面例子 |
<Comment />