<script setup lang="ts">
import layout from "@/layout/layout.vue";
// "./layout/layout.vue";
</script>

<template>
  <layout>
    <template #header> 1  </template> 
    <template #main> 3  </template>
    <template #aside> <div class="aside">e</div> </template>
  </layout>
</template>

<style scoped lang="less">
.aside {
  height: 100vh;
  width: 30px;
  background-color: aqua;
}
</style>
