<template>
  <section class="admin-login-wrap">
    <div class="admin-login">
      <header>
        <h2>后台管理系统</h2>
      </header>
      <div class="login-form">
        <el-tabs v-model="activeName" @tab-click="handleTab">
          <!-- 用户名密码登录 -->
          <el-tab-pane label="用户名密码登录" name="normal">
            <el-form  @submit.native.prevent ref="normalRef" :model="formData" :rules="formRules">
              <el-form-item prop="username" label="">
                <el-input v-model="formData.username" size="medium" placeholder="用户名">
                  <my-icon class="login-icon" slot="prefix" icon-class="user"></my-icon>
                </el-input>
              </el-form-item>
              <el-form-item prop="password" label="">
                <el-input v-model="formData.password" type="password" size="medium" placeholder="密码">
                  <my-icon class="login-icon" slot="prefix" icon-class="password"></my-icon>
                </el-input>
              </el-form-item>
              <el-form-item prop="captcha" label="">
                <el-col :span="11">
                  <el-input v-model="formData.captcha" size="medium" placeholder="验证码"></el-input>
                </el-col>
                <el-col :span="11" :offset="2">
                  <!-- <img class="image-code" :src="IMAGE_CODE_URL" @click="refreshImageCode"> -->
                </el-col>
              </el-form-item>
              <el-form-item label="">
                <el-button size="medium" type="primary" native-type="submit" @click="handleLogin('normalRef')">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="手机号登录" name="mobile">
            <el-form @submit.native.prevent ref="mobileRef" :model="formData" :rules="formRules">
              <el-form-item prop="mobile" label="">
                <el-input v-model="formData.mobile" size="medium" placeholder="手机号">
                  <my-icon class="login-icon" slot="prefix" icon-class="phone"></my-icon>
                </el-input>
              </el-form-item>
              <el-form-item prop="smsCode" label="">
                <el-col :span="11">
                  <el-input v-model="formData.smsCode" size="medium" placeholder="验证码"></el-input>
                </el-col>
                <el-col :span="11" :offset="2">
                  <el-button :disabled="Boolean(smsCount)" size="medium" @click="handleResend">{{smsCount || smsText}}</el-button>
                </el-col>
              </el-form-item>
              <el-form-item label="">
                <el-button native-type="submit" size="medium" type="primary" @click="handleLogin('mobileRef')">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
        <div>(账号密码随便写)</div>
      </div>
    </div>
  </section>
</template>

<script>
import { USERNAME_RULES, PASSWORD_RULES, IMAGE_CODE_RULES, PHONE_RULES } from '@/utils/form-rules'

let smsTimer = null

export default {
  data () {
    return {
      activeName: 'normal', // 当前tab
      formData: {},
      formRules: {
        username: USERNAME_RULES,
        password: PASSWORD_RULES,
        captcha: IMAGE_CODE_RULES,
        smsCode: IMAGE_CODE_RULES,
        mobile: PHONE_RULES
      },
      smsCount: 0, // 验证码倒计时
      smsText: '获取验证码'
    }
  },

  mounted () {
    // todo 检测是否已经登录
  },

  destroyed () {
    clearInterval(smsTimer)
  },

  methods: {
    handleLogin (formRef) {
      this.$refs[formRef].validate((valid) => {
        if (valid) {
          console.log(this.activeName + '登录')
          // todo 根据redirect判断跳转，没有则跳转首页
          this.$store.dispatch('LOGIN', this.formData).then(_ => {
            this.$store.dispatch('USERINFO')
            if (this.$route.query.redirect) {
              this.$router.push(this.$route.query.redirect)
            } else {
              this.$router.push('/')
            }
          })
        }
      })
    },

    handleTab () {
      if (this.activeName === 'normal') {
        this.$refs['mobileRef'].resetFields()
      } else {
        this.$refs['normalRef'].resetFields()
      }
      this.formData = {}
    },

    handleResend () {
      if (!this.formData.mobile) {
        this.$message({
          type: 'warning',
          message: '请输入手机号'
        })
        return
      }
      // 发送验证码
      this.smsCountdown()
    },

    // 验证码倒计时
    smsCountdown () {
      this.smsCount = 60
      smsTimer = setInterval(() => {
        this.smsCount--
        if (this.smsCount <= 0) {
          clearInterval(smsTimer)
          this.smsText = '重新发送'
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-login-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #b8e5f8;
  .admin-login {
    width: 432px;
    margin: 150px auto 0;
    text-align: center;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box;
    background: #ffffff;
  }
  header {
    padding-top: 30px;
    padding-bottom: 5px;
  }
  h2 {
    color: #a391ea;
    font-weight: 400;
  }
  .login-form {
    padding: 0 40px 36px;
    font-size: 16px;
  }
  .el-button--medium {
    width: 100%;
  }
  .el-form-item--small.el-form-item {
    margin-bottom: 30px;
  }
  .login-icon {
    width: 2em;
  }
}
</style>
