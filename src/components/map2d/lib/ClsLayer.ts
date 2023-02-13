import { global_layers_config, global_view } from '../global/map_global'
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

class olLayer {
    //#region map 构建单例模式 
    static instance: olLayer;
    constructor() {
        if (!olLayer.instance) {
            olLayer.instance = this
        }
        return olLayer.instance
    }
    //#endregion

    //#region 属性 
    map: olMapType = {} as olMapType;
    view: olViewType = {} as olViewType;
    layers: Array<object> = []; //所有图层集合
    layerConfig: any = [];
    //#endregion


    //#region 图层类 初始化 
    init(layerConfig: any, map: olMapType) {
        // 创建标尺控件
        this.map = map;
        this.view = this.map.getView();
        this.layerConfig = layerConfig;
        global_layers_config.value = this.map;
        console.log("图层类初始化完成！");
    }
    //#endregion 

    //#region 添加图层组合 添加单独图层 创建临时图层 
    /** 添加图层组
     * @description: 通过配置文件添加图层
     * @param {*} paras 图层参数
     * @return {*}
     */
    addLayers(layerConfig: any) {
        if (layerConfig != null) {
            for (let key in layerConfig) {
                let curLayersArr = layerConfig["layers"]; 
                if (curLayersArr) {
                    if (curLayersArr.length > 0) {
                        for (let i = 0; i < curLayersArr.length; i++) {
                            let tl = this.addLayer(curLayersArr[i]);
                        }
                    }
                }
            }
        }
    }

    /**
      * @description:  添加图层 添加单个图层 
      * @param {*} para   加载的是配置文件配置  
      * @return {*} layer 图层对象
      */
    addLayer(para: any) {
        let layer = null;
        //  遍历对象 按照 图层类别进行区分使用的创建图层方法
        switch (para.type.toUpperCase()) {
            case "TILE":
                layer = new Tile({
                    // name: para.layerEnName,
                    // layerName: para.layerCnName,
                    source: new XYZ({
                        url: para.url,
                    })
                });
                break;
            case "PBF":
                let pbfsource = new VectorTileSource({
                    format: new MVT(),
                    url: para.url,
                    minZoom: 10,
                    maxZoom: 22,
                });
                layer = new VectorTileLayer({
                    // id: para.layer,
                    // title: para.layerEnName,
                    // layerName: para.layerCnName,
                    source: pbfsource,
                    // style: ConfigStyle.getStyle(para.layerEnName),
                });
                break;
            case "TDT":

                // let sourceSatellite = new  XYZ({
                //     // url: 'https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=天地图token',
                //     // url: para.url + para.tk,
                //     url: para.url + this.maptoken,
                // });
                // layer = new  Tile({
                //     // id: para.layer,
                //     // title: para.layerEnName,
                //     // layerName: para.layerCnName,
                //     source: sourceSatellite
                // });
                break;
            // case "DEVICELAYER":
            //     let devicelayerSource = new ol.source.Vector({
            //         projection: para.projection,
            //     });
            //     layer = new ol.layer.Vector({
            //         source: devicelayerSource,
            //         visible: true,
            //         style: ConfigStyle.getStyle(para.layerEnName),
            //         updateWhileAnimating: true,
            //         updateWhileInteractin: true,
            //     });
            //     this.layer2dataSource[para.layerEnName] = layer.getSource();
            //     break;
            // case "TEMPLAYER":
            //     let templayerSource = new ol.source.Vector({
            //         projection: para.projection,
            //     });
            //     layer = new ol.layer.Vector({
            //         source: templayerSource,
            //         visible: true,
            //         style: ConfigStyle.getStyle(para.layerEnName),
            //         updateWhileAnimating: true,
            //         updateWhileInteractin: true,
            //     });
            //     this.layer2dataSource[para.layerEnName] = layer.getSource();
            //     break;
            default:
                break;
        }
        if (!layer) {
            return;
        }

        // 只保存矢量图层
        // if (!para.tiled) { 
        //     layer.setProperties({ "layertype": "vector" }); 
        // } else {
        //     layer.setProperties({ "layertype": "tiled" })
        // }

        // 设置图层的显示层级 
        layer.setZIndex(para.layerIndex);
        // layer.name = para.layerEnName;
        layer.setVisible(para.defaultVisible);
        // 检查图层是否存在
        this.map.addLayer(layer);
        //图层添加 放入自定义对象中 形成键值对 
        this.layers[para.layerEnName] = layer;
        // this.layerIndexObj[para.layerEnName] = para.layerIndex;
        // 更新图层的最大索引值
        // this.refreshMaxLayerIndex(para.layerIndex); 
        return layer;
    }

    //#endregion


}
// 导出实例
// const ollayer = new olLayer()
// export { olLayer }// 导出对象
export { olLayer } // 导出类名
