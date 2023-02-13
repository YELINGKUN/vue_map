<template>
  <div class="about">
    <h1>登录界面</h1>
    <button @click="go">登錄</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import { useMenu } from "@/store";
const router = useRouter();
const route = useRoute();
const useMenuStore = useMenu();
const go = () => {
  // 清除 多余的 路由信息
  useMenuStore.openPages.length = 0;
  router.push("/AppLayout");
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
