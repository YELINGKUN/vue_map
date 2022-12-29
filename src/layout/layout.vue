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
        <slot name="main"> </slot>
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
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header,
.footer {
  flex: none;
  height: 60px;
  background-color: #b3c0cf;
}

.container {
  display: flex;
  // flex-direction: column;
  flex: 1;
}

.aside {
  flex: none;
  // width: 220px;
  // width: 60px;
  background-color: #d3dce5;
}

.main {
  flex: 1;
  overflow-y: auto;
  background-color: #e9eef3;
}
</style>
