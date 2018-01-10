<template>
    <div class="headerPage">
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                    <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-time"></i>
                        <span>导航二</span>
                    </template>
                    <el-menu-item-group>
                    <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="2-1">选项3</el-menu-item>
                        <el-menu-item index="2-2">选项4</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                 <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>导航三</span>
                    </template>
                    <el-menu-item-group>
                    <!-- <template slot="title">分组一</template> -->
                        <el-menu-item index="3-1">选项5</el-menu-item>
                        <el-menu-item index="3-2">选项6</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>


<script>
  export default {
    methods: {
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
    }
   
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
    .header {
        float: left;
        cursor: pointer;
    }    
}

</style>
