<template>
    <div id="form">
        <el-container>
            <v-header></v-header>
        </el-container>
        <el-main>
            <h3>我是form.vue</h3>
        </el-main>
    </div>
</template>

<script>
import header from './header/header';
export default {
    name: 'form',
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

