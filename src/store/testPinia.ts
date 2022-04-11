import { ref } from 'vue'
import { defineStore } from "pinia"
export const usePiniaState = defineStore('pinia', ()=>{
    const userName = ref('')
    const getUserNmae = (data) => {
        userName.value = data
    }
    return { userName, getUserNmae}
})


// export const usePiniaState = defineStore({
//     id: 'textPinia',
//     state: () => {
//         return {
//             userName: ''
//         }
//     },
//     getters: {

//     },
//     actions: {
//         getUserNmae(data) {
//             this.userName = data
//         }
//     }
// })