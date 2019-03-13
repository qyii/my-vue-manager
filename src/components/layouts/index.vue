<template>
  <div class="layout" v-if="showLayouts">
    <el-header>
      <img style="height: 90%" src="../../assets/logo.png" alt="">
      <h1>vue管理系统</h1>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
          <i class="profile"><img src="../../images/profile.jpg" alt=""></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="handleSet">设置</el-dropdown-item>
          <el-dropdown-item command="handlepwdDialog">修改密码</el-dropdown-item>
          <el-dropdown-item command="handleLogout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 修改密码弹窗 -->
      <el-dialog title="修改密码" :visible.sync="pwdDialog" width="500px">
        <el-form :model="pwdForm" ref="pwdRef" :rules="formRules">
          <el-form-item prop="password" label="">
            <el-input type="password" v-model="pwdForm.password" placeholder="新密码"></el-input>
          </el-form-item>
          <el-form-item prop="password2nd" label="">
            <el-input type="password" v-model="pwdForm.password2nd" placeholder="确认密码"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="pwdDialog = false">取消</el-button>
          <el-button type="primary" @click="handlePwd">确定</el-button>
        </div>
      </el-dialog>
    </el-header>
    <main>
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
      <div class="right">
        <slot>Main</slot>
      </div>
    </main>
  </div>
  <div v-else>
    <slot>Main</slot>
  </div>
</template>

<script>
import { REQUIRED_RULES } from '@/utils/form-rules'

export default {
  computed: {
    showLayouts () {
      this.$store.dispatch('LAYOUTS_STATUS', this.$route)
      return this.$store.state.showLayouts
    },
    route () {
      return this.$store.state.route ? this.$store.state.route : { meta: {} }
    }
  },

  data () {
    return {
      username: 'loosta',
      pwdDialog: false,
      pwdForm: {},
      formRules: {
        password: REQUIRED_RULES,
        password2nd: REQUIRED_RULES
      }
    }
  },

  methods: {
    handleLogout () {
      this.$store.dispatch('LOGOUT').then(_ => {
        console.log('退出登录成功')
        // 刷新当前页面让其自动跳转到登录页
        this.$router.go(0)
      })
    },

    handlepwdDialog () {
      this.$refs.pwdRef && this.$refs.pwdRef.resetFields()
      this.pwdDialog = true
    },

    handlePwd () {
      this.$refs.pwdRef.validate(valid => {
        if (valid) {
          // 相同校验
          if (this.pwdForm.password !== this.pwdForm.password2nd) {
            this.$message('两次输入密码不同')
            return false
          }
          // todo 修改密码
          this.$message({
            message: '修改成功，请重新登录',
            type: 'success'
          })
          this.pwdDialog = false
          this.$store.dispatch('LOGOUT')
          setTimeout(() => {
            this.$router.go(0)
          }, 1000)
        }
      })
    },

    handleSet () {
      // todo 设置
    },

    handleCommand (fName) {
      this[fName]()
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
.el-header {
  display: flex;
  z-index: 999;
  border-bottom: 2px solid #333333;
  h1 {
    flex: 1;
  }
  .el-dropdown {
    margin-top: 10px;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .profile {
    display: inline-block;
    width: 40px;
    height: 40px;
    transition: all 0.3s;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    &:hover {
      width: 50px;
      height: 50px;
    }
  }
  .el-icon-arrow-down {
    line-height: 40px;
    vertical-align: top;
  }
  img {
    line-height: 60px;
    vertical-align: middle;
  }
  h1 {
    margin: 0;
    line-height: 60px;
    font-size: 18px;
  }
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
    padding: 8px 10px;
    overflow-y: auto;
  }
}
</style>
