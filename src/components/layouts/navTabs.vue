<template>
  <div class="nav-tabs">
    <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-tab" @wheel.native.prevent="handleScroll">
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
    </el-scrollbar>
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
    },
    scrollWrapper () {
      return this.$refs.scrollContainer.$refs.wrap
    }
  },

  methods: {
    handleClose (tab) {
      this.$store.dispatch('tabs/CLOSE', tab)
      if (tab.path === this.route.path) {
        this.$router.replace(this.tabs[this.tabs.length - 1].path)
      }
      // this.$router.replace(this.tabs[])
    },

    handleScroll (e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft - eventDelta / 4
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-tabs {
  width: 100%;
  height: 40px;
  overflow: hidden;
  .scroll-tab {
    // overflow: hidden;
    // position: relative;
    // width: 100%;
    white-space: nowrap;
    // /deep/ {
    //   .el-scrollbar__bar {
    //     bottom: 0px;
    //   }
    //   .el-scrollbar__wrap {
    //     height: 38px;
    //   }
    // }
  }
  .tab-tag {
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;
  }
}
</style>
