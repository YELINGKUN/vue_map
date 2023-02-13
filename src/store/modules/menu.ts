import { defineStore } from "pinia";
import type { menuType2, tagsViewType } from "@/types";
import { menuList_MockData } from "@/mock";

import router from '@/router';// 引入方式1
// import { useRoute, useRouter } from 'vue-router';  // 引入方式2 这种方式无法获取时用方式

export const useMenu = defineStore("menu", {
    // persist: true, //第1种方式 保存的位置 默认 localstorage
    // persist: { //第2种方式
    // 	key: 'useMenu',  //指定存储的名字
    // 	storage: sessionStorage, // 保存的位置 localstorage
    // }, 
    state: () => ({
        menuList: [] as menuType2[],
        openPages: [] as tagsViewType[], // 打开的页面
        activeTab: "",// 当前打开的页面 
        sideBarCollapse: false
    }),
    getters: {
        // isLogin: state => state.count > 2,

    },
    actions: {
        // tagsView和路由的操作 
        ADD_PAGES(pageRoute: tagsViewType) {
            // 如果已有则不再添加 但要高亮  
            if (!this.openPages.some(r => r.path === pageRoute.path)) {
                this.openPages.push(pageRoute);
            }
            this.activeTab = pageRoute.name;
        },
        REMOVE_PAGES(path: string) {
            let ids = this.openPages.findIndex(r => r.path === path)
            let currPath = router.currentRoute.value.path;
            if (this.openPages.length > 1 && this.openPages[ids].path === currPath) {
                if (ids === 0) {
                    router.push(this.openPages[ids + 1].path)
                } else {
                    router.push(this.openPages[ids - 1].path)
                }
            }
            this.openPages.splice(ids, 1);
            // this.activeTab = this.openPages[ids - 1].name;
        },
        CLEAR_PAGES() {
            // 清除全部
            this.openPages = [];
        },
        // 是否显示侧边栏 是否展开
        SHOW_SIDEBAR() {
            this.sideBarCollapse = true;
        },
        HIDE_SIDEBAR() {
            this.sideBarCollapse = false;
        },
        SET_SIDEBARCOLLAPSE(ishide: boolean) {
            this.sideBarCollapse = ishide;
        },
        getMenuData() {
            this.menuList = menuList_MockData;
            return this.menuList;
        }
    }
})