<template>
    <el-container class="headerPage" id="silder">
        <el-aside width="254px">
            <el-row class="tac">
                <el-col>  
                    <el-menu
                    :default-active="defaultActive"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    unique-opened
                    router>
                    <!-- <el-menu-item index="silder">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>首页</span>
                        </template>
                    </el-menu-item> -->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-document"></i>   
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="silder">Table</el-menu-item>
                            <el-menu-item index="form">Form</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-news"></i>   
                            <span>导航二</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="echarts">ECharts</el-menu-item>
                            <el-menu-item index="exit">编辑</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-rank"></i>
                            <span>导航三</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="set">设置</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
        <el-container>
            <el-main id="silder-main">
                <router-view>
                        
                </router-view>
            </el-main>
        </el-container>
    </el-container>
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
        defaultActive() {
            return this.$route.path.replace('/', '');
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
        width: 253px;
    }
    .header {
        float: left;
        cursor: pointer;
    }
    #silder-main{
        margin: 0;
        padding: 0;
    }
}

</style>
