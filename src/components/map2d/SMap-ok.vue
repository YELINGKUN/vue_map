<template>
  <div id="map" class="map"></div>
</template>
<script lang="ts" setup>
import { onMounted, shallowRef } from "vue";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";
import "ol/ol.css";
import { defaults } from "ol/control";
import { Vector as SourceVec, Cluster } from "ol/source";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import VectorSource from "ol/source/Vector.js";
import VectorLayer from "ol/layer/Vector.js";

 
 
const map = ref(); // 存放地图实例
function initMap() {
  // 地图实例
  map.value = new Map({
    // 让id为map的div作为地图的容器
    target: "map",
    // 设置地图图层
    layers: [
      new TileLayer({
        source: new XYZ({
          url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}", //暗色
        }),
      }),
    ],
    // 设置显示地图的视图
    view: new View({
      // 设置地图中心范围
      // extent参数类型为[minX, minY, maxX, maxY]的ol.Extent
      projection: "EPSG:4326", //EPSG:3857坐标系（投影坐标） EPSG:4326 坐标系（地理坐标）
      center: [113.927905, 24.578945], // 定义地图显示中心于经度，纬度
      zoom: 13,
      maxZoom: 18,
      minZoom: 4, // 并且定义地图显示层级为
      constrainResolution: true, //自动缩放到距离最近的整数级，非整数级别时地图会糊
    }),
    //设置地图控件
    // controls: defaults({
    //   zoom: false, //不显示放大放小按钮；
    //   rotate: false, //不显示指北针控件；
    //   attribution: false, //不显示右下角的地图信息控件；
    // }).extend([]),
  }); 
} 

onMounted(() => {
  initMap();
});
</script>
<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  background-color: blueviolet;
}
.map {
  width: 100%;
  height: 100%;
}
</style>
