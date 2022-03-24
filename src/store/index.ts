import { createStore } from "vuex";

const store = createStore({
    state: {  
        isLoading: false,
        userNmae: ""
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
