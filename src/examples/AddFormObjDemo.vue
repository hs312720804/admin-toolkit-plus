<template>
  <div>
  <c-add-form-obj :formList="form.formList" :classTypeOption="classTypeOption" :serviceOptions="serviceOptions" :inputType="inputType"></c-add-form-obj>
  </div>
</template>
<script>
export default {
  data () {
    return {
      classTypeOption: [
        {
          value: 'startTrackList',
          label: '起播监测'
        },
        {
          value: 'clickTrackList',
          label: '点击监测'
        },
        {
          value: 'middleTrackList',
          label: '中点监测'
        },
        {
          value: 'endTrackList',
          label: '结束监测'
        }
      ],
      serviceOptions: [{ value: 'miaozhen', label: '秒针监测' }, { value: 'guoshuang', label: '国双监测' }],
      inputType: 'textArea',
      form: {
        formList: [
          {
            moreMediaList: [
              {
                tyep: 'baoguang',
                value: [
                  {
                    code: '',
                    serviceProvider: ''
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
