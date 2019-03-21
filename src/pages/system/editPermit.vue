<template>
  <div>编辑权限 {{activeRoute.params.id}}</div>
</template>

<script>
export default {
  computed: {
    activeRoute () {
      return this.$route
    }
  }
}
</script>
