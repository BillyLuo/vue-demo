<template>
  <div class="home-header">
      <div class="header-inner">
        <div class="header-left" :style="{width:logoWidth+'px'}">蜂巢链</div>
        <div class="header-right">
            <span class="message">
                <el-badge :value="msgNum" class="item">
                    <span>message</span>
                </el-badge>
            </span>
            <span class="username">
                {{username}}
                <div class="log-out">
                    <el-button @click="logout">登出</el-button>
                </div>
            </span>
            
        </div>
      </div>
  </div>
</template>

<script>
import { Badge,Button } from 'element-ui'
export default {
    name:'HomeHeader',
    props:{
        logoWidth:{
            type:Number,
            default:64
        }
    },
    data () {
        return {
            msgNum:3,
            msg:'this is home header',
            username:'',
        }
    },
    mounted(){
        let user = sessionStorage.getItem('user');
        if (user) {
            try {
                let userinfo = JSON.parse(user);
                if (userinfo && userinfo.username ){
                    this.username = userinfo.username;
                }else {
                    this.err()
                }
            } catch (error) {
                this.err();
            }
        }else{
            this.err();
        }
    },
    methods:{
        err(){
            alert('用户信息出错，请返回重新登录');
            this.$router.push('/login')
        },
        logout(){
            sessionStorage.removeItem('user');
            this.$router.push({
                path:'/login'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-header {
        height: 50px;
        background: #262930;
        color: #fff;
        padding: 10px;
        position: relative;
    }
    .header-inner {
        margin-top: 5px;
        .header-left {
            width: 64px;
            background: #2c9dfa;
            position: absolute;
            top: 0;
            heiht: 50px;
            height: 50px;
            left: 0;
            line-height: 50px;
            text-align: center;
            transition: 0.3s linear;
            cursor: pointer;
        }
        .header-right {
            float: right;
            padding: 0 10px;
        }
        .message {
            padding: 0 20px;
            cursor: pointer;
            border-left: 1px solid #999;
            border-right: 1px solid #999;
        }
        .item{
            padding: 0 5px;
            height: 30px;
            line-height: 30px;
            span {
                // margin: 0 10px;
            }
        }
        .username {
            display:inline-block;
            padding: 0 10px;
            cursor: pointer;
            height: 30px;
            &:hover .log-out {
                display: block;
            }
        }
        .log-out{
            position: absolute;
            top: 50px;
            right: 5px;
            padding-top: 4px;
            display: none;
            z-index: 10;
        }
    }
</style>
