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
            <el-table :data="filterTableList" v-loading="listLoading" style="width: 100%" highlight-current-row class="elTable" @selection-change="selectChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
                <el-table-column prop="sex" label="性别" width="100" sortable></el-table-column>
                <el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
                <el-table-column prop="birth" label="生日" width="120" sortable></el-table-column>
                <el-table-column prop="address" label="地址" min-width="170" sortable></el-table-column>
                <el-table-column label="操作" min-width="150">
                    <template slot-scope="scope">
                        <el-button size="small">编辑</el-button>
                        <el-button size="small" type="danger">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-col :span="24" class="tool">
                <!-- <div> -->
                    <el-button type="danger" :disabled="this.selectList.length === 0" @click="batchRemove">批量删除</el-button>
                <!-- </div> -->
                <el-pagination background layout="prev, pager, next" :total="1000" style="float: right; margin-top: 5px;"></el-pagination>
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
            listLoading: false,   // loading 显示状态
            selectList: []   // 选中列表
        }
    },
    created() {
        this.getTableData()
    },
    methods: {
        // 获取用户数据
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
        },
        // 勾选删除项
        selectChange(val) {  // element中表格事件（当选择项发生变化时触发）其中val表示你所勾选的每行的数据
            // console.log(val)
            this.selectList = val;
            // console.log(this.selectList)
        },
        // 批量删除
        batchRemove() {  
            let _id = this.selectList.map((item, index) => {   // 遍历勾选中的数据
                return item.id
            }).toString();
            // console.log(_id)
            this.$confirm("确认删除选中记录吗？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.listLoading = true;
                // 点击确定时就改变isDel的状态
                // console.log(_id);
                let json_id = _id.split(",");   // 把字符串分割成字符串数组

                // json_id.map(item => {
                //     // console.log(item);
                //     if( item == this.tableData.id ) { // 有问题？？？？/
                //         console.log(this.tableData)
                //         this.tableData.isDel = true;
                //     }
                // })
                for( var i = 0; i < this.tableData.length; i++ ){
                    console.info(this.tableData.length)
                    for ( var j = 0; j < json_id.length; j++ ) {
                        console.log(this.tableData[i].id)
                        if(this.tableData[i].id == json_id[j]){
                            //改变 isDel
                            this.tableData[i].isDel = true;
                        }
                    }
                    // newDat.push(this.tableData[i]);

                }
                  this.listLoading = false;
                // console.log(json_Id);
                // if(_id == this.tableData.id) {
                //     this.tableData.isDel = true;
                // }
            })
        }
    },
    computed: {
        filterTableList() {   // 过滤用户列表数据，把isDel=false的显示出来，以此来判断是否删除
            let newTableList = this.tableData;
            return newTableList.filter(function(item) {
                return item.isDel == false;
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

