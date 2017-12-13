<template>
  <div class="home-header">
      <div class="header-inner">
        <div class="header-right">
            <span class="message">
                <el-badge :value="msgNum" class="item">
                    <span>message</span>
                </el-badge>
            </span>
            <span class="username">{{username}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import { Badge,Button } from 'element-ui'
export default {
    name:'HomeHeader',
    data () {
        return {
            msgNum:3,
            msg:'this is home header',
            username:'will'
        }
    }
}
</script>

<style lang="scss" scoped>
    .home-header {
        height: 50px;
        background: rgba(0,0,0,1);
        color: #fff;
        padding: 10px;
    }
    .header-inner {
        margin-top: 5px;
        .header-right {
            float: right;
            padding: 0 10px;
        }
        .message {
            padding: 0 20px;
            border-left: 1px solid #333;
            border-right: 1px solid #333;
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
            padding: 0 10px;
        }
    }
</style>
