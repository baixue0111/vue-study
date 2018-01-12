<template>
    <el-container id="header">
        <el-header class="header-three-parent">
            <i class="header-three"></i>
            <i class="header-three"></i>
            <i class="header-three"></i>
        </el-header>
        
    </el-container>
</template>

<script>
export default {
    data() {
        return {

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
}

</style>

