<template>
    <div class="headerPage" id="silder">
        <el-row class="tac">
            <el-col :span="4">  
                <el-menu
                default-active="/home"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
                <el-menu-item index="/home">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>首页</span>
                    </template>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/page1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <span>导航二</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">选项3</el-menu-item>
                        <el-menu-item index="3-2">选项4</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                 <el-submenu index="4">
                    <template slot="title">
                        <span>导航三</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">选项5</el-menu-item>
                        <el-menu-item index="4-2">选项6</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%; overflow: auto;">
                <router-view>
                        
                </router-view>
            </el-col>
        </el-row>
    </div>
</template>


<script>
  export default {
    data(){
        return {

        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
        
    }
  }
</script>
<style lang="scss" rel="stylesheet">

.headerPage {
    width: 100%;
    &:after {
        display: block;
        content: "";
        height: 0;
        clear: both;
    }
    .el-menu-vertical-demo {
        float: left;
        height: calc(100vh);
    }
   
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 253px;
    }
    .header {
        float: left;
        cursor: pointer;
    }    
}

</style>
