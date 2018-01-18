<template>
    <div id="home">
        <el-container>
            <v-header></v-header>
        </el-container>
        <header class="header">数据统计</header>
        <el-row>
            <el-col :span="4">
                <div>当日数据:</div>
            </el-col>
            <el-col :span="4">
                <div><span>34</span>新增用户</div>
            </el-col>
            <el-col :span="4">
                <div><span>35</span>新增订单</div>
            </el-col>
        </el-row>
        <el-main>
            <h3>我是home.vue</h3>
        </el-main>
    </div>
</template>

<script>

import header from './header/header'
export default {
    name: 'home',
    data() {
        return {

        }
    },
    components: {
        'v-header': header
    }
}    

</script>

<style>


</style>

