<template>
  <div>B2_1</div>
</template>

<script setup lang="ts">
import { useRouter, onBeforeRouteUpdate } from "vue-router";
const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">
.about {
  height: 100%; // 高度一定要设置
  overflow-y: auto;
  overflow-x: hidden;
}

// @media (min-width: 1024px) {
//   .about {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//   }
// }
</style>
