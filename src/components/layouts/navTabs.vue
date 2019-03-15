<template>
  <div class="nav-tabs">
    <el-tag
      :closable="index !== 0"
      :type="route.path === tab.path ? 'success' : 'info'"
      class="tab-tag"
      v-for="(tab, index) in tabs"
      :key="index"
      @close="handleClose(tab)"
    >
      <router-link :to="tab.path"><span>{{tab.name}}</span></router-link>
    </el-tag>
  </div>
</template>

<script>
export default {
  computed: {
    route () {
      return this.$store.state.route ? this.$store.state.route : { meta: {} }
    },
    tabs () {
      return this.$store.state.tabs.tabs
    }
  },

  methods: {
    handleClose (tab) {
      this.$store.dispatch('tabs/CLOSE', tab)
      if (tab.path === this.route.path) {
        this.$router.replace(this.tabs[this.tabs.length - 1].path)
      }
      // this.$router.replace(this.tabs[])
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-tabs {
  overflow-x: auto;
  height: 40px;
  .tab-tag {
    cursor: pointer;
    transition: all 0.2s;
  }
}
</style>
