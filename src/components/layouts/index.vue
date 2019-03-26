<template>
  <div class="layout">
    <main>
      <side-menu />
      <div class="right">
        <Head />
        <div class="right-content">
          <nav-tabs />
          <router-view/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideMenu from './sideMenu'
import Head from './head'
import NavTabs from './navTabs'

export default {
  computed: {
    asyncRoute () {
      return this.$store.state.permission.asyncRouter
    }
  },

  components: {
    SideMenu,
    Head,
    NavTabs
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
main {
  display: flex;
  height: calc(100% - 60px);
  padding: 0 0 20px 0;
  min-height: 100%;
  overflow: hidden;
  background: #f7f6fa;
  .el-menu {
    width: 220px;
    height: calc(100% - 60px);
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
      background: rgba(144, 146, 152, 0.6);
    }
  }
  .right {
    flex: 1;
    box-sizing: border-box;
    overflow-y: auto;
  }
  .right-content {
    padding: 10px 8px;
  }
}
</style>
