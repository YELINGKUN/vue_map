
import { transform, fromLonLat } from "ol/proj";
import type { Coordinate } from "ol/coordinate";

//#region 坐标转换
// export const transformTo3857ByArr = (longlat: Coordinate) => {
//     return transform(longlat, "EPSG:4326", "EPSG:3857");
// }

export const transform3857To4326 = (longlat: Coordinate) => {
    return transform(longlat, "EPSG:3857", "EPSG:4326");
};
export const transform4326To3857 = (longlat: Coordinate) => {
    return transform(longlat, "EPSG:4326", 'EPSG:3857');
};
export const positionFromLonLat = (longlat: Coordinate) => {
    return fromLonLat(longlat);
};


//#endregion