import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 1,
    cartList: [
        {id: 1, productName: "苹果", price: 5},
        {id: 2, productName: "橘子", price: 2},
        {id: 3, productName: "香蕉", price: 4},
        {id: 4, productName: "葡萄", price: 8},
        {id: 5, productName: "橙子", price: 1}
    ],
    addCart: []
}

const getters = {
    newCount: (state) => {
        return state.count + "个";
    },
    cartData: (state) => {
        var cartData = state.cartList.map( item => {
            return {
                id: item.id,
                productName: item.productName,
                price: item.price + "元"
            }
        });
        return cartData;   // 返回一个新的数组
    }
}

const mutations = {
    add: (state) => {
        setTimeout(function () {
           state.count ++;
          // console.log("已经触发add方法");
        }, 3000);
    },
    reduce: (state) => {
        state.count --;
        // console.log("已经触发reduce方法");
    }
}

const actions = {
    addAction: (context) => {  // 1.context上下文对象在这里相当于store
        context.commit("add");  // actions 提交的是mutations里的方法
    },
    reduceAction: ({commit}) => {  // 2.也可以直接把commit对象传递进来，直接使用commit("reduce")提交
        setTimeout(function() {
            commit("reduce");
        }, 2000);
    }
}

export const store =  new Vuex.Store({
    state, getters, mutations, actions
})