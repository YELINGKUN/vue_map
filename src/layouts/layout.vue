<!-- 上下(左右)布局 -->
<template>
  <div class="wrapper">
    <div class="header">
      <slot name="header"> </slot>
    </div>
    <div class="container">
      <div class="aside">
        <slot name="aside"> </slot>
      </div>
      <div class="main">
        <div class="tags">
          <slot name="tags"> </slot>
        </div>
        <div class="content">
          <slot name="content"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  // overflow-y: auto;
}
// .footer
.header {
  flex: none;
  height: 60px;
  background-color: #b3c0cf;
}

.container {
  display: flex;
  overflow-x: hidden; /*x轴禁止滚动*/
  overflow-y: hidden; /*y轴滚动*/
  height: 100vh;
  .aside {
    flex: none;
    height: 100vh;
    // max-width: 220px;
    // width: 220px; // 60px;
    background-color: #d3dce5;
  }
  .main {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    background-color: #ffffff;
    .tags {
      // width: 100vw;
      height: 40px;
      // margin: 0px 4px;
      padding: 8px; 
      // border-radius: 5px;
      background-color: antiquewhite;
    }
    .content {
      height: calc(100vh - 120px);
      margin: 8px 8px 8px 8px;
      padding: 8px;
      border-radius: 5px;
      background-color: rgb(251, 251, 251);
      border: 1px solid gray;
    }
  }
}
</style>
