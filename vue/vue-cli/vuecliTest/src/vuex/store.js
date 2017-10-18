import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 声明常量
const state = {
    count : 1
};

// mutations 同步改变状态的方法
const mutations = {
    add(state, n) {
      //  console.log(state);
       state.count +=n;
    },
    reduce(state) {
        state.count --;
    }
}

// getters计算过滤属性
const getters = {
    count: function (state) {
       // console.log(state.count)
        return "￥" + state.count * 2;
    }
}

// action 异步修改状态
const actions = {
    addAction(context) {   // context 上下文对象
      // console.log(context);
        context.commit('add',20);
        setTimeout(()=>{
            context.commit('reduce');
        },3000);
        console.log("异步执行reduce");
    },
    reduceAction({commit}){  // {commit} 参数结构，简化代码
        commit('reduce');
    }
}


// 得暴露出去才可以使用
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})