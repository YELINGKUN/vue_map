import type { layerConfigType } from "../types"

export const map_config = {
    "projection": "EPSG:3857",
    "center": [118.14010620, 24.49089782],
    "zoom": 12,
    "minZoom": 10,
    "maxZoom": 18,
    "rotation": 0,
    "extent": [118.44841, 24.89267, 117.81326, 24.34897]
}

export const layerlist_MockData: layerConfigType[] = [
    {
        id: 1,
        label: 'Level one 1',
        children: [
            {
                id: 4,
                label: 'Level two 1-1',
                children: [
                    {
                        id: 9,
                        label: 'Level three 1-1-1',
                    },
                    {
                        id: 10,
                        label: 'Level three 1-1-2',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: 'Level one 2',
        children: [
            {
                id: 5,
                label: 'Level two 2-1',
            },
            {
                id: 6,
                label: 'Level two 2-2',
            },
        ],
    },
    {
        id: 3,
        label: 'Level one 3',
        children: [
            {
                id: 7,
                label: 'Level two 3-1',
            },
            {
                id: 8,
                label: 'Level two 3-2',
            },
        ],
    },
]
// 天地图token 
export const tdt_token = "dadfsafda";
export const layer_config = [{
    id: 1,
    label: '基础地图',
    layer: null,
    children: [{
        id: 3,
        label: '底图',
        layer: {
            type: "TILE",
            url: "http://118.195.248.222/hcimg/{z}/{x}/{y}.png",
            layerIndex: 3, 
            isTiled: true, 
            isBaseLayer:true, 
            layerCnName: "海沧底图",
            layerEnName: "hcimg",
            img: "",
            alwayShow: "false", 
            defaultVisible: true,
            dataSource: "geoserver",
        }
    }]
},
{
    id: 2,
    label: '业务地图',
    layer: null,
    children: [{
        id: 4,
        label: '厦门底图',
        layer: {
            "type": "TILE",
            "url": "http://118.195.248.222/hcimg/{z}/{x}/{y}.png",
            "layer": "hcimg",
            "tiled": true,
            "layerID": "3",
            "isBaseLayer": "true",
            "layerCnName": "海沧底图",
            "layerEnName": "hcimg",
            "img": "",
            "alwayShow": "false",
            "layerIndex": "3",
            "defaultVisible": true,
            "dataSource": "geoserver",
        }
    }]
}];

export const layer_config4 = {
    "baselayers": {
        "groupName": "基础地图",
        // "layers": [
        //     {
        //     "type": "PBF",
        //     "url": "http://192.168.223.60:8080/daxie/{z}/{x}/{y}.pbf",
        //     // "url": "../data/pbf/{z}/{x}/{y}.pbf",
        //     "layer": "daxie",
        //     "projection": "EPSG:3857",
        //     "tiled": true,
        //     "serverType": "",
        //     "layerID": "1",
        //     "isBaseLayer": "true",
        //     "layerCnName": "大榭基础地图",
        //     "layerEnName": "daxie",
        //     "img": "./static/images/layerid1.png",
        //     "alwayShow": "false",
        //     "layerIndex": "1",
        //     "defaultVisible": true
        // }]
        "layers": [{
            "type": "TILE",
            //  "url": "../data/tiles/{z}/{x}/{y}.png",
            "url": "http://118.195.248.222/jgdt/{z}/{x}/{y}.png",
            "layer": "daxie",
            "projection": "EPSG:3857",
            "tiled": true,
            "serverType": "",
            "layerID": "1",
            "isBaseLayer": "true",
            "layerCnName": "大榭基础地图",
            "layerEnName": "daxie",
            "img": "./static/images/layerid1.png",
            "alwayShow": "false",
            "layerIndex": "1",
            "defaultVisible": true
        }]
    },
}



export const layer_config3 = {
    "mapConfig": {

        "layers": {
            "baselayers": {
                "groupName": "基础地图",
                // "layers": [
                //     {
                //     "type": "PBF",
                //     "url": "http://192.168.223.60:8080/daxie/{z}/{x}/{y}.pbf",
                //     // "url": "../data/pbf/{z}/{x}/{y}.pbf",
                //     "layer": "daxie",
                //     "projection": "EPSG:3857",
                //     "tiled": true,
                //     "serverType": "",
                //     "layerID": "1",
                //     "isBaseLayer": "true",
                //     "layerCnName": "大榭基础地图",
                //     "layerEnName": "daxie",
                //     "img": "./static/images/layerid1.png",
                //     "alwayShow": "false",
                //     "layerIndex": "1",
                //     "defaultVisible": true
                // }]
                "layers": [{
                    "type": "TILE",
                    //  "url": "../data/tiles/{z}/{x}/{y}.png",
                    "url": "http://118.195.248.222/jgdt/{z}/{x}/{y}.png",
                    "layer": "daxie",
                    "projection": "EPSG:3857",
                    "tiled": true,
                    "serverType": "",
                    "layerID": "1",
                    "isBaseLayer": "true",
                    "layerCnName": "大榭基础地图",
                    "layerEnName": "daxie",
                    "img": "./static/images/layerid1.png",
                    "alwayShow": "false",
                    "layerIndex": "1",
                    "defaultVisible": true
                }]
            },
        },
        "tools": {
            // 常用工具
            "commontool": true,
            "tab": {
                // tab工具下的
                "layerctrltool": true,
                "measuretool": true,
                "searchtool": false,
            }
        },
        "mapResolution": {
            ZOOM1: 78271.52,
            ZOOM2: 39135.76,
            ZOOM3: 19567.88,
            ZOOM4: 9783.94,
            ZOOM5: 4891.97,
            ZOOM6: 2445.98,
            ZOOM7: 1222.99,
            ZOOM8: 611.4962,
            ZOOM9: 305.7481,
            ZOOM10: 152.8741,
            ZOOM11: 76.437,
            ZOOM12: 38.2185,
            ZOOM13: 19.1093,
            ZOOM14: 9.5546,
            ZOOM15: 4.7773,
            ZOOM16: 2.3887,
            ZOOM17: 1.1943,
            ZOOM18: 0.5972,
            ZOOM19: 0.2986,
            ZOOM20: 0.1493,
            ZOOM21: 0.0746,
            ZOOM22: 0.0373,
            ZOOM23: 0.0187,
        },
    },


}