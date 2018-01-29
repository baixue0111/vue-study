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
                        <el-button type="primary">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-table border style="width: 100%" highlight-current-row>
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="" label="姓名" width="120" sortable></el-table-column>
                <el-table-column prop="" label="性别" width="100" sortable></el-table-column>
                <el-table-column prop="" label="年龄" width="100" sortable></el-table-column>
                <el-table-column prop="" label="生日" width="120" sortable></el-table-column>
                <el-table-column prop="" label="地址" min-width="180" sortable></el-table-column>
                <el-table-column prop="" label="操作" min-width="150">

                </el-table-column>
            </el-table>
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
                username: '',
                tableData: []
            }
        }
    },
    created() {
        getTableData()
    },
    methods: {
        getTableData() {
            axios.post('https://www.easy-mock.com/mock/5a6e8a2e376cc81223703ef3/admin/user', {

            }).then(function(response) {
                console.log(response)
            }).catch(function(error) {
                console.log(error)
            })
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

