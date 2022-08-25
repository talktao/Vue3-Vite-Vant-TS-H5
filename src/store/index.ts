import { createStore } from "vuex";
import { createPinia } from "pinia";

export const vuexStore = createStore({
    state: {
        isLoading: false,
        userName: ""
    },
    getters: {

    },
    mutations: {
        changeIsLoading(state, val) {
            state.isLoading = val;
        },

        getUserNmae(state, data) {
            state.userName = data;
        }

    },
    actions: {

    },
    modules: {},
});


export const piniaStore = createPinia();
