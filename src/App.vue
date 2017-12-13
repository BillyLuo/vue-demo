<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css';
import 'animate.css/animate.css';
export default {
  name: 'app',
  watch:{
    $route(to,from){
      // console.log('to',to);
    }
  }
}
</script>

<style lang="scss">
#app {
  box-sizing: border-box;
}
* {
  font-size: 14px;
}
#app * {
  box-sizing: inherit;
}
</style>
