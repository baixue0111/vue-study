import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    // count: 1,
    cartList: [
        {id: 1, productName: "苹果", price: 5},
        {id: 2, productName: "橘子", price: 2},
        {id: 3, productName: "香蕉", price: 4},
        {id: 4, productName: "葡萄", price: 8},
        {id: 5, productName: "橙子", price: 1}
    ],
    addCartData: []
}

const getters = {
    /* newCount: (state) => {
        return state.count + "个";
    }, */
    cartData: (state) => {  // 先渲染商品
        var cartData = state.cartList.map( item => {
            return {
                id: item.id,
                productName: item.productName,
                price: item.price + "元"
            }
        });
        return cartData;   // 返回一个新的数组
    },
    showCartList: (state) => {
        return state.addCartData.map(({id, num}) => {
            let product = state.cartList.find(item => item.id == id);
            // console.info(product);  // 此时的product里面的数据存放就是当前点击“加入到购物车”的那条数据
            return {
                ...product,
                num
            }
        })
    },
    totalPrice: (state, getters) => {  // 计算总价
        let total = 0;
        getters.showCartList.forEach(items => {
            total += items.price * items.num;
        })
        return total;
    },
    totalNum: (state, getters) => {  // 计算总数
        let num = 0;
        getters.showCartList.forEach(items => {
            num += items.num;
        });
        return num;
    }
}

const mutations = {
/*     add: (state) => {
        setTimeout(function () {
           state.count ++;
          // console.log("已经触发add方法");
        }, 3000);
    },
    reduce: (state) => {
        state.count --;
        // console.log("已经触发reduce方法");
    }, */
    addCartList: (state, {id}) => {  // id 是一个对象， {id} 解构id 直接返回id 的值
        let record = state.addCartData.find( n => n.id === id);
        if(!record) {
            state.addCartData.push({
                id,
                num: 1
            })
        } else {
            record.num ++;
        }
       // console.log(record)  // 存放的是当前要加入购物车数据的id 和 num 数据统计
    },
    del: (state, delData) => {
        console.log(delData);
        state.addCartData.forEach((items, index) => {
            if(items.id == delData.id) {
                state.addCartData.splice(index, 1);
            }
        })
    },
    clearAll: (state) => {
        state.addCartData = [];
    }
}

const actions = {
/*     addAction: (context) => {  // 1.context上下文对象在这里相当于store
        context.commit("add");  // actions 提交的是mutations里的方法
    },
    reduceAction: ({commit}) => {  // 2.也可以直接把commit对象传递进来，直接使用commit("reduce")提交
        setTimeout(function() {
            commit("reduce");
        }, 2000);
    }, */
    addCart: ({commit}, payload) => {
        commit("addCartList", {   // 把选中商品的id传给addCartList方法
            id: payload.id
        });
    },
    delproduct: ({commit}, delData) => {
        commit("del", delData);
    },
    clearCart: ({commit}) => {
        commit("clearAll");
    }
}

export const store =  new Vuex.Store({
    state, getters, mutations, actions
})