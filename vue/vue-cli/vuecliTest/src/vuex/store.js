import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 声明常量
const state = {
    count : 1
};

// mutations 就是改变状态的方法
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
// 得暴露出去才可以使用
export default new Vuex.Store({
    state,
    mutations,
    getters
})