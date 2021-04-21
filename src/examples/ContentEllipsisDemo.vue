<template>
       <c-ellipsis :content='ellipsisContent' width="100" height="100" ></c-ellipsis>
</template>
<script>
export default {
  data () {
    return {
      ellipsisContent: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.`
    }
  }
}
</script>
