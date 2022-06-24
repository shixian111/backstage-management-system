<template>
  <el-container class="login-container">
    <el-card>
      <div class="el-card-header">
        <div style="clear: both;"></div>
        <img class="logoImg" src="../../../static/image/login-logo.png" alt="">
        <h2 class="login-title">智能管理系统</h2>
      </div>
      <el-form :rules="rules" label-position="left" :model="loginForm" ref="loginForm" label-width="80px">
        <el-form-item label="用户名" prop="username" style="position:relative">
          <el-input type="text" v-model="loginForm.username"
            @keyup.enter.native="goToPwdInput"
            maxlength="20"/>
          <span class="svg-container svg-container_user">
            <svg-icon icon-class="user" />
          </span>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input ref="pwd" type="password"
            v-model="loginForm.pwd"
            @keyup.enter.native="onLogin"
            maxlength="20" />
          <span class="svg-container svg-container_password">
            <svg-icon icon-class="password"/>
          </span>
        </el-form-item>
        <el-form-item label="记住密码" label-width="80px">
          <el-switch v-model="remember"></el-switch>
        </el-form-item>
        <el-button type="primary" @click="onLogin('loginForm')" :loading="loading">登录</el-button>
      </el-form>
    </el-card>
  </el-container>
</template>
<script>
import { isValidUsername } from '@/utils/validate'
import { saveToLocal, loadFromLocal } from '@/common/local-storage'
// import { mapActions } from 'vuex'
export default {
  // components: {
  //   LangSelect
  // },
  data() {
    // username 验证
    const validateUsername = (rule, value, callback) => {
      if (!isValidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    // pwd 验证
    const validatePwd = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        pwd: ''
      },
      remember: false,
      loading: false,
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateUsername },
          { required: true, trigger: 'change', validator: validateUsername }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validatePwd },
          { required: true, trigger: 'change', validator: validatePwd }
        ]
      }
    }
  },
  created() {
    // 初始化时读取localStorage用户信息
    if (loadFromLocal('remember', false)) {
      this.loginForm.username = loadFromLocal('username', '')
      this.loginForm.pwd = loadFromLocal('password', '')
      this.remember=true
    } else {
      this.loginForm.username = ''
      this.loginForm.pwd = ''
    }
  },
  methods: {
    // ...mapActions([
    //   'login'
    // ]),
    // 用户名输入框回车后切换到密码输入框
    goToPwdInput() {
      this.$refs.pwd.$el.getElementsByTagName('input')[0].focus()
    },
    // 登录操作
    onLogin() {
      this.$refs.pwd.$el.getElementsByTagName('input')[0].blur()
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // this.loading = true
          this.$router.push({ path: '/home' })
          if (this.remember) {
            saveToLocal('username', this.loginForm.username)
            saveToLocal('password', this.loginForm.pwd)
            saveToLocal('remember', true)
          } else {
            saveToLocal('username', '')
            saveToLocal('password', '')
            saveToLocal('remember', false)
          }
          // this.login(this.loginForm).then(() => {
          //   // 保存账号
          //   if (this.remember) {
          //     saveToLocal('username', this.loginForm.username)
          //     saveToLocal('password', this.loginForm.pwd)
          //     saveToLocal('remember', true)
          //   } else {
          //     saveToLocal('username', '')
          //     saveToLocal('password', '')
          //     saveToLocal('remember', false)
          //   }
            
          // }).catch(() => {
          //   this.loading = false
          // })
        } else {
          return false
        }
      })
    },
  },

}
</script>
<style scoped lang="scss">
.login-container{
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  right:0;
  bottom:0;
  //#044289, #494166
  background:mix(#044289, #494166) url('../../../static/image/login-bg.svg') center no-repeat;
  background-size:cover;
  overflow:hidden;
  .logoImg{
    width:100px;
    height:100px;
    margin-bottom: 5px;
  }
  .show-account{
    position:absolute;
    left:15px;
    bottom:20px;
    color:red;
    font-weight:500;
  }
  .el-card{
    position:absolute;
    top:50%;
    left:50%;
    margin:-225px 0 0 -250px;
    width:500px;
    height:450px;
    background:#fff;
    .el-card-header{
      text-align:center;
      margin-bottom: 15px;
      .lang-select{
        float:right;
        }
     }
    //  .el-card-body{
    //    padding:30px;
    //  }
      .el-input{  //这里一定要用deep 不然是不会生效的
       /deep/ .el-input__inner{
       text-indent:12px !important;
       }
     }
    .login-title{
      margin:0;
      text-align:center;
     }
    
    .svg-container{
      position:absolute;
      top:3px;
      left:5px;
      color:gray;
    }
    .svg-container_user{
        font-size:20px;
     }
    .svg-container_password{
       left:7px;
       font-size:16px;
     }
    .el-button--primary{
      width:100%;
      }
  }
  
}
 

</style>
