<template>
  <div class="wrap-layer-box"> 滴滴多多多多多多</div>
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
} from "vue";
import { useRoute, useRouter } from "vue-router";
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
const data = reactive({});
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
});
watchEffect(() => {});
</script>
<style scoped lang="less">
 
.wrap-layer-box {
    position: absolute;
    right: 10px;
    top: 20px;
    height: 40px;
    width: 100px;
    background-color: rgb(179, 162, 140);
    z-index: inherit;
  }
 
</style>
