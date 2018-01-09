<template>
    <div id="cart">
        <h3>vuex实现购物车Demo</h3>
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
                    <button class="addCartBtn" @click="addCart(item)">添加购物车</button>
                </td>  
            </tr>
        </table>
        <h3>已选商品</h3>
        <table id="addCartTable" cellspacing="0" cellpadding="0">
            <tr>
                <td>id</td>
                <td>名称</td>
                <td>价格</td>
                <td>数量</td>
                <td>操作</td>
            </tr>
            <tr v-for="(items, index) in showCartList"  :key="index">
                <td>{{items.id}}</td>
                <td>{{items.productName}}</td>
                <td>{{items.price}}</td>
                <td>{{items.num}}</td>
                <td>
                    <button class="del" @click="delproduct(items)">删除</button>
                </td>
            </tr>
        </table>
        <table class="clearTable" cellspacing="0" cellpadding="0">
            <tr>
                <td>总数: {{totalNum}}</td>
                <td>总价: {{totalPrice}}</td>
                <td>
                    <button class="clearCart" @click="clearCart">清空购物车</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(["cartData"]),
        ...mapGetters(["showCartList"]),
        ...mapGetters(["totalPrice"]),
        ...mapGetters(["totalNum"])
    },
    methods: {
       ...mapActions(['addCart']),
       ...mapActions(['delproduct']),
       ...mapActions(["clearCart"])
    }
}
</script>

<style>
#cart{
    text-align: center;
}
.addCartBtn{
    background: #3743f1;
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