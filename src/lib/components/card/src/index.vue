<template>
    <div class="content-card">
        <div v-if="title !== undefined" class="content-card__header">
            {{ title }}
            <div class="actions">
                <slot name="actions">
                    <el-button type="text" @click="$emit('go-back')">{{$t('message.cButton.goBack')}}</el-button>
                </slot>
            </div>
        </div>
        <div class="content-card__main">
            <slot name="default" />
        </div>
        <div class="content-card__footer" v-if="$slots.footer">
          <slot name ="footer"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CCard',
  props: {
    title: String
  },
  setup() {

  }
})
</script>
<style lang="stylus" scoped>
.content-card__main
    position relative
    padding 20px
    background #fff
.content-card__header
    position relative
    height 50px
    text-indent 20px
    line-height 50px
    font-size 18px
    font-weight bold
    text-align left
    border-bottom 1px solid #f0f0f0
    background #fff
    .actions
        padding 0 20px
        float right
    .title
        padding 0 20px
        float left
</style>
