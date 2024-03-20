<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(
  () =>
    window.location.pathname !== "/" && router.push(window.location.pathname),
);
</script>
<template>
  <RouterView :key="$route.fullPath" />
</template>
