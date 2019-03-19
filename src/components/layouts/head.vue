<template>
  <div class="layout-head">
    <div :class="isCollapse ? 'menu-spread-active' : 'menu-spread'" @click="handleSpread">
      <my-icon class="menu-spread-icon" icon-class="spread"></my-icon>
    </div>
    <el-breadcrumb separator="/" class="my-bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-if="route.path !== '/home'">
        <el-breadcrumb-item :key="i.name" v-for="i in route.matched" :replace="true">{{i.meta.name}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <!-- <p>欢迎{{username}}</p> -->
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="profile"><img src="../../images/profile.jpg" alt=""></i>
        <i class="el-icon-arrow-down el-icon--right"></i>
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
  </div>
</template>

<script>
import { REQUIRED_RULES } from '@/utils/form-rules'

export default {
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

  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    },
    route () {
      return this.$route
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

    handleSpread () {
      this.$store.dispatch('TOGGLE_MENU')
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
.layout-head {
  height: 60px;
  background: #ffffff;
  box-shadow: 0 1px 4px #d5d7f2;
  .menu-spread {
    height: 100%;
    width: 60px;
    float: left;
    cursor: pointer;
    &:hover {
      background-color: #f8f9fe;
    }
  }
  .menu-spread-active {
    @extend .menu-spread;
    .menu-spread-icon {
      transform: rotate(0);
    }
  }
  .menu-spread-icon {
    width: 1.5em;
    height: 1.5em;
    margin-left: 1em;
    margin-top: 1em;
    transform: rotate(180deg);
  }
  .el-dropdown {
    margin-top: 10px;
    float: right;
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
  .my-bread {
    height: 60px;
    line-height: 60px;
    float: left;
  }
}
</style>
