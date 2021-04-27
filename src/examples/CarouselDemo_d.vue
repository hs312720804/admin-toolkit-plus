<template>
  <c-carousel :carouselList = carousel />
</template>
<script>
export default {
  data () {
    return {
      carousel: [
        {
          url: '/to',
          img: '#',
          title: '哈哈'
        },
        {
          url: '/to',
          img: '#',
          title: '嘻嘻'
        },
        {
          url: '/to',
          img: '#',
          title: '呜呜'
        }
      ]
    }
  }
}
</script>
