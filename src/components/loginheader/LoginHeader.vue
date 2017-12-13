<template>
  <div>
      <div class="login-header">
          <div class="header-left"><i class="logo"></i>蜂巢链</div>
          <div class="header-right">
              <span @click="fun('login')" :class="loginActive">登录</span>
              <span @click="fun('register')" :class="registerActive">创建您的蜂巢链账号</span>
          </div>
      </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  export default {
    name:'LoginHeader',
    data () {
      return {
        loginActive:'',
        registerActive:''
      }
    },
    mounted () {
        console.log(location.hash);
        var hash = location.hash.slice(1);
        if (hash.match('register')){
            this.registerActive = 'active';
            this.loginActive = '';
        }else {
            this.registerActive = '';
            this.loginActive = 'active';
        }
    },
    methods: {
        fun (str) {
            if (str == 'login'){
                this.$router.push({path:'/login'})
            }else {
                this.$router.push({path:'/register'})
            }
        }
    }
  }
</script>
<style lang="scss" scoped>
  .login-header {
      color: #333;
      font-size: 12px;
      width:100%;
      height: 40px;
      padding: 12px 12%;
      position: fixed;
      top:0;
      left:0;
      background: rgba(250,250,250,0.5);
      .logo {
      }
      .header-left{
          float:left;
          cursor: pointer;
      }
      .header-right{
          float: right;
          cursor: pointer;
          span {
              padding: 0 5px;
          }
          span.active {
              color: #555;
          }
      }
  }
</style>

