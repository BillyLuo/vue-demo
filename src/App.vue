<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css';
export default {
  name: 'app'
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
