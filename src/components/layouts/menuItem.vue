<template>
  <div>
    <template v-for="menu in menus">
      <template v-if="!menu.meta.activeMenu">
        <el-menu-item v-if="!menu.children" :key="menu.name" :index="menu.path">
          <my-icon v-if="menu.meta.icon" :icon-class="menu.meta.icon"></my-icon>
          <span v-if="!isCollapse">{{menu.meta.name}}</span>
        </el-menu-item>

        <el-submenu v-if="menu.children" :key="menu.name" :index="menu.name">
          <template slot="title">
            <my-icon :icon-class="menu.meta.icon"></my-icon>
            <span v-if="!isCollapse">{{menu.meta.name}}</span>
          </template>
          <!-- 递归调用 -->
          <MenuItem :menus='menu.children'></MenuItem>
        </el-submenu>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    menus: {
      type: Array,
      required: true,
      default: () => []
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  }
}
</script>
