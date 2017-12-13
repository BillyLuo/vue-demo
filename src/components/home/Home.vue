<template>
  <transition name="el-zoom-in-center"
    leave-active-class="animated fadeOut">
    <div class="home">
        <home-header :logoWidth="logoWidth" />
        <div class="main">
            <Menu what="some"  @changewidth="changewidth" />
            <div class="content" :style="{left:left}">
                <h1>{{msg}}</h1>
                <router-link to="/home/body">Go to body</router-link>
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
import HomeHeader from './HomeHeader';
import Menu from '../menu/Menu'
export default {
    name:'Home',
    components:{
        HomeHeader,
        Menu
    },
    mounted(){
        console.log(this.$route)
    },
    data () {
        return {
            logoWidth:64,
            left:'64px',
            msg: 'this is home'
        }
    },
    methods:{
        changewidth (isCollapse) {
            if (isCollapse) {
                this.left = '64px';
                this.logoWidth = 64;
            }else {
                this.left = '200px';
                this.logoWidth = 200;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .content {
        position:absolute;
        overflow-y: auto;
        left:64px;
        right:0;
        top: 50px;
        bottom: 0;
        background: #eee;
        transition: 0.3s linear;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0
    }
</style>
