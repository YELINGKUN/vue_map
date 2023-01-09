<!-- 首页 -->
<template>
  <layout>
    <template #header> <BaseHeader> </BaseHeader> </template>
    <template #aside>
      <BaseMenu> </BaseMenu>
    </template>
    <template #tags>
      <BaseTags> </BaseTags>
    </template>
    <template #content>
      <router-view v-slot="{ Component }">
        <transition name="slide-x-transition">
          <keep-alive>
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </router-view>
    </template>
  </layout>
</template>

<script setup lang="ts">
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import { useMenu } from "@/store";
const router = useRouter();
const route = useRoute();
const menuStore = useMenu();
</script>

<style scoped lang="less"></style>
