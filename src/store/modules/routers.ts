import { defineStore } from "pinia";
import type { menuType2 } from "@/types";
import { menuList_MockData } from "@/mock";

export const useRouterStore = defineStore("routerStore", {
    persist: true, //第1种方式 保存的位置 默认 localstorage
    // persist: { //第2种方式
    // 	key: 'useMenu',  //指定存储的名字
    // 	storage: sessionStorage, // 保存的位置 localstorage
    // }, 
    state: () => ({
        menuList: [] as menuType2[],
        count: 0,
    }),
    getters: {
        isLogin: state => state.count > 2,
        newCount: (state) => {
            state.count
        }
    },
    actions: {
        getMenuData() {
            this.menuList = menuList_MockData; 
            return this.menuList;
        },
        show() {
            this.count++;
            console.log("this.count", this.count);
            console.log("this.newCount", this.newCount);
        }
    }
})