<template>
  <div id="map" class="map">
    <!-- <div class="toolBar">
      工具的 
    </div> -->
    <slot name="toolBar"></slot>
    <div class="searchBar">
      查询
      <slot name="searchBar"></slot>
    </div>

    <div class="legendBar">
      图例
      <slot name="legendBar"></slot>
    </div>
  </div>
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
import { OSM, XYZ } from "ol/source";
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

onMounted(() => {
  let olmap = new olMap();
  olmap.init(map_config, "map"); 
  // let layers = olmap.map.getLayerGroup().getLayers();
  // console.log("layers:", layers);
  // let t2 = new olMap();
  // let t3 = olMap.instance;
  // console.log("t1=== t2:", t === t2);
  // console.log("t3=== t2:", t3 === t2);
  // console.log("t.map:", t.map);
});
</script>
<style scoped lang="less">
.map {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: antiquewhite;
  z-index: 1;
  .toolBar {
    position: absolute;
    right: 10px;
    top: 20px;
    height: 40px;
    width: 100px;
    background-color: rgb(179, 162, 140);
    z-index: inherit;
  }

  .searchBar {
    position: absolute;
    left: 10px;
    top: 20px;
    height: 40px;
    width: 100px;
    background-color: rgb(20, 183, 66);
    z-index: inherit;
  }

  .legendBar {
    position: absolute;
    bottom: 10px;
    right: 20px;
    height: 40px;
    width: 100px;
    background-color: rgb(217, 137, 17);
    z-index: inherit;
  }
}
</style>
