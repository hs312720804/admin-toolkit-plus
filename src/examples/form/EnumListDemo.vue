<template>
  <div>
    <c-form label-width="120px" :readonly="isReadonly">
      <c-form-enum-list type="checkbox" v-model="form.skill" label="语言技能" :options="langOptions" />
      <c-form-enum-list label="兴趣"  v-model="form.hobbies" :options="hobbiesOptions" />
    </c-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isReadonly: false,
      langOptions: [
        {
          label: 'javascript',
          value: 'javascript'
        },
        {
          label: 'java',
          value: 'java'
        },
        {
          label: 'haskell',
          value: 'haskell',
          disabled: true
        }
      ],
      hobbiesOptions: [
        {
          label: '足球',
          value: 'football'
        },
        {
          label: '音乐',
          value: 'music'
        },
        {
          label: '网球',
          value: 'tennis'
        }
      ],
      form: {
        skill: [],
        hobbies: ['music']
      }
    }
  }

}
</script>
