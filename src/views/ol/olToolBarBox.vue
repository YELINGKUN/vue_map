<template>
  <!-- https://www.cnblogs.com/guanhx/p/15588900.html 二级菜单参考 -->
  <div class="wrap-toolBar-box">
    <!-- <el-dropdown>
      <el-button type="primary">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown> -->
    <el-button type="primary">Primary</el-button>

    <el-button type="success">Success</el-button>
    <el-dropdown split-button type="primary" @click="handleClick">
      工具箱
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>测距</el-dropdown-item>
          <el-dropdown-item>面积</el-dropdown-item>
          <el-dropdown-item>清除</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <div class="btn-box">
      <!-- <el-button type="success">Success</el-button> -->

      <el-popover
        placement="bottom-start"
        title="图层管理"
        :width="200"
        trigger="hover"
        content="this is content, this is content, this is content"
        persistent="false"
      >
        <template #default> 
          <layerManger></layerManger>
        </template>
        <template #reference>
          <el-button class="m-2">图层管理</el-button>
 
        </template>
      </el-popover>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type TabsPaneContext, ElTabs, ElTabPane } from "element-plus";
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
import { ArrowDown } from "@element-plus/icons-vue";

import layerManger from "./components/layerManger/layerManger.vue";

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

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert("button click");
};
const activeName = ref("first");
</script>
<style scoped lang="less">
.wrap-toolBar-box {
  position: absolute;
  right: 10px;
  top: 20px;
  // height: 40px;
  // width: 100px;
  // background-color: rgb(255, 255, 255);
  z-index: inherit;
  .btn-box {
    display: inline-flex;
    // margin: auto 10px;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  // color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-button + .el-button {
  margin-left: 0px;
}
</style>
