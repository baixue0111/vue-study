<template>
    <el-container id="header">
        <el-row>
            <el-col>
                <transition>
                    <div class="header-three-parent" @click="transformBtn" :class="isRotate ? 'roate-div' : 'roated-div'">
                        <i class="header-three"></i>
                        <i class="header-three"></i>
                        <i class="header-three"></i>
                    </div>
                </transition>
            </el-col>
        </el-row>
        <el-col :span="24" :offset="20">
            <el-dropdown class="header-dropdown">
                <div class="el-dropdown-link user-info">
                    <span class="user-name">xiaobai</span>
                    <img src="../../assets/images/avart.jpg" alt="" class="user-avart">
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            isRotate: true
        }
    },
    methods: {
        transformBtn() {
            this.isRotate = !this.isRotate;
        }
    }
}    
</script>

<style lang="scss" rel="stylesheet">
#header{
    background: #eff2f7;
    height: 60px;
    line-height: 60px;    
    .header-three-parent{
        overflow: hidden;
        width: 20px;
        height: 20px;
        margin: 20px;
        padding: 0;
        .header-three{
            float: left;
            display: inline-block;
            border-top: 2px solid #000;
            margin: 2px 0;
            width: 20px;
            height: 0px;
        }
    }
    .roate-div{
        transform: rotate(0deg);
        transition: all .2s;
    }
    .roated-div{
        transform: rotate(90deg);
        transition: all .2s;
    }
    .header-dropdown{
        
       .user-info{
            height: 60px;
            line-height: 60px;
            overflow: hidden;
            span{
                float: left;
                font-weight: bold;
            }
            img{
                float: left;
                border-radius: 50px;
                width: 40px;
                height: 40px;
                margin: 10px 0 0 10px;
            }
       }
    }
}

</style>

