# 文件上传  
`c-upload`  
封装了文件上传相关的一些逻辑，使用的过程中，需要自定义文件的显示方式和实现具体的上传方法

## 示例  

### 效果

<Demo>
  <UploadDemo />
</Demo>

### 代码  
``` vue
<template>
  <div>
    <h2>简单上传</h2>
    <c-upload
      ref="upload"
      :multiple="true"
      :min-height="100"
      :max-height="200"
      @upload="handleUpload"
    >
      <div class="upload-pic-list" slot="preview" slot-scope="{fileList}">
        <div class="upload-pic-list__add" @click="$refs.upload.handleSelectFile()">
          <i class="el-icon el-icon-plus"/>
        </div>
        <div class="upload-pic-list__item" v-for="file in fileList" :key="file.id">
          <div
            class="upload-pic-list__error"
            v-if="file.status === 'error'"
          >上传失败: {{ file.message }}</div>
          <div v-if="file.status === 'uploading'" class="upload-pic-list__progress">
            <el-progress :width="100" type="circle" :percentage="file.percentage"></el-progress>
          </div>
          <img v-else :src="file.dataUrl">
          <i
            v-if="file.status !== 'uploading'"
            class="upload-pic-list__remove el-icon el-icon-close"
            title="移除"
            @click="$refs.upload.handleRemove(file)"
          />
        </div>
      </div>
    </c-upload>
  </div>
</template>

<script>
export default {
  methods: {
    handleUpload (file, fileListItem) {
      function update () {
        if (fileListItem.percentage < 100) {
          fileListItem.percentage += 10
        } else {
          fileListItem.status = 'successs'
          clearInterval(fileListItem.interval)
        }
      }
      fileListItem.interval = setInterval(update, 200)
    }
  }
}
</script>
<style lang="stylus" scoped>
$height = 100px;
$width = 100px;

.upload-pic-list__progress {
  position: absolute;
}

.upload-pic-list__add, .upload-pic-list__item {
  height: $height;
  width: $width;
  margin-right: 10px;
  display: inline-block;
  vertical-align: top;
  border: 1px solid #ccc;
}

.upload-pic-list__add {
  cursor: pointer;

  i {
    position: relative;
    top: 50%;
    margin: -10px auto;
    display: block;
    font-size: 20px;
    text-align: center;
  }
}

.upload-pic-list__item {
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.upload-pic-list__error {
  position: absolute;
  background: #000;
  opacity: 0.7;
  color: #fff;
  width: 100%;
  font-size: 12px;
  padding: 5px;
  display: block;
  box-sizing: border-box;
}

.upload-pic-list__remove {
  position: absolute;
  color: red;
  cursor: pointer;
  top: 0;
  right: 0;
}
</style>
```

## 属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| accept | String |  接收的文件MIME类型 | image/png | 
| disabled | Boolean | 是否禁用 | |   
| multiple | Boolean | 是否可以多选文件 | |  
| width | Number | 上传图片的宽度 | |  
| height | Number | 上传的图片的高度 | |  
| maxWidth | Number | 上传图片的最大宽度 | | 
| maxHeight | Number | 上传图片的最大高度 | |  
| minWidth | Number | 上传图片的最小宽度 | |  
| minHeight | Number | 上传图片的最小高度 | |  
| maxRatio | Number | 上传图片的最大宽高比例 | |   
| minRatio | Number | 上传图片的最小宽高比例 | | 
| maxSize | Number | 上传图片最大字节数 | |  
| minSize | Number | 上传图片最小字节数 | |  

## 方法  
| 名称 | 参数  | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| handleSelectFile | 无 | 用于自定义选择文件按钮，点击的时候执行该方法可弹出选择文件窗口 | |  

## Scoped Slot  
| 名称 | scope |  描述 |  
| ---- | ---- | ---- | 
| preview | { fileList } | 用于自定义显示已上传列表 |   

fileList 为一个数组，每个元素包含下面属性  
| 名称 | 类型 | 描述 | 例子 |  
| ---- | ---- | ---- | ---- |  
| id | String | 临时的文件标识 | |  
| size | Number | 文件字节数 |  
| dataUrl | String | |  
| status | String | success \| uploading \| error | 上传状态 | 
| value | Any | | 
| percentage | Number | 上传进度 | 0.12 |   
