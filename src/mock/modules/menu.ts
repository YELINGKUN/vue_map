
import type { menuType, menuType2 } from "@/types";

// 菜單列表
export const menuList_MockData_test: menuType[] = [
    {
        menu_id: "1",
        parent_id: "0",
        menu_path: "/",
        menu_router: "",
        menu_hidden: "",
        menu_name: "",// meta 菜单名称
        menu_icon: "",// meta 菜单图标
        menu_keep: "",// meta 是否缓存页面
        menu_component: "",// 组件 component 
        menu_redirect: "",// 重定向
    }
];

export const menuList_MockData: menuType2[] = [
    {
        "id": 1,
        "path": "/home",
        "name": "home",
        "title": "首页",
        "icon": "CirclePlus",
        "component": "",
        "parentId": 0,
        "children": null
    },
    {
        "id": 2,
        "path": "/A",
        "name": "A",
        "title": "组A",
        "icon": "CirclePlus",
        "component": "A",
        "parentId": 0,
        "children": [{
            "id": 6,
            "path": "/A/A1",
            "name": "A1",
            "title": "组A1",
            "icon": "Switch",
            "component": "A/A1",
            "parentId": 2,
            "children": null
        },
        {
            "id": 7,
            "path": "/A/A2",
            "name": "A2",
            "title": "组A2",
            "icon": "SwitchButton",
            "component": "A/A2",
            "parentId": 2,
            "children": null
        }]
    },
    {
        "id": 3,
        "path": "/B",
        "name": "B",
        "title": "组B", 
        "icon": "InfoFilled",
        "component": "B",
        "parentId": 0,
        "children": [{
            "id": 9,
            "path": "/B/B1",
            "name": "B1",
            "title": "组B1",
            "icon": "UserFilled",
            "component": "B/B1",
            "parentId": 3,
            "children": null
        },
        {
            "id": 10,
            "path": "/B/B2",
            "name": "B2",
            "title": "组B2",
            "icon": "Histogram",
            "component": "B/B2",
            "parentId": 3,
            "children": [{
                "id": 20,
                "path": "/B/B2/B2_1",
                "name": "B2_1",
                "title": "组B2_1",
                "icon": "Grid",
                "component": "B/B2/B2_1",
                "parentId": 10,
                "children": null
            }]
        }]
    }
]