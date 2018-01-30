<template>
    <div id="table">
        <el-container>
            <v-header></v-header>            
        </el-container>
        <section class="table-container">
            <!-- 查询 -->
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
            <!-- 列表 -->
            <el-table :data="tableData" v-loading="listLoading" style="width: 100%" highlight-current-row class="elTable">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
                <el-table-column prop="sex" label="性别" width="100" sortable></el-table-column>
                <el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
                <el-table-column prop="birth" label="生日" width="120" sortable></el-table-column>
                <el-table-column prop="address" label="地址" min-width="170" sortable></el-table-column>
                <el-table-column label="操作" min-width="150">
                    <template scope="scope">
                        <el-button size="small">编辑</el-button>
                        <el-button size="small" type="danger">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-col :span="24" class="tool" style="padding-bottom: 0px;">
                <el-button type="danger">批量删除</el-button>
                <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
            </el-col>
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
            },
            tableData: [],
            listLoading: false
        }
    },
    created() {
        this.getTableData()
    },
    methods: {
        getTableData() {
            this.listLoading = true;
            let _this = this;
            this.axios.post('https://www.easy-mock.com/mock/5a6e8a2e376cc81223703ef3/admin/user', {

            }).then(function(response) {
                // console.log(response.data.user);
                _this.tableData = response.data.user;
                // console.log(_this.tableData);
                _this.listLoading = false;
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
#table{
    .table-container {
        padding: 20px;
        font-family: "YaHei";
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
        .elTable{
            border: 1px solid #dfe6ec;
            border-bottom: none;
            font-size: 14px;
            color: #1f2d3d;
            thead{
                tr{
                    
                    background: #eef1f6;
                    height: 40px;
                    color: #1f2d3d;                   
                    th{
                        font-weight: bold;
                        padding: 6px 0;
                    } 
                }
            }
            tbody{
                td{
                    padding: 6px 0;
                }
            }
        }
    }
}


</style>

