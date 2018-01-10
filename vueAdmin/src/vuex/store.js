import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        siderStatus: false
    },
    getters: {
        getSiderStatus: (state) => {
            return state.siderStatus;
        }
    },
    mutations: {
        changeBtn: (state) => {
            return state.siderStatus = !state.siderStatus;
        }
    },
    actions: {
        changeBtn: ({commit}) => {
            commit("changeBtn");
        }
    }
})