<template>
    <div id="count">
        <h3>{{msg}}</h3>
        <hr>
        <h3>{{count}}</h3>
        <p><button @click="add(10)">增加 + 10</button></p>
        <p><button @click="reduce">减少 - 1</button></p>
    </div>   
</template>
<script type="text/javascript">
// .将 $store.state.count 这个值赋给 count 也就是说让 $store.state.count=count, 可以直接用{{count}}进行取值的三种方法如下：
// 1. 用computed计算属性
// 2. 用Vuex中的 mapState 对象来赋值
// 3. 用Vuex中的 mapState 数组进行赋值
    import store from '../vuex/store.js';
    import { mapState, mapMutations, mapGetters } from 'Vuex';
    export default {
        data () {
            return {
                msg: "Hello Vue!"
            }
        },
        /* computed: {
            count() {
                return this.$store.state.count;
            }
        }, */
        /* computed:mapState({
            count:state => state.count   // 用es6写法 将state传入 然后把state.count赋值给count
        }), */
        computed: {
            ...mapState(['count']),   // ES6的扩展运算符 "..." 
            ...mapGetters(['count'])
        },
        methods:mapMutations(['add', 'reduce']),  // 将$store.commit('add', 10) 改为正常的绑定方法的写法
        store,   // 把store 的实例注入到组件中
    }

    
</script>
<style scoped>

</style>