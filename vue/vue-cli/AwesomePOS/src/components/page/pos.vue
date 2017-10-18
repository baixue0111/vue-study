<template>
    <div id="pos">
        <el-row>
            <el-col :span="7" class="pos-order" id="order-list">我是订单栏</el-col>
             <el-col :span="7">我是产品栏</el-col>
        </el-row>
    </div>   
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted: function () {   // 所有DOM加载完成之后执行的钩子函数
            var orderHeight = document.body.clientHeight;
           // console.log(orderHeight);
           document.getElementById("order-list").style.height = orderHeight + "px";
        }
    }
</script>

<style scoped>
.pos-order{
    background: #f9fafc;
    border-right: 1px solid #c0ccda;
}
</style>

