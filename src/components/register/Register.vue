<template>
  <div>
      <login-header />
      <div class="register">
          <div>
              <div class="register-input">
                  <el-input v-model="username" @input="change" placeholder="请输入账户名"></el-input>
              </div>
              <div class="register-input">
                  <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
              </div>
              <div class="register-input">
                  <el-input type="password" v-model="repeatPassword" placeholder="请再次输入密码"></el-input>
              </div>
              <div class="register-input">
                  <el-input type="tel" v-model="tel" placeholder="请输入手机号码"></el-input>
              </div>
              <div class="register-input">
                  <el-input placeholder="请输入验证码"></el-input>
              </div>
              <div>
                  <el-button @click="submit($event)" type="primary" class="register-button">
                      提交
                  </el-button>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import LoginHeader from '../loginheader/LoginHeader'
import { Input,Button, Message } from 'element-ui';
export default {
  name:'Register',
  components:{
    LoginHeader
  },
  data () {
      return {
          username:'',
          password:'',
          repeatPassword:'',
          tel:''
      }
  },
  mounted () {
      console.log('register');
  },
  methods: {
      change() {
          console.log(this.username);
          console.log(arguments);
      },
      submit(e) {
          console.log(e);
          let username = this.username.trim();
          let password = this.password.trim();
          let repeatPassword = this .repeatPassword.trim();
          let tel = this.tel.trim();
          if (!username || !password || !repeatPassword || !tel) {
              Message.warning('请填写完整表单。')
          }
      }
  }
}
</script>
<style lang="scss" scoped>
    .register {
        padding-top: 100px;
        width: 30%;
        min-width: 300px;
        margin: 0 auto;
        margin-top:40px;
        .register-input {
            .el-input {
                margin: 8px 0;
            }
        }
        .register-button {
            display: block;
            width: 100%;
            margin-top: 30px;
        }
    }
</style>
