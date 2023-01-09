export type menuType = {
    menu_id: string;
    parent_id: string;
    menu_path: string;
    menu_router: string;
    menu_hidden: string;
    menu_redirect?: string;// 重定向
    menu_name: string;// meta 菜单名称
    menu_icon: string;// meta 菜单图标
    menu_keep: string;// meta 是否缓存页面
    menu_component: string;// 组件 component
}



export type menuType2 = {
    id: number;
    parentId: number;
    path: string;
    name: string;
    redirect?: string;
    title: string;//   meta 菜单名称 
    icon: string | null;// meta 菜单图标
    keep?: string;// meta 是否缓存页面
    component: string;// 组件 component
    children: menuType2[] | null,
    hidden?: boolean;//  
} 

// 标签栏的 数据类型
export type tagsViewType = { 
    path: string;
    name: string; 
    title: string;  
} 