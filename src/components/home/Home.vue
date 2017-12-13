<template>
  <transition name="el-zoom-in-center">
    <div class="home">
        <home-header />
        <h1>{{msg}}</h1>
    </div>
  </transition>
</template>

<script>
import HomeHeader from './HomeHeader';
export default {
    name:'Home',
    components:{
        HomeHeader
    },
    data () {
        return {
            msg: 'this is home'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
