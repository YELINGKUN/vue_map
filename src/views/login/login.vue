<template>
  <div class="about">
    <h1>登录界面</h1>
    <button @click="go">登錄</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter, onBeforeRouteUpdate } from "vue-router";
const router = useRouter();
const route = useRoute();

const go = () => {
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
