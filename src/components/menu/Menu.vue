<template>
  <div class="main-menu">
        <div style="text-align:center;background:#262930;color:#fff;border-bottom:1px solid #fff" @click="toggleMenu">
            <span><i style="font-size:30px" :class="isCollapse?'el-icon-caret-right':'el-icon-caret-left'"></i></span>
        </div>
        <el-menu default-active="1" class="el-menu-demo" @open="handleOpen" 
        @select="selectMenu"
        @close="handleClose" 
        background-color="#262930"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse">
            <!-- <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item> -->


            <el-submenu v-if="i.children && i.children.length > 0" :key="i.index" :index="i.index" v-for="i in menu">
                <template slot="title">
                    <i :key="i.index" :class="i.icon"></i>
                    <span slot="title">{{i.name}}</span>
                </template>
                <el-menu-item-group v-if="o.title" :key="o.index" v-for="o in i.children">
                    <span slot="title">{{o.title}}</span>
                    <el-menu-item :key="n.index" :index="n.index" v-if="o.children.length" v-for="n in o.children">{{n.name}}</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group v-else :key="n.index" :index="n.index" v-for="n in o.children">
                    <el-menu-item :index="n.index">{{n.name}}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :index="i.index">
                <i :class="i.icon"></i>
                <span slot="title">{{i.name}}</span>
            </el-menu-item>
        </el-menu>
  </div>
</template>


<style>
  .el-menu-demo {
      border-right: 1px solid #262930;
  }
  .main-menu {
      float: left;
      height: calc(100vh - 50px);
      background:#262930;
  }
  .el-menu-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    name:'Menu',
    props:['what'],
    data() {
      return {
        isCollapse: true,
        menu:[]
      };
    },
    mounted(){
        this.hello();
        console.log('menu',this.what);
    },
    methods: {
      selectMenu (key,path){
          console.log(key,path);
          this.isCollapse = true;
          this.$emit('changewidth',true);
      },
      hello () {
          var menu = [
              {name:'导航一',index:'1',icon:'el-icon-menu'},
              {name:'导航二',index:'2',icon:'el-icon-document'},
              {name:'导航四',index:'4',icon:'el-icon-message',
              children:[
                  {title:'分组1',children:[{name:'4-1',index:'4-1'}]},
                  {title:'分组2',children:[{name:'4-2',index:'4-2'}]}
              ]},
              {name:'导航五',index:'5',icon:'el-icon-upload'},
              {name:'导航六',index:'6',icon:'el-icon-error'}
          ]
        this.menu = menu;
      },
      toggleMenu (){
          this.isCollapse = !this.isCollapse;
          this.$emit('changewidth',this.isCollapse);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        console.log('open');
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        console.log('close');
      }
    }
  }
</script>