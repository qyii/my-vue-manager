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
        <router-link :to="tab.path"><span @click.right.prevent="handleRightClick($event, tab)">{{tab.name}}</span></router-link>
      </el-tag>
    </el-scrollbar>
    <!-- 自定义右键下拉菜单 -->
    <div ref="tabmenu" class="custom-right" :class="visible ? 'custom-right-active' : ''">
      <div @click="handleClose">关闭</div>
      <div @click.stop="closeOther">关闭其他</div>
      <div @click.stop="closeAll">关闭全部</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selecteTab: {}
    }
  },
  computed: {
    route () {
      return this.$store.state.route ? this.$store.state.route : { meta: {} }
    },
    tabs () {
      return this.$store.state.tabs.tabs
    },
    visible () {
      return this.$store.state.tabs.visible
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
    },

    closeAll () {
      this.$store.dispatch('tabs/CLOSE', { all: true })
      this.$router.replace('/')
    },

    closeOther () {
      this.$store.dispatch('tabs/CLOSE', { other: true, ...this.selecteTab })
      this.$router.replace(this.selecteTab.path)
    },

    handleScroll (e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.scrollWrapper
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft - eventDelta / 4
    },

    handleRightClick (e, tab) {
      this.selecteTab = tab
      this.$store.dispatch('tabs/OPEN')
      this.$refs.tabmenu.style.left = e.clientX + 'px'
      this.$refs.tabmenu.style.top = e.clientY + 'px'
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
  .custom-right {
    position: fixed;
    transition: all 0.2s;
    font-size: 0;
    min-width: 64px;
    height: 0;
    z-index: 2;
    background: #ffffff;
    box-shadow: 1px 1px 6px #cfcde0;
    opacity: 0;
    visibility: hidden;
    > div {
      padding: 4px 8px;
      cursor: pointer;
      &:hover {
        background: #f0f0ff;
      }
    }
  }
  .custom-right-active {
    width: auto;
    height: auto;
    font-size: 12px;
    opacity: 1;
    visibility: visible;
  }
}
</style>
