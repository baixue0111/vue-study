import vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

// 声明常量
const state = {
    count : 1
};

// 得暴露出去才可以使用
export default new Vuex.Store({
    state
})