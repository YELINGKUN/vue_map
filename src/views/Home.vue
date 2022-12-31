<!-- 首页 -->
<template>
  <layout>
    <template #header> <BaseHeader> </BaseHeader> </template>
    <template #aside>
      <BaseMenu> </BaseMenu>
    </template>
    <template #tags> 标签view 
      <router-link replace to="/HomeView"><button>HomeView</button></router-link>
      <router-link replace to="/about"><button>about</button></router-link>
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
const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less"></style>
