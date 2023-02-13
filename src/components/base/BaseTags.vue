<template>
  <div class="tags-wrapper" :style="tempTagsWidth2">
    <!-- {{ useMenuStore.openPages }} -->
    <el-tabs
      v-model="activeTab"
      type="card"
      class="demo-tabs"
      :closable="showClosable"
      @tab-remove="removeTab"
      @tab-change="changeTab"
    >
      <el-tab-pane
        v-for="item in useMenuStore.openPages"
        :key="item.path"
        :label="item.title"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
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
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMenu } from "@/store";
import type { tagsViewType } from "@/types";
const route = useRoute(); //路由对象
const router = useRouter(); //路由实例
const useMenuStore = useMenu();
// 当前的被选中的
const activeTab = ref("");
watch(
  () => router.currentRoute.value.path,
  () => {
    activeTab.value = router.currentRoute.value.path;
  },
  {
    immediate: true,
  }
);

// 监听左侧展开栏 设置当前dom宽度
const tempTagsWidth = ref(0);
watch(
  () => useMenuStore.sideBarCollapse,
  () => {
    if (useMenuStore.sideBarCollapse) {
      // 收起了
      tempTagsWidth.value = 60;
    } else {
      tempTagsWidth.value = 200;
    }
  },
  {
    immediate: true,
  }
);

const tempTagsWidth2 = computed(() => {
  return `width: calc(100vw - ${tempTagsWidth.value})+px;`;
}); 

const showClosable = computed(() => {
  return useMenuStore.openPages.length > 1 ? true : false;
});

const removeTab = (path: string) => {
  useMenuStore.REMOVE_PAGES(path);
};

const changeTab = (path: string) => {
  console.log("path:", path);
  router.push(path);
  useMenuStore.activeTab = path;
};

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
onUnmounted(() => {
  useMenuStore.CLEAR_PAGES();
});
watchEffect(() => {});
</script>
<style scoped lang="less">
.tags-wrapper {
  // width: calc(100vw - tempTagsWidth+``);
  height: 40px;
  background-color: aqua;
}
</style>
