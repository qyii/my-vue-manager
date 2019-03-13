<template>
  <el-aside width="220px">
    <router-link to="/">
      <header class="side-header">
        <img style="width: 90%" src="../../assets/logo.png" alt="">
        <div>vue管理系统</div>
      </header>
    </router-link>
    <el-menu
      :default-active="route.meta.activeMenu"
      router
      unique-opened
      background-color="#495060"
      text-color="#c9cbd0"
      active-text-color="#fff"
    >
    <el-menu-item index="/"><my-icon icon-class="home"></my-icon> 首页</el-menu-item>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  position: absolute;
  &::-webkit-scrollbar {
    display: none;
  }
  .side-header {
    cursor: pointer;
    img {
      transform: rotate(0);
      transition: all 2s;
    }
    img:hover {
      transform: rotate(180deg);
    }
  }
}
</style>
