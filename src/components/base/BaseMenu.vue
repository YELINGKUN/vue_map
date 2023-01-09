<!-- 侧边栏宽度 收起 宽度60px 展开是200px -->
<template>
  <div class="menu-wrapper">
    <el-menu
      :default-active="activePath"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      popper-effect="dark"
      @open="handleOpen"
      @close="handleClose"
    >
      <BaseMenuItem :menuData="menuArr"></BaseMenuItem>
    </el-menu>
    <div class="btn">
      <el-icon :size="25" @click="expand"><Expand /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRoute, useRouter } from "vue-router";
import { useMenu } from "@/store";
import type { menuType2 } from "@/types";
const useMenuStore = useMenu();
const route = useRoute(); //路由对象
const router = useRouter(); //路由实例

// 监听路由
const activePath = ref("/");
watch(
  () => router.currentRoute.value.path,
  () => {
    activePath.value = router.currentRoute.value.path;
  },
  {
    immediate: true,
  }
);

const asideWidth = ref(60);
const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const expand = () => {
  if (isCollapse.value) {
    asideWidth.value = 200;
  } else {
    asideWidth.value = 60;
  }
  isCollapse.value = !isCollapse.value;
};

const menuArr = ref<menuType2[]>();

async function init() {
  // 这边执行useMenuStore 中获取方法
  menuArr.value = useMenuStore.getMenuData(); 
}

onMounted(() => {
  init();
});
onUnmounted(() => {
  
})
</script>

<style lang="less" scoped>
.menu-wrapper {
  // height: 100vh;
  // background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: rgb(255, 255, 255);
    i {
      cursor: pointer;
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
