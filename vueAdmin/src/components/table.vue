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
                        <el-button type="primary" @click="checkUser">查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="showAdd">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <!-- 列表 -->
            <el-table :data="filterTableList" v-loading="listLoading" style="width: 100%" highlight-current-row class="elTable" @selection-change="selectChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="index" width="60"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
                <el-table-column prop="sex" label="性别" width="100" :formatter="formatterSex" sortable></el-table-column>    <!-- formatter 格式化内容 -->
                <el-table-column prop="age" label="年龄" width="100" sortable></el-table-column>
                <el-table-column prop="birth" label="生日" width="120" sortable></el-table-column>
                <el-table-column prop="address" label="地址" min-width="170" sortable></el-table-column>
                <el-table-column label="操作" min-width="150">
                    <template slot-scope="scope">
                        <el-button size="small">编辑</el-button>
                        <!-- scope 会将当前点击删除的整行数据作为参数传入 -->
                        <el-button size="small" type="danger" @click="delEvent(scope)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-col :span="24" class="tool">
                <el-button type="danger" :disabled="this.selectList.length === 0" @click="batchRemove">批量删除</el-button>
                <el-pagination background layout="prev, pager, next" :total="tableData.length" :page-size="10" style="float: right; margin-top: 5px;"></el-pagination>
            </el-col>
            <!-- 新增 -->
            <el-dialog title="新增" v-model="showDialog" :visible.sync="showDialog" :close-on-click-modal="false" class="addDialog">
                <el-form :model="addData" :rules="ruleName" ref="addForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input :model="addData.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="addData.sex">
                            <el-radio :label="1">男</el-radio>
                            <el-radio :label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input-number v-model="addData.age" :min="0" :max="200" controls-position="right"></el-input-number>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-date-picker v-model="addData.birth" type="date" placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input type="textarea" v-model="addData.address"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="cancelDialog = false">取消</el-button>
                    <el-button type="primary" @click="subDialog" :loading="addLoading">提交</el-button>
                </div>
            </el-dialog>
        </section>
    </div>
</template>

<script>
import header from './header/header';
import {formatDate} from '../common/date.js';
export default {
    name: 'table',
    data() {
        return {
            formInline: {   // 查询时获取用户输入的姓名
                username: ''
            },
            tableData: [],  // 原始数据列表
            selectList: [],   // 选中列表
            listLoading: false,   // loading 显示状态
            showDialog: false,   // 是否显示“新增”页面
            addLoading: false,  // 新增页面点击“提交”loading 

            // 新增页面数据
            addData: {
                name: "",
                sex: -1,
                age: 0,
                birth: "",
                address: ""
            },
            ruleName: {
                name: [
                    { require: true, message: "请输入姓名", trigger: "blur"}
                ]
            }
        }
    },
    created() {
        this.getTableData()
    },
    methods: {
        // 性别显示转换
        formatterSex(row) {
            // row 表示每行的数据
            return row.sex == 1 ? "男" : "女";
        },
        // 查询（根据用户输入的姓名查找）
        checkUser() {
            let iptName = this.formInline.username;
            let _this = this;
            _this.tableData.forEach((item, index) => {
                if(item.name != iptName) {
                    item.isDel = true;
                }
            })
        },
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
            this.$confirm("确认删除选中记录吗？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(() => {
                this.listLoading = true;
                let _this = this;  // 保存下this，在forEach中的匿名函数中this指向会发生变化，所以提前保存一下，否则会获取不到tableData的值
                let json_id = _id.split(",");   // 把字符串分割成字符串数组

                _this.tableData.forEach(function(item, index) {

                    json_id.forEach(function(item_id, index_id) {

                        if(item.id == item_id) {
                            item.isDel = true;
                        }

                    })
                })
                this.listLoading = false;
            })
        },
        // 删除每条记录事件
        delEvent(val) {
            // console.log(val)
            this.$confirm("确认删除该条记录吗？", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消"
            }).then(() => {
                this.listLoading = true;
                let del_id = val.row.id;
                let _this = this;
                _this.tableData.forEach((item, index) => {
                    if(item.id == del_id) {
                        item.isDel = true;
                    }
                })
                this.$message({
                    type: "success",
                    message: "删除成功！"
                })
                this.listLoading = false;
            });
        },
        // 显示新增页面
        showAdd() {
            this.showDialog = true;
            this.addData = {
                name: "",
                sex: -1,
                age: 0,
                birth: "",
                address: ""
            }
        },
        // 新增 -- 取消
        cancelDialog() {
            // console.log(this.addData)
        },
        // 新增 -- 提交
        subDialog() {
            // console.log(111)
            this.$refs.addForm.validate((val) => {
                if(val) {
                    // console.log(val)
                    this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        this.addLoading = true;
                        let newDate = this.addData.birth;
                        newDate = (newDate == "" || !newDate) ? '' : formatDate(newDate, 'yyyy-MM-dd')
                        // console.log(newDate)
                        console.log(this.addData.birth)
                    })
                }
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
        .addDialog{
            .el-form-item__content{
                margin-left: 40px;
            }
        }
    }
}


</style>

