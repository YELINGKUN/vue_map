<!-- 上中下布局 -->
<template>
  <el-container class="wrapper">
    <el-container class="container">
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
      <el-footer class="footer">Footer</el-footer>
    </el-container>
  </el-container>
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
watchEffect(() => { });
</script>

<style scoped lang="less">
.wrapper {
  height: 100%;
  display: flex;
}

.header,
.footer {
  flex: none;
  height: 60px;
  background-color: #b3c0cf;
}

.container {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.aside {
  flex: none;
  width: 220px;
  background-color: #d3dce5;
}

.main {
  flex: 1;
  overflow-y: auto;
  background-color: #e9eef3;
}
</style>
