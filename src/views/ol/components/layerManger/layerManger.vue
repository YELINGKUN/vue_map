<template>
  <div class="wrapper">
    <!-- <p>图层管理</p> -->
    <el-tree
      ref="treeRef"
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      highlight-current
      :props="defaultProps"
    />
<!-- 
    <div class="buttons">
      <el-button @click="getCheckedNodes">get by node</el-button>
      <el-button @click="getCheckedKeys">get by key</el-button>
      <el-button @click="setCheckedNodes">set by node</el-button>
      <el-button @click="setCheckedKeys">set by key</el-button>
      <el-button @click="resetChecked">reset</el-button>
    </div> -->
  </div>
</template>
<script lang="ts" setup>
import { ElTree, ElButton } from "element-plus";
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

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
});
watchEffect(() => {});

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}
const treeRef = ref<InstanceType<typeof ElTree>>();

const getCheckedNodes = () => {
  console.log(treeRef.value!.getCheckedNodes(false, false));
};
const getCheckedKeys = () => {
  console.log(treeRef.value!.getCheckedKeys(false));
};
// const setCheckedNodes = () => {
//   treeRef.value!.setCheckedNodes(
//     [
//       {
//         id: 5,
//         label: "Level two 2-1",
//       },
//       {
//         id: 9,
//         label: "Level three 1-1-1",
//       },
//     ] as Node[],
//     false
//   );
// };
const setCheckedKeys = () => {
  treeRef.value!.setCheckedKeys([3], false);
};
const resetChecked = () => {
  treeRef.value!.setCheckedKeys([], false);
};

const defaultProps = {
  children: "children",
  label: "label",
};

const data: Tree[] = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 9,
            label: "Level three 1-1-1",
          },
          {
            id: 10,
            label: "Level three 1-1-2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 5,
        label: "Level two 2-1",
      },
      {
        id: 6,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 7,
        label: "Level two 3-1",
      },
      {
        id: 8,
        label: "Level two 3-2",
      },
    ],
  },
];
</script>
<style scoped lang="less">
.wrapper {
  width: 100%;
  height: 100%;
}

.toolBar {
  position: absolute;
  right: 10px;
  height: 40px;
  width: 100px;
  background-color: rgb(153, 111, 57);
  z-index: inherit;
}
</style>
