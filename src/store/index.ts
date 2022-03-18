import { createStore } from "vuex";

const store = createStore({
    state: {
       
        isLoading: false,
        
        userNmae: "vue3.0开发H5模板"
    },
    getters: {
    
    },
    mutations: {
        
        changeIsLoading(state, val) {
            state.isLoading = val;
        },

        getUserNmae(state,data) {
            state.userNmae = data
        }
       
    },
    actions: {
        
    },
    modules: {},
});
export default store;
