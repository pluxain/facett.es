<script lang="ts" setup>
type Props = {
  text: string;
  cssClasses?: string;
};

withDefaults(defineProps<Props>(), {
  cssClasses: "mb-2 text-lg font-bold uppercase",
});
</script>

<template>
  <h3 :class="cssClasses">{{ text }}</h3>
</template>
