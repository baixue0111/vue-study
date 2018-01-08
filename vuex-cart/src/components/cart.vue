<template>
    <div id="cart">
        <h3>购物车</h3>
        <hr>
        <table id="cartTable" cellspacing="0" cellpadding="0">
            <tr>
                <td>商品id</td>
                <td>商品名称</td>
                <td>商品价格</td>
                <td>加入购物车</td>
            </tr>
            <tr v-for="item in cartData">
                <td>{{item.id}}</td>  
                <td>{{item.productName}}</td>  
                <td>{{item.price}}</td>  
                <td>
                    <button>加入购物车</button>
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
        /* newCartList() {
            return this.$store.getters.cartDate;
        } */
    }
}
</script>

<style>
#cart{
    text-align: center;
}
#cartTable{
    width: 800px;
    margin: 0 auto;
    border-top: 1px solid #ccc;
}
#cartTable td{
    border: 1px solid #ccc;
    border-top: none;
    padding: 7px;
}
</style>