<template>
  <div>B1</div>
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
</style>
