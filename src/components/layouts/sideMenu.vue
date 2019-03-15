<template>
  <el-aside :width="isCollapse ? '50px' :'220px'">
    <router-link to="/">
      <header class="side-header">
        <img style="width: 90%;margin-top: 6px" v-if="isCollapse" src="../../assets/logo.png" alt="">
        <div v-else>vue管理系统</div>
      </header>
    </router-link>
    <el-menu
      class="my-el-menu"
      :default-active="route.meta.activeMenu"
      router
      unique-opened
      background-color="#192d4d"
      text-color="#c9cbd0"
      active-text-color="#3ce4e9"
      :collapse="isCollapse"
    >
    <el-menu-item index="/">
      <my-icon icon-class="home"></my-icon>
      <span>首页</span>
    </el-menu-item>
      <el-submenu index="system">
        <template slot="title">
          <my-icon icon-class="set"></my-icon>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/system/permit">权限设置</el-menu-item>
          <el-menu-item index="/system/password">密码设置</el-menu-item>
          <el-menu-item index="/system/other">其他设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  computed: {
    route () {
      return this.$store.state.route ? this.$store.state.route : { meta: {} }
    },
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  // position: absolute;
  transition: width 0.3s;
  text-align: left;
  &::-webkit-scrollbar {
    display: none;
  }
  .el-menu {
    // height: calc(100% - 60px);
    transition: width 0.3s;
    overflow-y: auto;
    &::-webkit-scrollbar-thumb {
      background: rgba(144, 146, 152, 0.6);
    }
  }
  .side-header {
    text-align: center;
    height: 60px;
    line-height: 60px;
    background: #1f3463;
  }
  .my-el-menu:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
  }
}
</style>
