<template>
  <div class="login-wrapper">
    <LoginHeader />
    <div class="login">
      <div>
        <el-input class="login-input" placeholder="用户名" v-model="username"></el-input>
      </div>
      <div>
        <el-input class="login-input" type="password" placeholder="密码" v-model="password"></el-input>
      </div>
      <div>
        <el-button :loading="loading" @click="submit" type="primary" :class="['login-submit']">submit</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button, Select,Input, Message } from 'element-ui';
import LoginHeader from './loginheader/LoginHeader';
export default {
  name: 'Login',
  components:{
    LoginHeader
  },
  data () {
    return {
      username:'admin',
      password:'123456',
      loading:false
    }
  },
  methods:{
    submit () {
      let username = this.username;
      let password = this.password;
      console.log(username,password);
      if (!username ) {
        Message.warning('please input your username');
        return;
      }
      if (!password) {
        Message.warning('please input your password');
        return;
      }
      this.loading = true;
      if (username == 'admin' && password == '123456') {
        let that = this;
        // console.dir(this.$http)
        setTimeout(() => {
          sessionStorage.removeItem('user');
          sessionStorage.setItem('user',JSON.stringify({username}))
          that.$router.push({path:'/home',query:{a:'3',b:'4'}})
        }, 200);
      }else {
        Message.error('wrong usernmae or password');
        this.loading = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-wrapper {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom:0;
  background: url('../assets/imgs/login.png') no-repeat center;
  background-size: 100% 100%;
}
.login {
  width: 40%;
  min-width: 300px;
  max-width: 400px;
  height: 250px;
  margin: 0 auto;
  margin-top: 20%;
  border-radius: 4px;
  background: rgba(255,255,255,0.1);
  border: 1px solid #fff;
  box-shadow: 1px 1px 2px #666;
  padding: 40px;
  .login-input {
    margin: 5px 0;
  }
  .login-submit{
    margin-top: 30px;
    display: block;
    width: 100%;
    span {
      display: block;
    }
  }
}
</style>
