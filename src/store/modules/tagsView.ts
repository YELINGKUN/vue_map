import { defineStore } from "pinia";

export const useTags = defineStore("tags", {
    persist: true, //第1种方式 保存的位置 默认 localstorage
	// persist: { //第2种方式
	// 	key: 'useTags',  //指定存储的名字
	// 	storage: sessionStorage, // 保存的位置 localstorage
	// }, 
    state: () => ({
        openPages: [], 
    }),
    getters: {
        // isLogin: state => state.count > 2, 
        // newCount: (state) => {
        //     return state.count;
        // }  
    },
    actions: { 
        // show() {
        //     this.count++;
        //     console.log("this.count", this.count);
        //     console.log("this.newCount", this.newCount);
        // }
    }
})