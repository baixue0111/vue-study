<template>
    <div id="home">
        <el-container>
            <v-header></v-header>
        </el-container>
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

