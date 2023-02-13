<template>
  <div id="map" class="map"></div>
</template>
<script lang="ts" setup>
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
  shallowRef,
} from "vue";
import { useRoute, useRouter } from "vue-router";

import type { Map as olMapType } from "ol";
import { Map, View } from "ol";
import { OSM } from "ol/source";
import TileLayer from "ol/layer/Tile";

import { defaults as defaultControls } from "ol/control";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import Feature from "ol/Feature";
import { Stroke, Style, Circle, Fill } from "ol/style";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import { olMap } from "./lib/ClsMap";
import { global_map } from "@/components/map2d/global/map_global";
import { map_config } from "@/components/map2d/global/map_config";
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();
//console.log('1-开始创建组件-setup')
/**
 * 数据部分
 */

const map = ref();
const view = new View({
  projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
  center: [113.5, 22.2], // 中心点
  zoom: 13, // // 地图缩放级别(打开页面时默认级别)
  // extent: [113.4445, 22.0767, 113.714, 22.417], // 范围
  maxZoom: 20,
  minZoom: 1, // 地图缩放最小级别
});

const initMap = () => {
  // 地图实例
  map.value = new Map({
    layers: [
      // 图层
      new TileLayer({
        source: new OSM(),
      }),
    ],
    // keyboardEventTarget: document,
    target: "map", // 对应页面里 id 为 map 的元素
    view: view,
    // controls: defaultControls().extend([new ZoomSlider()]),
  });

  console.log("map:", map);
  console.log("view:", view);
};

onMounted(() => {
  // initMap();
  let olmap = new olMap();
  olmap.init(map_config, "map");
  console.log("map:", olmap.map);

  let layers = olmap.map.getLayerGroup().getLayers();
  console.log("layers:", layers);
  // let t2 = new olMap();
  // let t3 = olMap.instance;
  // console.log("t1=== t2:", t === t2);
  // console.log("t3=== t2:", t3 === t2);
  // console.log("t.map:", t.map);
});
</script>
<style scoped lang="less">
.map {
  height: 300px;
  width: 400px;
  background-color: antiquewhite;
}
</style>
