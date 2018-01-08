<template>
    <div id="cart">
        <h3>购物车Demo</h3>
        <hr>
        <table id="cartTable" cellspacing="0" cellpadding="0">
            <tr>
                <td>id</td>
                <td>名称</td>
                <td>价格</td>
                <td>操作</td>
            </tr>
            <tr v-for="item in cartData" :key="item.id">
                <td>{{item.id}}</td>  
                <td>{{item.productName}}</td>  
                <td>{{item.price}}</td>  
                <td>
                    <button class="addCartBtn" @click="addCart(item.id)">添加购物车</button>
                </td>  
            </tr>
        </table>
        <hr>
        <h3>已选商品</h3>
        <table id="addCartTable" cellspacing="0" cellpadding="0">
            <tr>
                <td>id</td>
                <td>名称</td>
                <td>价格</td>
                <td>数量</td>
                <td>操作</td>
            </tr>
            <tr>
                <td>1</td>
                <td>苹果</td>
                <td>5</td>
                <td>1个</td>
                <td>
                    <button class="del">删除</button>
                </td>
            </tr>
        </table>
        <table class="clearTable" cellspacing="0" cellpadding="0">
            <tr>
                <td>总数:</td>
                <td>总价:</td>
                <td>
                    <button class="clearCart">清空购物车</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(["cartData"])
    },
    methods: {
        addCart(amount) {  // 添加到购物车方法
            console.log(amount);
        }
    }
}
</script>

<style>
#cart{
    text-align: center;
}
.addCartBtn{
    background: #6e77eb;
    box-shadow: 1px 2px 3px #ccc;
    border: none;
    padding: 5px 7px;
    color: #fff;
    border-radius: 5px;
}
.del{
    background: #cb1623;
    box-shadow: 1px 2px 3px #ccc;
    border: none;
    padding: 5px 7px;
    color: #fff;
    border-radius: 5px;
}
#cartTable, #addCartTable{
    width: 800px;
    margin: 0 auto;
    border-top: 1px solid #ccc;
}
#cartTable td, #addCartTable td{
    border: 1px solid #ccc;
    border-top: none;
    padding: 7px;
}
.clearTable{
    width: 800px;
    margin: 10px auto 0 auto;
}
.clearTable td{
    background: #dfdcdf;
    text-align: right;
}
.clearCart{
    padding: 5px 15px;
    background: #cb1623;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 2px 3px #ccc;    
}
</style>