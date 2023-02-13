import { global_map, global_view } from '../global/map_global'
import { map_config } from '../global/map_config'
import { transform4326To3857 } from '@/components/map2d/utils';
import type { Map as olMapType, View as olViewType } from "ol";
import Map from "ol/Map";
import View from "ol/View";
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import Tile from 'ol/layer/Tile'    // 瓦片渲染方法
import VectorTileSource from 'ol/source/VectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import XYZ from 'ol/source/XYZ'
import { defaults, DoubleClickZoom, Interaction } from 'ol/interaction';
import MVT from 'ol/format/MVT';
import { Control, defaults as defaultControls } from 'ol/control';
import { fromLonLat } from 'ol/proj';

class olMap {
    //#region map 构建单例模式 
    static instance: olMap;
    constructor() {
        if (!olMap.instance) {
            olMap.instance = this
        }
        return olMap.instance
    }
    //#endregion

    //#region 属性 
    map: olMapType = {} as olMapType;
    view: olViewType = {} as olViewType;
    layers: Array<object> = []; //所有图层集合
    maptoken: string = ""; // 天地图 token key
    //#endregion


    //#region map 初始化 
    init(config: any, dom: any) {
        // 创建标尺控件
        this.map = new Map({
            target: dom,
            layers: [
                //#region 测试 
                new TileLayer({
                    source: new XYZ({
                        url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}", //暗色
                    }),
                }),
                // 图层无法加载是链接问题 非代码问题 干妈的
                // new TileLayer({
                //     source: new OSM()
                // }) 
                new TileLayer({
                    source: new XYZ({
                        url: "http://175.24.167.247:81/satellite/{z}/{x}/{y}.jpg",
                    })
                })
                //#endregion
            ],
            // renderer: 'webgl',  
            view: new View({
                projection: config.projection, // 'EPSG:4326',// 这里不设置默认是3857
                center: config.projection == "EPSG:3857" ? transform4326To3857(config.center) : fromLonLat(config.center),
                rotation: config.rotation,
                zoom: config.zoom,
                minZoom: config.minZoom,
                maxZoom: config.maxZoom,
            }),
            controls: defaultControls({
                //清除地图上默认样式（放大、缩小、旋转按钮等）
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                }),
                attribution: false,
                rotate: false,
                zoom: false
            })
        });
        if (this.map != null) {
            this.view = this.map.getView();
            //region 清除双击放大
            const dblClickInteraction = this.map
                .getInteractions()
                .getArray()
                .find(interaction => {
                    return interaction instanceof DoubleClickZoom;
                }) as Interaction;
            this.map.removeInteraction(dblClickInteraction);
            //endregion 
        }
        global_map.value = this.map;
        global_view.value = this.view;
        console.log("初始化完成！");
    }
    //#endregion


}
// 导出实例
// const olmap = new olMap()
// export { olmap }// 导出对象
export { olMap } // 导出类名
