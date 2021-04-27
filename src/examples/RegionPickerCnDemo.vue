<template>
    <c-cn-region-picker
      :pickedCity="pickedCity"
      @on-pick-city="pickedCity = $event"
      :showCloseBtn="true"
    ></c-cn-region-picker>
</template>

<script>
export default {
  data () {
    return {
      pickedCity: []
    }
  }
}

</script>
