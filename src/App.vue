<template>
  <div id="app" @click="handleClose">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClose () {
      try {
        this.$store.dispatch('tabs/CLOSE')
      } catch (err) {
        // do nothing
      }
    }
  }
}
</script>
