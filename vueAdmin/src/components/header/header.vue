<template>
  <div class="headerPage">
      <!-- <svg class="icon-mulu" aria-hidden="true">
        <use xlink:href="#icon-xxx"></use>
    </svg> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
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
        </el-menu-item>
    </el-menu>
   <div v-model="isCollapse" class="header" >
    <span @click="changeBtn" :label="status">切换</span>
   </div>
  </div>
</template>
<script>
export default {
    data() {
      return {
        isCollapse: true,
        status: false
      };
    },
    methods: {
        changeBtn() {
            console.log(this.status);
            this.status = !this.status;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
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
        width: 64px;
    }
    .el-menu-vertical-demo-leave-active, .el-menu-vertical-demo-enter-active {
        transition: all 1s ease;
    }
    .el-menu-vertical-demo-leave-active,.el-menu-vertical-demo-enter {
        width: 200px !important;
    }
    .el-menu-vertical-demo-leave,.el-menu-vertical-demo-enter-active {
        width: 64px;
    }
    /* .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: calc(100vh);
    } */
    .header {
        float: left;
        current: pointer;
    }    
}


</style>

