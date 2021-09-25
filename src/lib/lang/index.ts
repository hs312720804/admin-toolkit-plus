import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'
import elementEnLocal from 'element-plus/lib/locale/lang/en'
import elementZhLocal from 'element-plus/lib/locale/lang/zh-cn'
const messages = {
  en: {
    el: elementEnLocal.el,
    message: {
      ...enLocale
    }
  },
  zh: {
    el: elementZhLocal.el,
    message: {
      ...zhLocale
    }
  }
}
const i18n = createI18n({
  locale: 'zh',
  // locale: localStorage.lang || 'zh',
  messages
})
export default {
  messages,
  i18n
}
