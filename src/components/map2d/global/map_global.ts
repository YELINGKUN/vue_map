// 全局i相关参数配置
import type { Map as olMapType, View as olViewType } from "ol";
import Map from "ol/Map";
import View from "ol/View";
export const global_map = ref<olMapType>();
export const global_view = ref<olViewType>();
export const global_layers: object = {};
export const global_layers_config = ref<any>([]);
export const global_map_config: object = {};