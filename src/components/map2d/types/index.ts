export type layerType = "tile" | "pbf" | "wms" | "wmts" | "wfs"; // 图层类型 OGC
export type serverType = "geoserver" | "database"; // 服务类型 数据来源是数据库还是服务器 矢量分为多种 服务器出来的矢量 数据库直接出来的矢量

export type layerItemType = {
    type: layerType;
    url: string;// 图层url 
    isTiled: boolean;// 是否切片 服务还是栅格服务
    layerCnName: string;// 图层中文名称
    layerEnName: string;// 图层英文名称
    layerIndex: number;// 图层索引
    defaultVisible?: true;// 默认初始时是否可见 
    hidden?: boolean;// 和权限有关 不过暂时不用 
    projection?: string;// 投影名称如 "EPSG:3857",
    serverType?: serverType;// 服务类型 
    // layer: string;// 图层名称 
}

export type layerConfigType = {
    id: number;
    label: string;
    children?: layerConfigType[] | null;
    layer?: layerItemType | null;
}



