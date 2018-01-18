<template>
    <div id="table">
        <el-container>
            <v-header></v-header>            
        </el-container>
        <section class="table-container">
            <el-col :span="24" class="tool" style="padding-bottom: 0px;">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                        <el-input v-model="formInline.username" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">取消</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-main>
                <h3>我是table.vue</h3>
            </el-main>
        </section>
    </div>
</template>

<script>
import header from './header/header';
export default {
    name: 'table',
    data() {
        return {
            formInline: {
                username: ''
            }
        }
    },
    components: {
        'v-header': header
    }
}    

</script>

<style lang="scss" ref="stylesheet">
.table-container {
    padding: 20px;
    .tool{
        background: #f2f2f2;
        padding: 10px;
        margin: 10px 0;
        .demo-form-inline{
            display: block;
            margin-top: 0px;
            .el-form-item{
                margin-bottom: 10px;
            }
        }
    }
}


</style>

