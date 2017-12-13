<template>
    <div>
        <h3>{{msg}}</h3>
    </div>
</template>
<script>
export default {
    name:'HomeBody',
    
    mounted(){
        console.log(this.$route)
    },
    data () {
        return {
            msg: 'this is body'
        }
    }
}
</script>
<style lang="scss">
    
</style>