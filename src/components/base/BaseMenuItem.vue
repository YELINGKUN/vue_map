<!-- 菜单组件 存在两种情况 有子级和无子级 -->
<!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况 -->
<template>
  <template v-for="(item, index) in menuData">
    <el-sub-menu
      :key="index"
      :index="item.path"
      v-if="item.children && item.children.length > 0"
    >
      <!-- 情况一：有子集的情况：   -->
      <template #title>
        <el-icon>
          <component
            class="menu-item-icon"
            :is="item?.icon"
            style="width: 16px; height: 16px"
          ></component>
        </el-icon>
        <span> {{ item?.title }}</span>
      </template>
      <BaseMenuItem :menuData="item.children"></BaseMenuItem>
    </el-sub-menu>
    <!-- 情况二：无子集的情况：   -->
    <el-menu-item
      v-else
      :key="item.path"
      :index="item.path"
      @click="gotoPage(item)"
    >
      <el-icon>
        <component
          class="menu-item-icon"
          :is="item?.icon"
          style="width: 16px; height: 16px"
        ></component>
      </el-icon>
      <template #title>
        <span> {{ item?.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import type { menuType2 } from "@/types";
import { ElSubMenu, ElMenuItem } from "element-plus";
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  watchEffect,
  computed,
  type PropType,
} from "vue";
import { useRoute, useRouter } from "vue-router";
// import * as Icons from "@element-plus/icons-vue"; // 【步骤1】全量引入svg图标
const props = defineProps({
  menuData: {
    // type: Object,
    type: Object as PropType<menuType2[]>,
    default: {},
  },
});

// const emit = defineEmits<{
//   (e: 'update:menulist', value: any): void;
// }>();

/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();

/**
 * 数据部分
 */
const data = reactive({});
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});

// 点击跳转
async function gotoPage(params: any) {
  // router.push(params?.path);
}

onMounted(() => {
  // console.log("ssssssss:", props.menuData);
});
watchEffect(() => {});
</script>
<style scoped lang="less">
.menu-item-icon {
  margin-right: 3px;
}
</style>
